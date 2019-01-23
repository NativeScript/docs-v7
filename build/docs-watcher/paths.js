var path = require("path");

module.exports.root = path.join(__dirname, "..");
module.exports.wwwRoot = path.normalize(path.join(module.exports.root, "..", ".."));
module.exports.binRoot = path.join(module.exports.root, "bin");
module.exports.contentPath = path.join(module.exports.binRoot, "Content");
module.exports.distRoot = path.join(module.exports.binRoot, "site");

module.exports.docsRoot = path.join(module.exports.root, "..", "docs");
module.exports.modulesRoot = path.join(module.exports.root, "..", "..", "NativeScript");
module.exports.nativescriptAngularRoot = path.join(module.exports.root, "..", "..", "nativescript-angular");
module.exports.sdkExamplesRoot = path.join(module.exports.root, "..", "..", "nativescript-sdk-examples-ng");
module.exports.sdkExamplesRootJS = path.join(module.exports.root, "..", "..", "nativescript-sdk-examples-js");
module.exports.sdkExamplesRootJS = path.join(module.exports.root, "..", "..", "nativescript-ui");
module.exports.sdkExamplesRootJS = path.join(module.exports.root, "..", "..", "nativescript-ui-samples");
module.exports.sdkExamplesRootJS = path.join(module.exports.root, "..", "..", "nativescript-ui-samples-angular");
module.exports.cliRoot = path.join(module.exports.root, "..", "..", "nativescript-cli");
module.exports.vuejsRoot = path.join(module.exports.root, "..", "vuejs-docs");

module.exports.sourceFilesRoot = "/root";
module.exports.assetsPaths = [
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_assets"),
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_layouts"),
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_includes"),
];
