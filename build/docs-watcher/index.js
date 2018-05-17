const exec = require("child_process").exec,
	  JekyllService = require("./jekyll-service"),
	  SyncService = require("./sync-service"),
	  watchers = require("./watchers"),
	  WatcherService = watchers.WatcherService,
	  SourcesWatcher = watchers.SourcesWatcher,
	  watcher = new WatcherService().start();

const syncService = new SyncService(watcher).start();
const jekyll = new JekyllService(watcher).start();
const sourcesWatcher = new SourcesWatcher(jekyll).start();

process.on("SIGTERM", () => {
	exec("pkill -9 -f jekyll", (error, stdout, stderr) => {
		sourcesWatcher.stop();
		watcher.stop();
		syncService.stop();
	});
});
