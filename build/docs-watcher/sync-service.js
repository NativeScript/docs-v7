const exec = require("child_process").exec,
	  paths = require("./paths");

module.exports = class SyncService {
	constructor(watchService) {
		this.watchService = watchService;
		this.silentSyncFolders = [
			`${paths.modulesRoot}/bin/dist/./api-reference`,
			`${paths.sidekickRoot}/./sidekick`,
			`${paths.vuejsRoot}/./vuejs`,
			`${paths.root}/bin/./angular`,
			`${paths.root}/bin/nativescript/./`
		];
		this.initialSyncFinished = false;
		this.emptySyncCount = 0;
	}

	start() {
		if (this.silentSyncFolders.length < 1) {
			return;
		}

		if (!this.watchService.watching) {
			setTimeout(() => this.start(), 2000);
			return;
		}

		const sources = this.silentSyncFolders.join(" ");
		let rsyncScript = `rsync --relative --delete -az --info=NAME ${sources} ${paths.distRoot}`;
		exec(rsyncScript, (error, stdout, stderr) => {
			if (error) {
				setTimeout(() => this.start(), 2000);
				return;
			}

			if (this.initialSyncFinished && !this.isEmptyOutput(stdout)) {
				console.log(stdout);
			}

			if (!this.initialSyncFinished && this.isEmptyOutput(stdout)) {
				if (++this.emptySyncCount > 3) {
					this.initialSyncFinished = true;
					console.log("Documentation successfully built! You can start making changes.");
				}
			}

			setTimeout(() => this.start(), 2000);
		});

		return this;
	}

	isEmptyOutput(stdout) {
		stdout = stdout || "";
		let lines = stdout.split(/\r?\n/);
		return lines.every(line => line === "");
	}
};
