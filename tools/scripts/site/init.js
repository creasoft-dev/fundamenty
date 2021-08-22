const utils = require("../../utils");
const locale = require("./locale");

const META = {
  name: "site/init",
  dir: __dirname,
  description: "Initialize site: deletes .git directory, and creates .env, /src/_data/site.json.gen and /src/_data/{lang}",
  command: {
    // arguments: "<title>",
    options: [
      "-d --deletegit", // Delete .git directory
      "-o --overwrite", // Overwrite generated files
    ],
  },
};

const fileGenParams = [
  {
    template: "$_data_site.json.njk",
    output: "./src/_data/site.json.gen",
  },
  {
    template: "$.env.njk",
    output: "./.env.gen",
  },
];

/**
 *
 * @param {*} config
 * @param {ScriptContext} context
 */
const run = async (config, context) => {
  const params = utils.parseArgs(META, context.args);

  utils.logger.info(`Executing ${META.name} (%j)`, params);

  const inputPath = utils.getInputPath(config);

  const siteParams = utils.readYaml('./fundamenty.site.yml');

  // Create language folders
  if (siteParams.langs) {
    // Create lang folders
    for (lang of siteParams.langs) {
      
      await locale.createLangDir(inputPath, lang.id);
    }
  }

  // Remove .git files
  if (params.deletegit) {
    utils.logger.warn('Deleting .git directory');
    utils.rmSync('.git', { recursive: true });
  }

  // Generate files (/.env, )
  for (fileGen of fileGenParams) {
    utils.generateFileFromTemplate(
      '',
      __dirname,
      fileGen.template,
      { ...params, filename: fileGen.output },
      siteParams,
      '',
      { prependDate: false }
    );
    utils.logger.message('Now you can rename the generated file by removing the \'.gen\' extension.')
  }
};

module.exports = {
  META,
  run,
};
