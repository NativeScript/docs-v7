var path = require("path"),
	paths = require("./paths"),
	exec = require("child_process").exec;

module.exports = class JekyllService {
	constructor(watchService) {
		this.watchService = watchService;
		this.listeners = [{
			workDir: `${paths.root}/bin`,
			cmd: "jekyll build --config _config_nativescript.yml,_config.yml --watch --incremental",
			env: { JEKYLL_ENV: "nativescript" },
			cleanFolder: path.normalize(`${paths.binRoot}/nativescript/*`)
		}, {
			workDir: `${paths.root}/bin`,
			cmd: "jekyll build --config _config_angular.yml,_config.yml --watch --incremental",
			env: { JEKYLL_ENV: "angular" },
			cleanFolder: path.normalize(`${paths.binRoot}/angular/*`)
		}, {
			workDir: paths.sidekickRoot,
			cmd: "jekyll build --config _config.yml --watch --incremental",
			cleanFolder: path.normalize(`${paths.sidekickRoot}/sidekick/*`)
		}];
	}

	start() {
		this.listeners.forEach(l => {
			var opts = { cwd: l.workDir };
			if (l.env) {
				var env = process.env;
				for (var key in l.env) {
					env[key] = l.env[key];
				}
				opts.env = env;
			}

			l.proc = exec(l.cmd, opts, (error, stdout, stderr) => { });
		});

		return this;
	}

	restart() {
		this.watchService.watching = false;
		this.stop().then(() => {
			this.start();
			this.watchService.watching = true;
		});
	}

	stop() {
		var stopPromises = this.listeners.map(l => {
			return new Promise((resolve, reject) => {
				if (l.proc) {
					exec("pkill -9 -f jekyll", (error, stdout, stderr) => {
						exec(`rm -rf ${l.cleanFolder}`, (error, stdout, stderr) => {
							l.proc = null;
							resolve();
						});
					});
				} else {
					resolve();
				}
			});
		});

		return Promise.all(stopPromises);
	}
}