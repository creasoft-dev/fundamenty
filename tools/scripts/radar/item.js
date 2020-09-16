const fs = require('fs');
const chalk = require('chalk');
const commander = require('commander');

const utils = require('../../utils');

const verbose = chalk.magenta;
const error = chalk.red;

const SCRIPT_NAME = 'radar/item'

const meta = {
    description: "Create a new Radar item: creates a {lang}/{radar}/{category}/{item}.md file",
    command: {
        arguments: '<title>',
        requiredOptions: [
            '--cate <category>',
            '--radar <radar>'
        ],
        options: [
            '-l, --lang <language>',
            '--ring <ring>'
        ]
    }
};

/**
 *
 * @param {[]} args
 * @returns { {title, radar, ,cate, ring, langCode} }
 */
function parseArgs(args) {
    let params = {};
    const program = new commander.Command(SCRIPT_NAME)
        .arguments(meta.command.arguments);

    for(const reqOpt of meta.command.requiredOptions) {
        program.option(reqOpt);
    }
    for(const opt of meta.command.options) {
        program.option(opt);
    }

    program.action((title) => {
            params.title = title;
        })
        .parse(args, { from: 'user' });

    params.lang = program.lang;
    params.radar = program.radar;
    params.cate = program.cate;
    params.ring = program.ring;

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

    const radarPath = utils.pathJoin(inputPath, params.lang, params.radar, params.cate);

    if (!fs.existsSync(radarPath)) {
        utils.logAndThrow(`Error: directory [${radarPath}] does not exist.`)
    }

    const todayIso = (new Date()).toISOString().substring(0,10);
    const filename = todayIso + '-' + utils.toSnakeCase(params.title) + '.md';

    const templatePath = utils.pathJoin(__dirname, '$radar-item.md.njk');
    const destPath = utils.pathJoin(radarPath, filename);

    if (fs.existsSync(destPath)) {
        utils.logAndThrow(`Error: File [${destPath}] already exists`);
    }

    context.verbose && utils.logger.info(`Generating file [${destPath}]...`);
    const model = {
        date: todayIso,
        locale: params.langCode,
        title: params.title,
        ring: params.ring,
        author: ''
    };
    utils.generateFileFromTemplate(templatePath, model, destPath);
    utils.logger.info(`Generated file [${destPath}]`);
}

module.exports = {
    meta,
    run
};
