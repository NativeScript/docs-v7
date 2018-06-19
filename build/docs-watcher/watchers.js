let chokidar = require("chokidar"),
	exec = require("child_process").exec,
	path = require("path"),
	fs = require("fs-extra"),
	paths = require("./paths");

module.exports.WatcherService = class WatcherService {
	constructor() {
		this.sourcePaths = [{
			basePath: path.normalize(paths.docsRoot)
		}, {
			basePath: path.normalize(paths.modulesRoot),
			distPaths: [
				`${paths.modulesRoot}/bin/dist/./snippets`,
				`${paths.modulesRoot}/bin/dist/./cookbook`
			],
			buildScript: `${paths.modulesRoot}/build-docs.sh`
		}, {
			basePath: path.normalize(paths.nativescriptAngularRoot),
			distPaths: [`${paths.nativescriptAngularRoot}/bin/dist/./snippets`],
			buildScript: `${paths.nativescriptAngularRoot}/build-doc-snippets.sh`
		}, {
			basePath: path.normalize(paths.sdkExamplesRoot),
			distPaths: [`${paths.sdkExamplesRoot}/dist/./code-samples`],
			buildScript: `${paths.sdkExamplesRoot}/build-docs.sh`
		}, {
			basePath: path.normalize(`${paths.cliRoot}/docs`),
			distPaths: [`${paths.cliRoot}/./docs-cli`],
			buildScript: `${paths.cliRoot}/docs/build-jekyll-md.sh`
		}];
	}

	start() {
		if (!this.watcher) {
			var watchPaths = this.sourcePaths.map(x => x.basePath);
			var chokidarOptions = {
				persistent: true,
				ignoreInitial: true,
				ignored: [
					`${paths.nativescriptAngularRoot}/bin/dist/**`,
					`${paths.sdkExamplesRoot}/dist/**`,
					`${paths.sdkExamplesRootJS}/dist/**`,
					"**/node_modules/**",
					"**/.*",
					"**/.git/**"
				]
			};

			this.watcher = chokidar.watch(watchPaths, chokidarOptions);
			this.watcher
				.on("add", f => this.changed(f))
				.on("change", f => this.changed(f))
				.on("unlink", f => this.removed(f))
				.on("error", error => console.error("Error", error));
			this.watching = true;
		}
		return this;
	}

	stop() {
		if (this.watcher) {
			this.watcher.close();
			this.watcher = null;
		}
	}

	changed(f) {
		if (!this.watching) {
			return;
		}

		var destFile = this.getDestFile(f);
		if (!destFile) {
			return;
		}

		if (fs.existsSync(f)) {
			ensureDestPath(destFile);
			fs.copySync(f, destFile);
			//console.log(`${destFile} updated`);
		}
	}

	removed(f) {
		if (!this.watching) {
			return;
		}

		var destFile = this.getDestFile(f);
		if (!destFile) {
			return;
		}

		if (fs.existsSync(destFile)) {
			fs.unlinkSync(destFile);
			//console.log(`${destFile} removed`);
		}
	}

	getDestFile(f) {
		var sourcePath = this.sourcePaths.find(x => isChildOf(f, x.basePath));
		if (!sourcePath) {
			return null;
		}

		if (!sourcePath.buildScript) {
			var relativePath = path.relative(sourcePath.basePath, f);
			var destFile = path.join(paths.contentPath, relativePath);
			return destFile;
		}

		var distPaths = sourcePath.distPaths || [];

		if (fs.existsSync(sourcePath.buildScript) && distPaths.length > 0) {
			console.log(`Triggering build script ${sourcePath.buildScript}`);
			var workDir = path.dirname(sourcePath.buildScript);
			this.watching = false;
			var childProc = exec(sourcePath.buildScript, { cwd: workDir }, (error, stdout, stderr) => {
				this.watching = true;

				if (error) {
					console.log(`build script execution failed: ${error}`);
				} else {
					console.log(`Build script ${sourcePath.buildScript} successfully completed`);
				}

				distPaths.forEach(distPath => {
					var script = `rsync --relative -avzP ${distPath} ${paths.contentPath}`;
					exec(script, (error, stdout, stderr) => { });
				});
			});

			childProc.stdout.on("data", data => console.log(data.toString()));
			childProc.stderr.on("data", data => console.log(data.toString()));
		}

		return null;
	}

}

module.exports.SourcesWatcher = class SourcesWatcher {
	constructor(jekyllService) {
		this.jekyllService = jekyllService;
	}

	start() {
		if (this.watcher) {
			return;
		}

		this.watcher = chokidar.watch([paths.sourceFilesRoot], {
			persistent: true,
			ignoreInitial: true,
			usePolling: true,
			interval: 1000,
			ignored: ["**/node_modules/**", "**/*.tar.gz", "**/.*", "**/.git/**"]
		});

		this.watcher
			.on("add", f => this.sourceFileChanged(f))
			.on("change", f => this.sourceFileChanged(f))
			.on("unlink", f => this.sourceFileRemoved(f))
			.on("error", error => console.error("Error", error));

		return this;
	}

	stop() {
		if (this.watcher) {
			this.watcher.close();
			this.watcher = null;
		}
	}

	sourceFileChanged(f) {
		var filename = path.basename(f);
		if (filename == "_config.yml" || filename == "_config_nativescript.yml" || filename == "_config_angular.yml") {
			console.log(`${f} updated -> restarting jekyll service...`);
			fs.copySync(f, path.join(paths.binRoot, filename));

			this.jekyllService.restart();
			return;
		}

		let assetsPath = paths.assetsPaths.find(ap => isChildOf(f, ap));
		if (assetsPath) {
			var basePath = path.normalize(path.join(assetsPath, ".."));
			var relativePath = path.relative(basePath, f);
			var destination = path.join(paths.contentPath, relativePath);

			if (fs.existsSync(f)) {
				console.log(`${destination} updated -> rebuilding site...`);
				ensureDestPath(destination);
				fs.copySync(f, destination);
				this.jekyllService.restart();
			}
			return;
		}

		var relativePath = path.relative(paths.sourceFilesRoot, f);
		var destFile = path.join(paths.wwwRoot, relativePath);

		if (fs.existsSync(f)) {
			ensureDestPath(destFile);
			fs.copySync(f, destFile);
			console.log(`${destFile} updated -> rebuilding site...`);
		}
	}

	sourceFileRemoved(f) {
		let assetsPath = paths.assetsPaths.find(ap => isChildOf(f, ap));
		if (assetsPath) {
			var basePath = path.normalize(path.join(assetsPath, ".."));
			var relativePath = path.relative(basePath, f);
			var destination = path.join(paths.contentPath, relativePath);

			if (fs.existsSync(f)) {
				console.log(`${destination} removed -> rebuilding site...`);
				fs.unlinkSync(destFile);
				this.jekyllService.restart();
			}
			return;
		}

		var relativePath = path.relative(paths.sourceFilesRoot, f);
		var destFile = path.join(paths.wwwRoot, relativePath);

		if (fs.existsSync(destFile)) {
			fs.unlinkSync(destFile);
			console.log(`${destFile} removed -> rebuilding site...`);
		}
	}
}

function isChildOf(child, parent) {
	child = path.normalize(child);
	parent = path.normalize(parent);

	if (child === parent) {
		return false;
	}

	var parentTokens = parent.split("/").filter(i => i.length);
	var childTokens = child.split("/").filter(i => i.length);
	return parentTokens.every((t, i) => childTokens[i].toLowerCase() === t.toLowerCase());
}

function ensureDestPath(filename) {
	var folder = path.dirname(filename);

	if (!fs.existsSync(folder)) {
		fs.ensureDirSync(folder);
	}
}