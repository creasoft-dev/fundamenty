/**
 * CLI to execute tasks related to site management, e.g. generation of skeleton files
 * and pushing content to search index.
 * The actual scripts that the CLI tool uses are under `./scripts`
 */
require('dotenv').config();
const path = require('path');
const chalk = require('chalk');
const commander = require('commander');

const utils = require('./utils');

const packageJson = require('../package.json');

const dummyEleventyConfig = {
    addPlugin: () => {},
    addPassthroughCopy: () => {},
    addFilter: () => {},
    addCollection: () => {}
};

const eleventyConfig = require('../.eleventy')(dummyEleventyConfig);


const config = {
    rootPath: path.resolve(__dirname, '..'),
    eleventyConfig: eleventyConfig
};

const SCRIPT_ROOT = './scripts/';
let scriptContext = {};

function init() {
    const program = new commander.Command(packageJson.name)
        .version(packageJson.version)
        .arguments('<action>')
        .usage(`${chalk.green('<script>')} [options]`)
        .action( (action, args) => {
            scriptContext.name = action;
            scriptContext.args = process.argv.slice(1);
            if (args) {
                scriptContext.verbose = args.verbose;
                scriptContext.info = args.info;
            }
        })
        .option('--verbose', 'print additional logs')
        .option('--info', 'print environment debug info')
        .on('--help', () => {
            console.log('*** Help on the way');
        })
        .parse(process.argv);

}

(async() => {
    init();

    utils.logger.logLevel = scriptContext.verbose ? 0 : 1;
    utils.logger.debug('Argv: %j', process.argv);

    const scriptPath = SCRIPT_ROOT + scriptContext.name;
    utils.logger.debug('Loading script [%s] and passing args: %j', scriptPath, scriptContext.args);

    const script = require(scriptPath);

    try {
        const result = await script.run(config, scriptContext);
        utils.logger.info('Script [%s] completed', scriptContext.name);
    } catch (error) {
        utils.logger.error('Script [%s] failed with error ', error);
        process.exit(1);
    }
    process.exit(0);
})();
