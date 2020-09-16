const path = require('path');
const chalk = require('chalk');
const commander = require('commander');

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

init();
scriptContext.verbose && console.log('Argv: %j', process.argv);

const scriptPath = SCRIPT_ROOT + scriptContext.name;
scriptContext.verbose && console.log('Loading script [%s] and passing args: %j', scriptPath, scriptContext.args);

const script = require(scriptPath);

try {
    const result = script.run(config, scriptContext);
    scriptContext.verbose && console.log('Script [%s] completed', scriptContext.name);
} catch {
    process.exit(1);
}
process.exit(0);
