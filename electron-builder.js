
const { ARTIFACT_NAME_TEMPLATE, VERSION } = require('./build/constant');

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
  appId: "com.github.iffy.electronupdaterexample",
  artifactName: ARTIFACT_NAME_TEMPLATE,
  buildVersion: VERSION,
  productName: "foobar",
  afterSign: "./build/notarize.js",
  files: [
    "main.js",
    "version.html", "!node_modules/electron-log/src/**/__specs__"
  ],
  mac: {
    category: 'your.app.category.type'
  },
  win: {
    target: 'nsis'
  },
  nsis: {
    oneClick: false
  },
  linux: {
    category: 'your.app.category.type',
    target: 'AppImage',
    artifactName: ARTIFACT_NAME_TEMPLATE
  },
  appImage: {
    artifactName: ARTIFACT_NAME_TEMPLATE
  },
  publish: {
    provider: "custom",
    vPrefixedTagName: true,
    owner: 'Scille',
    repo: 'electron-updater-example',
  }
};
