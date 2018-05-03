const path = require("path"),
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
			const opts = { cwd: l.workDir };
			if (l.env) {
				const env = process.env;

				for (const key in l.env) {
					if (l.env.hasOwnProperty(key)) {
                        env[key] = l.env[key];
                    }
				}

				opts.env = env;
			}

			l.proc = exec(l.cmd, opts, (error, stdout, stderr) => {
				if (error) {
				    console.error(`exec error: ${error}`);
				    return;
		  		}

		  		console.log(`stdout: ${stdout}`);
		  		console.log(`stderr: ${stderr}`);
			});
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
		const stopPromises = this.listeners.map(l => {
			return new Promise((resolve) => {
				if (l.proc) {
					l.proc.kill("SIGKILL");
					l.proc = null;
				}

				resolve();
			});
		});

		return Promise.all(stopPromises);
	}
};
