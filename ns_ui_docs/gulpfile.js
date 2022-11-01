var gulp = require('gulp');
var typedoc = require('gulp-typedoc');
const shell = require('gulp-shell')
gulp.task("snippet-mdinject", shell.task('mdinject --root=./../../../nativescript-ui-samples --docsroot=./../../docs/ui/components --sourceext=".ts|.js|.xml|.css" --snippettitles="TypeScript|JavaScript|XML|CSS"'));
gulp.task("snippet-mdinject-ng", shell.task('mdinject --root=./../../../nativescript-ui-samples-angular --docsroot=./../../docs/ui/ng-components --sourceext=".ts|.js|.html|.css" --snippettitles="TypeScript|JavaScript|HTML|CSS"'));
gulp.task("snippet-mdinject-vue", shell.task('mdinject --root=./../../../nativescript-ui-samples-vue --docsroot=./../../vuejs-docs/ns-ui --sourceext=".ts|.js|.xml|.css" --snippettitles="TypeScript|JavaScript|XML|CSS"'));

gulp.task("ns-ui-api-ref-build", function () {
    return gulp
        .src(["./node_modules/nativescript-ui-listview/{index,angular/index,angular/*-directives}.d.ts",
            "./node_modules/nativescript-ui-autocomplete/{index,angular/index,angular/*-directives}.d.ts",
            "./node_modules/nativescript-ui-dataform/{index,angular/index,angular/*-directives}.d.ts",
            "./node_modules/nativescript-ui-chart/{index,angular/index,angular/*-directives}.d.ts",
            "./node_modules/nativescript-ui-calendar/{index,angular/index,angular/*-directives}.d.ts",
            "./node_modules/nativescript-ui-gauge/{index,angular/index,angular/*-directives}.d.ts",
            "./node_modules/nativescript-ui-sidedrawer/{index,angular/index,angular/*-directives}.d.ts"])
        .pipe(typedoc({
            // TypeScript options (see typescript docs)
            module: "commonjs",
            mode: "file",
            target: "es5",
            includeDeclarations: true,
            excludeExternals: true,

            // Output options (see typedoc docs)
            out: "./ns-ui-api-reference",
            // TypeDoc options (see typedoc docs)
            name: "Progress NativeScript UI API",
            ignoreCompilerErrors: true,
            theme: "./node_modules/nativescript-typedoc-theme",
            readme: "./README.md"
        }));
});

gulp.task("default", gulp.series("snippet-mdinject", "snippet-mdinject-ng", "snippet-mdinject-vue", "ns-ui-api-ref-build"));