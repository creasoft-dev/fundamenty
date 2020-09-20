const path = require('path');
const fs = require('fs');

const _ = require('lodash');
const chalk = require('chalk');
const commander = require('commander');
const nunjucks = require('nunjucks');

class Logger {
    constructor(level) {
        this.level = level;
    }
    get logLevel() {
        return this.level;
    }
    set logLevel(level) {
        this.level = level;
    }
    debug(message, ...args){
        (this.level == 0) && console.debug(message, ...args)
    }
    info(message, ...args) {
        (this.level <= 1) && console.log(chalk.blueBright(message), ...args)
    }
    warn(message, ...args)  {
        (this.level <= 2) && console.warn(chalk.yellowBright(message), ...args)
    }
    error(message, ...args) {
        (this.level <= 3) &&
            console.error(chalk.redBright(message), ...args)
    }
}

const logger = new Logger();

function logAndThrow(message) {
    logger.error(message);
    throw Error(message);
}

/**
 * Reads a json file and parses it
 * @param {string} path
 * @returns {object} parsed json
 */
function readJson(path) {
    let rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
}

/**
 * Joins two paths.
 * Wrapper of path.join
 * @param  {...string} paths
 */
function pathJoin(...paths){
    return path.join(...paths);
};

/**
 * Convert a string into a snake case
 * @param {string} str
 */
function toSnakeCase(str, joinChar = '_') {
    return str && str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join(joinChar);
}


/**
 * Returns Eleventy's input path.
 * This is the root path where the rest of the template and source files are.
 * @param {FundamentyConfig} config
 */
function getInputPath(config) {
    const inputPath = _.get(config, 'eleventyConfig.dir.input');
    return  inputPath ? path.join(config.rootPath, inputPath) : config.rootPath;
}

/**
 * Returns Eleventy's output path.
 * This is the root path where the rest of the template and source files are.
 * @param {FundamentyConfig} config
 */
function getOutputPath(config) {
    const outputPath = _.get(config, 'eleventyConfig.dir.output');
    return  outputPath ? path.join(config.rootPath, outputPath) : config.rootPath;
}

/**
 *
 * @param {object} scriptMeta
 * @param {[string]} args
 * @returns { {optKey: string} } Key value pair of the options
 */
function parseArgs(scriptMeta, args) {
    let paramKeys = [];
    let params = {};

    // Internal function to extract keys, those enclosed in <>
    const regex = new RegExp('\<.*?\>', 'g');
    const extractKeys = (flags) => {
        const keys = flags.match(regex);
        return keys ? keys.map( str => str.substring(1, str.length-1)) : [];
    }

    const parseOptions = (program, optFlags) => {
        if (optFlags) {
            for(const optFlag of optFlags) {
                paramKeys.push(...extractKeys(optFlag));
                program.option(optFlag);
            }
        }
    }


    const program = new commander.Command(scriptMeta.name)
        .arguments(scriptMeta.command.arguments);
    const argsKeys = extractKeys(scriptMeta.command.arguments);

    parseOptions(program, scriptMeta.command.requiredOptions);
    parseOptions(program, scriptMeta.command.options);

    program.action( (...argus) => {
            if (argus.length > 0) {
                params.arguments = argus.slice(0, argus.length-1);
            }
            if (argsKeys.length <= argus.length) {
                for(let i=0; i < argsKeys.length; i++) {
                    params[argsKeys[i]] = argus[i];
                }
            }
        })
        .parse(args, { from: 'user' });

    for(paramKey of paramKeys) {
        params[paramKey] = program[paramKey];
    }

    return params;
}

/**
 * Renders the template with the model
 * @param {string} templatePath
 * @param {object} model
 */
function renderFromTemplate(templatePath, model) {
    const template = fs.readFileSync(templatePath).toString();

    return nunjucks.renderString(template, model);
}

/**
 * Saves the rendered template to a file
 * @param {string} templatePath
 * @param {object} model
 * @param {string} destPath
 */
function renderAndSaveFromTemplate(templatePath, model, destPath) {
    const content = renderFromTemplate(templatePath, model);
    fs.writeFileSync(destPath, content);
}


/**
 * Generates file
 * @param {string} rootPath
 * @param {string} templateDir
 * @param {string} templateName
 * @param {object} params
 * @param {object} model
 * @param {string} destSubDir
 * @param {object} opts
 */
function generateFileFromTemplate(rootPath, templateDir, templateName, params, model, destSubDir, opts) {
    // const rootPath = utils.getInputPath(config);

    // destSubDir = '/archi/repo'
    const destDirPath = pathJoin(rootPath, params.lang, destSubDir);

    if (!fs.existsSync(destDirPath)) {
        logAndThrow(`Error: directory [${destDirPath}] does not exist.`)
    }

    const todayIso = (new Date()).toISOString().substring(0,10);
    let filename = toSnakeCase(params.title, '-') + '.md';
    if (_.get(opts, 'prependDate', false)) {
        filename = todayIso + '-' + filename;
    }

    // templateName = '$archi-item.md.njk'
    const templatePath = pathJoin(templateDir, templateName);

    const destPath = pathJoin(destDirPath, filename);
    if (fs.existsSync(destPath)) {
        logAndThrow(`Error: File [${destPath}] already exists`);
    }

    logger.debug(`Generating file [${destPath}]...`);
    const renderingModel = {
        ...model,
        ...params,
        date: todayIso
    };
    renderAndSaveFromTemplate(templatePath, renderingModel, destPath);
    logger.info(`Generated file [${destPath}]`);
}

module.exports = {
    logger,
    logAndThrow,
    readJson,
    pathJoin,
    toSnakeCase,
    getInputPath,
    getOutputPath,
    renderFromTemplate,
    renderAndSaveFromTemplate,
    generateFileFromTemplate,
    parseArgs
}
