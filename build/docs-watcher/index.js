const exec = require("child_process").exec,
	JekyllService = require("./jekyll-service"),
	SyncService = require("./sync-service"),
	watchers = require("./watchers"),
	WatcherService = watchers.WatcherService,
	SourcesWatcher = watchers.SourcesWatcher;

var watcher = new WatcherService().start();
new SyncService(watcher).start();
var jekyll = new JekyllService(watcher).start();
var sourcesWatcher = new SourcesWatcher(jekyll).start();

process.on("SIGTERM", () => {
	exec("pkill -9 -f jekyll", (error, stdout, stderr) => {
		sourcesWatcher.stop();
		watcher.stop();
	});
});