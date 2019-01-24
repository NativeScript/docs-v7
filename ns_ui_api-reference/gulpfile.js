var gulp = require('gulp');
// var typeScript = require('gulp-typescript');
var typedoc = require('gulp-typedoc');

gulp.task("default", function() {
    return gulp
        .src(["./../../nativescript-ui-listview/**/{index,angular/index,angular/*-directives}.d.ts",
        "./../../nativescript-ui-autocomplete/**/{index,angular/index,angular/*-directives}.d.ts",
        "./../../nativescript-ui-dataform/**/{index,angular/index,angular/*-directives}.d.ts",
        "./../../nativescript-ui-chart/**/{index,angular/index,angular/*-directives}.d.ts",
        "./../../nativescript-ui-calendar/**/{index,angular/index,angular/*-directives}.d.ts",
        "./../../nativescript-ui-gauge/**/{index,angular/index,angular/*-directives}.d.ts",
        "./../../nativescript-ui-sidedrawer/**/{index,angular/index,angular/*-directives}.d.ts"])
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
            theme: "./ns-ui-theme",
            readme: "./README.md"
        }));
});
