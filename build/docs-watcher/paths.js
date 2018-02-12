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
module.exports.sidekickRoot = path.join(module.exports.root, "..", "..", "sidekick-docs");
module.exports.cliRoot = path.join(module.exports.root, "..", "nativescript-cli");

module.exports.sourceFilesRoot = "/root";
module.exports.assetsPaths = [
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_assets"),
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_layouts"),
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_includes"),

	path.join(module.exports.sourceFilesRoot, "sidekick-docs", "_assets"),
	path.join(module.exports.sourceFilesRoot, "sidekick-docs", "_layouts"),
	path.join(module.exports.sourceFilesRoot, "sidekick-docs", "_includes")
];
