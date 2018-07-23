const paths = require("./paths"),
	  cpx = require("cpx");

module.exports = class SyncService {
	constructor(watchService) {
		this.watchService = watchService;
		this.watchers = [];
		this.silentSyncFolders = {
            "api-reference": `${paths.modulesRoot}/bin/dist/api-reference`,
            "sidekick": `${paths.sidekickRoot}/sidekick/**/!(nginx.conf|robots.txt|default.json|sitemap.xml)`,
            "vuejs": `${paths.vuejsRoot}/vuejs/**/!(nginx.conf|robots.txt|default.json|sitemap.xml)`,
            "angular": `${paths.root}/bin/angular/**/!(nginx.conf|robots.txt|default.json|sitemap.xml)`,
            "": `${paths.root}/bin/nativescript/**/!(nginx.conf|robots.txt|default.json|sitemap.xml)`
    	};
		this.initialSyncFinished = false;
	}

	start() {
		if (this.silentSyncFolders.length < 1) {
			return;
		}

		if (!this.watchService.watching) {
			setTimeout(() => this.start(), 2000);
			return;
		}

		for (const prefix in this.silentSyncFolders) {
			const watcher = cpx.watch(this.silentSyncFolders[prefix], `${paths.distRoot}${prefix}`, {
				preserve: true
			});

			watcher.on("copy", (e) => {
				console.log(`${e.srcPath} => ${e.dstPath}`);
			});

			watcher.on("remove", (e) => {
				console.log(`${e.path} removed`);
			});

			watcher.on("watch-ready", () => {
				this.initialSyncFinished = true;
				console.log("Documentation successfully built! You can start making changes.");
			});

			watcher.on("watch-error", (err) => {
				console.log(err);
			});

			this.watchers.push(watcher);
		}

		return this;
	}

	stop() {
		this.watchers.forEach((watcher) => {
			watcher.stop();
		});
	}
};
