const utils = require('../../utils');

const META = {
    name: 'archi/item',
    dir: __dirname,
    description: "Create a new Architecture Repository item: creates a {lang}/archi/repo/{item}.md file",
    command: {
        arguments: '<title> <businessUnit>',
        options: [
            '-l, --lang <lang>',
        ]
    }
};


/**
 *
 * @param {*} config
 * @param {ScriptContext} context
 */
const run = async (config, context) => {

    const params = utils.parseArgs(META, context.args);

    utils.logger.info(`Executing ${META.name} (%j)`, params);

    const inputPath = utils.getInputPath(config);

    utils.generateFileFromTemplate(inputPath, __dirname, '$archi-item.md.njk', params, {author: ''}, '/archi/repo');
}

module.exports = {
    META,
    run
};
