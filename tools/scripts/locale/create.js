const fs = require('fs');
const chalk = require('chalk');
const commander = require('commander');

const utils = require('../../utils');

const verbose = chalk.magenta;

const SCRIPT_NAME = 'locale/create'

const meta = {
    description: "Create a locale: creates directory and {lang}.json file",
    command: {
        arguments: '<langCode> [langName]'
    }
};

/**
 *
 * @param {[]} args
 * @returns { {langCode, langName} }
 */
function parseArgs(args) {
    let params = {};
    const program = new commander.Command(SCRIPT_NAME)
        .arguments(meta.command.arguments)
        .action((langCode, langName) => {
            // console.log('***: %j, %j', langCode, options.name);
            params.langCode = langCode;
            params.langName = langName || langCode
        })
        .parse(args, { from: 'user' });

    return params;
}

/**
 *
 * @param {*} config
 * @param {ScriptContext} context
 */
const run = async (config, context) => {

    const params = parseArgs(context.args);

    context.verbose && console.log(verbose(`Executing ${SCRIPT_NAME} (%j)`), params);

    const inputPath = utils.getInputPath(config);

    const langPath = utils.pathJoin(inputPath, params.langCode)
    if (!fs.existsSync(langPath)){
        context.verbose && console.log(verbose(`Creating directory [${langPath}]`));
        fs.mkdirSync(langPath);

        const subDirPath = utils.pathJoin(langPath, 'posts');
        context.verbose && console.log(verbose(`Creating directory [${subDirPath}]`));
        fs.mkdirSync(subDirPath);

        const templatePath = utils.pathJoin(__dirname, '$locale.json.njk');
        const destPath = utils.pathJoin(langPath, 'locale.json');

        context.verbose && console.log(verbose(`Generating file [locale.json]`));
        utils.generateFileFromTemplate(templatePath, { locale: params.langCode }, destPath);
    }
}

module.exports = {
    meta,
    run
};
