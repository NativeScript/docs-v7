var path = require("path");

module.exports.root = path.join(__dirname, "..");
module.exports.wwwRoot = path.normalize(path.join(module.exports.root, "..", ".."));
module.exports.binRoot = path.join(module.exports.root, "bin");
module.exports.contentPath = path.join(module.exports.binRoot, "Content");
module.exports.distRoot = path.join(module.exports.binRoot, "site");

module.exports.docsRoot = path.join(module.exports.root, "..", "docs");
module.exports.modulesRoot = path.join(module.exports.root, "..", "..", "NativeScript");
module.exports.nativescriptAngularRoot = path.join(module.exports.root, "..", "..", "nativescript-angular");
module.exports.sdkExamplesRootNG = path.join(module.exports.root, "..", "..", "nativescript-sdk-examples-ng");
module.exports.sdkExamplesRootJS = path.join(module.exports.root, "..", "..", "nativescript-sdk-examples-js");
module.exports.nsUIListView = path.join(module.exports.root, "..", "..", "nativescript-ui-listview");
module.exports.nsUIAutoComplete = path.join(module.exports.root, "..", "..", "nativescript-ui-autocomplete");
module.exports.nsUIDataForm = path.join(module.exports.root, "..", "..", "nativescript-ui-dataform");
module.exports.nsUIChart = path.join(module.exports.root, "..", "..", "nativescript-ui-chart");
module.exports.nsUICalendar = path.join(module.exports.root, "..", "..", "nativescript-ui-calendar");
module.exports.nsUIGauge = path.join(module.exports.root, "..", "..", "nativescript-ui-gauge");
module.exports.nsUISideDrawer = path.join(module.exports.root, "..", "..", "nativescript-ui-sidedrawer");
module.exports.cliRoot = path.join(module.exports.root, "..", "..", "nativescript-cli");
module.exports.vuejsRoot = path.join(module.exports.root, "..", "vuejs-docs");

module.exports.sourceFilesRoot = "/root";
module.exports.assetsPaths = [
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_assets"),
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_layouts"),
	path.join(module.exports.sourceFilesRoot, "docs", "build", "_includes"),
];

module.exports.sourcePathsInImage = [
    `${module.exports.sourceFilesRoot}/docs`,
    `${module.exports.sourceFilesRoot}/NativeScript`,
    `${module.exports.sourceFilesRoot}/nativescript-angular`,
    `${module.exports.sourceFilesRoot}/nativescript-cli`,
    `${module.exports.sourceFilesRoot}/nativescript-sdk-examples-js`,
    `${module.exports.sourceFilesRoot}/nativescript-sdk-examples-ng`,
    `${module.exports.sourceFilesRoot}/nativescript-ui-autocomplete`,
    `${module.exports.sourceFilesRoot}/nativescript-ui-calendar`,
    `${module.exports.sourceFilesRoot}/nativescript-ui-chart`,
    `${module.exports.sourceFilesRoot}/nativescript-ui-dataform`,
    `${module.exports.sourceFilesRoot}/nativescript-ui-gauge`,
    `${module.exports.sourceFilesRoot}/nativescript-ui-listview`,
    `${module.exports.sourceFilesRoot}/nativescript-ui-sidedrawer`,
];
