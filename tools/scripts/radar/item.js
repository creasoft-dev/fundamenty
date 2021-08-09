const utils = require('../../utils');

const META = {
    name: 'radar/item',
    dir: __dirname,
    description: "Create a new Radar item: creates a {lang}/{radar}/{category}/{item}.md file",
    command: {
        arguments: '<title>',
        requiredOptions: [
            '--cate <cate>', // category
            '--radar <radar>' // radar name
        ],
        options: [
            '-l, --lang <lang>', // language
            '--ring <ring>' // ring
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

    utils.generateFileFromTemplate(inputPath, __dirname, '$radar-item.md.njk', params, {author: ''}, utils.pathJoin(params.radar, params.cate));
}

module.exports = {
    META,
    run
};
