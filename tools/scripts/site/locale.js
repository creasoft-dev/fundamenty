const utils = require('../../utils');

const SCRIPT_NAME = 'locale/create'

const META = {
    name: 'post/item',
    dir: __dirname,
    description: "Create a locale: creates directory and {lang}.json file",
    command: {
        arguments: '<langCode> [langName]'
    }
};

/**
 * Creates folder
 * @param {String} inputPath - the path to the input ('src') dir
 * @param {String} langPath - the path to create the language 
 */
async function createLangDir(inputPath, langCode) 
{
    const langPath = utils.pathJoin(inputPath, langCode);
    // console.log(langPath);
    if (utils.existsSync(langPath)) {
        utils.logger.debug("Lang directory [" + langPath + "] already exists, skipping.");
    } else {
        utils.logger.info(`Creating directory [${langPath}]`);
        utils.mkdirSync(langPath);

        const subDirPath = utils.pathJoin(langPath, 'posts');
        utils.logger.info(`Creating directory [${subDirPath}]`);
        utils.mkdirSync(subDirPath);

        const destPath = utils.pathJoin(langPath, 'locale.json');

        utils.generateFileFromTemplate(inputPath, __dirname, '$locale.json.njk', {filename: `${langCode}.json`}, { locale: langCode }, langCode);
    }
}

/**
 *
 * @param {*} config
 * @param {ScriptContext} context
 */
const run = async (config, context) => {

    const params = utils.parseArgs(META, context.args);

    utils.logger.info(`Executing ${META.name} (%j)`, params);

    const inputPath = utils.getInputPath(config);

    await createLangDir(inputPath, params.langCode);
}

module.exports = {
    META,
    run,
    createLangDir
};
