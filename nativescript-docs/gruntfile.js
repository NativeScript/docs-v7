module.exports = function(grunt) {

    //Construct and validate the arguments
    var args = {
        branch: grunt.option("branch")
    };

    (function validateInput(){
        if (!args.branch) {throw new Error("No branch specified!");}
    }());

    grunt.initConfig({
        exec: {
            switchContentSubmoduleToTipOfBranch: {
                cmd: "git checkout -f " + args.branch +
                    " && git pull --rebase" +
                    " && git submodule update --init --recursive",
                cwd: "./Content"
            }
        }
    });

    grunt.loadNpmTasks("grunt-exec");

    grunt.registerTask("default", [
        "exec:switchContentSubmoduleToTipOfBranch"
    ]);
};
