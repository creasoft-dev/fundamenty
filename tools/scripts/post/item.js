const utils = require('../../utils');

const META = {
    name: 'post/item',
    dir: __dirname,
    description: "Create a new Post item: creates a {lang}/posts/{item}.md file",
    command: {
        arguments: '<title>',
        options: [
            '-l, --lang <lang>' // language
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

    utils.generateFileFromTemplate(inputPath, __dirname, '$post-item.md.njk', params, {author: ''}, 'posts', {prependDate: true});
}

module.exports = {
    META,
    run
};
