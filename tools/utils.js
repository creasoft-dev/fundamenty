const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const chalk = require('chalk');
const nunjucks = require('nunjucks');

const verbose = chalk.magenta;
const error = chalk.red;

const logger = {
    debug: (message, ...args) => console.debug(message, ...args),
    info: (message, ...args) => console.log(chalk.blueBright(message), ...args),
    warn: (message, ...args) => console.warn(chalk.yellowBright(message), ...args),
    error: (message, ...args) => console.error(chalk.redBright(message), ...args)
}

function logAndThrow(message) {
    logger.error(message);
    throw Error(message);
}

function toSnakeCase(str) {
    return str && str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
}

function pathJoin(...paths){
    return path.join(...paths);
};

/**
 *
 * @param {FundamentyConfig} config
 */
function getInputPath(config) {
    const inputPath = _.get(config, 'eleventyConfig.dir.input');
    return  inputPath ? path.join(config.rootPath, inputPath) : config.rootPath;
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
function generateFileFromTemplate(templatePath, model, destPath) {
    const content = renderFromTemplate(templatePath, model);
    fs.writeFileSync(destPath, content);
}

module.exports = {
    logger,
    logAndThrow,
    toSnakeCase,
    pathJoin,
    getInputPath,
    renderFromTemplate,
    generateFileFromTemplate
}
