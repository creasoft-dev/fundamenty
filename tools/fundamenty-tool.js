const yaml = require('js-yaml');
const nunjucks = require('nunjucks');
const fs = require('fs')

const APP_VERSION = '0.1';

var args = process.argv.slice(2);

const verbose = (args.some(el => el == '-v'));
const doInit = (args.some(el => el == 'init'));
// TODO: add/remove language

const fileGenParams = [{
    template: './tools/templates/_data_site.json.njk',
    output: './src/_data/site.json.gen'
}, {
    template: './tools/templates/.env.njk',
    output: './.env.gen'
}];

function initProject() {
    const inputPath = "./.fundamenty.yml";
    const sourceFile = fs.readFileSync(inputPath).toString()

    const source = yaml.safeLoad(sourceFile, 'utf8');

    verbose && console.log('Input:' + JSON.stringify(source, null, 2));

    for (fileGen of fileGenParams) {
        const templateFile = fs.readFileSync(fileGen.template).toString()

        const outputData = nunjucks.renderString(templateFile, source);

        fs.writeFileSync(fileGen.output, outputData);

        console.log(`Completed writing to file ${fileGen.output}`);
    }

    if (source.langs) {
        // Create lang folders
        for (lang of source.langs) {
            const dirPath = './src/' + lang.id;
            if (!fs.existsSync(dirPath)) {
                console.log('Creating lang directory:' + dirPath);
                fs.mkdirSync(dirPath);
                // TODO: create {lang}.json, index.md
            }
        }
    }

    // TODO remove .git folder if exists

    console.log(`When you are ready, rename the generated files by removing the .gen extension.`);
}

(async() => {
    console.log('fundamenty-tool v.%s started with args %j', APP_VERSION, args);
    if (doInit) {
        initProject();
    }
})();