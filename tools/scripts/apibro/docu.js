/**
 * Generates a simplified json document from OpenAPI yaml for indexing.
 */
const utils = require('../../utils');
const fs = require('fs');
const SwaggerParser = require("@apidevtools/swagger-parser");


const META = {
    name: 'apibro/docu',
    dir: __dirname,
    description: "Create a new Post item: creates a {lang}/posts/{item}.md file",
    command: {
        arguments: '<title>',
        options: [
            '-l, --lang <lang>' // language
        ]
    }
};

const transformToDoc = async(dirPath) => {
    
    fs.readdirSync(dirPath).forEach(file => {
        const filePath = utils.pathJoin(dirPath, file);
        if (filePath.endsWith('yml')) {
            const apidef = utils.readYaml(filePath);
            // console.log(JSON.stringify(apidef, null, 2));
            const flatten = utils.flattenObject(apidef, '_');
            // console.log(JSON.stringify(flatten, null, 2));
    
            try {
                console.log('parsing...' + filePath);
                const config = {}; 
                (async() => {
                    console.log('parsing1.');
                    try {
                        const api = await SwaggerParser.validate(filePath);
                    } catch (err2) {
                        console.log("error" + err2);
                    }
                    console.log('done parsing.');
                })();
                // SwaggerParser.validate(filePath, (err, api) => {
                //     if (err) {
                //       console.error(err);
                //     }
                //     else {
                //         console.log('done parsing.');
                //         console.log(JSON.stringify(api.info.title, null, 2));
                //         console.log("API name: %s, Version: %s", api.info.title, api.info.version);
                //     }
                //   });
            } catch (err) {
                console.log(err);
            }
              
    
            // yarn widdershins ./src/apispecs/am-title_manager.yml -o ./src/apispecs/am-title-manager.md -c -l
        }
    });
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

    try {
        console.log("hello1");    
        await transformToDoc(inputPath + '/apispecs');
        console.log("hello2");    
    } catch( err) {
        console.log(JSON.stringify(err));
    }
}

module.exports = {
    META,
    run
};
