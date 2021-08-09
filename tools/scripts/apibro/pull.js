const utils = require('../../utils');
const { execSync } = require('child_process');

const META = {
    name: 'apibro/pull',
    dir: __dirname,
    description: "Pulls the api specs from the manifest",
    command: {
        arguments: '<manifest>'
    }
};

/**
 * 
 * @param {string} specUrl 
 */
function fetchSpec(specUrl) {
  // BLOCKED: GitLab does not allow access through raw URL
  // see: https://gitlab.com/gitlab-org/gitlab-foss/-/issues/55081
  // const {data: specData} = await axios.get(specUrl);
  
  const delimStr = '/-/blob/master/';
  const delimPos = specUrl.indexOf(delimStr);
  const startPos =  (specUrl.startsWith('https://')) ? 8 : 0;

  let remoteUrl = specUrl.substring(startPos, delimPos);
  const firstSlashPos = remoteUrl.indexOf('/');
  remoteUrl = remoteUrl.substring(0, firstSlashPos) + ':' + remoteUrl.substring(firstSlashPos + 1);

  const filePath = specUrl.substring(delimPos + delimStr.length, specUrl.length);

  const gitCmd = `git archive --remote=git@${remoteUrl}.git HEAD ${filePath} | tar -xO`;
  utils.logger.info('ExecSync: %s', gitCmd);

  const stdout = execSync(gitCmd);

  return stdout;
}

/**
 *
 * @param {*} config
 * @param {ScriptContext} context
 */
async function run(config, context) {

  const params = utils.parseArgs(META, context.args);

  utils.logger.info(`Executing ${META.name} (%j)`, params);
  
  const inputPath = utils.getInputPath(config);

  const manifestPath = utils.pathJoin(inputPath, params.manifest);

  utils.logger.info('Opening manifest: %s', manifestPath);
  const manifest = require(manifestPath);

  const specDirPath = utils.pathJoin(inputPath, '/apispecs');
  utils.mkdirSync(specDirPath);

  for(const apiId in manifest.apis) {
    // api.domain, api.name
    const api = manifest.apis[apiId];

    utils.logger.info('Fetching from: %s', api.specUrl);
    if (api.specSource === 'gitlab') {
      const specData = fetchSpec(api.specUrl);
      utils.logger.debug('Fetched: %s', specData);

      const specFilePath = utils.pathJoin(specDirPath, apiId + '.yml');
      utils.writeFileSync(specFilePath, specData);
    }
  }
  
}

module.exports = {
  META,
  run
};
