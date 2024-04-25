const { ARTIFACT_NAME_TEMPLATE, VERSION } = require('./constant');

const { GitHubPublisher } = require('electron-publish/out/gitHubPublisher');

class CustomGithubPublisher extends GitHubPublisher {
    constructor(context, publishConfig) {
        console.trace("CustomGithubPublisher.constructor", { context, publishConfig, VERSION });
        super(context, publishConfig, VERSION, {
            publish: 'always'
        });
        this.useSafeArtifactName = false;
    }
}

// exports = { CustomGithubPublisher };
exports.default = CustomGithubPublisher;
