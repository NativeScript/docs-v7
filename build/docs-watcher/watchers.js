const chokidar = require("chokidar"),
	  exec = require("child_process").exec,
	  path = require("path"),
	  fs = require("fs-extra"),
	  paths = require("./paths"),
	  livereload = require('livereload');

const server = livereload.createServer({
	applyCSSLive: true,
	applyImgLive: true,
	delay: 500,
	exts: ["css", "png", "gif", "jpg"]
});

server.watch(paths.distRoot);

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
			const watchPaths = this.sourcePaths.map(x => x.basePath);
			const chokidarOptions = {
				persistent: true,
				ignoreInitial: true,
				ignored: [
					`${paths.nativescriptAngularRoot}/bin/dist/**`,
					`${paths.sdkExamplesRoot}/dist/**`,
					`${paths.sdkExamplesRootJS}/dist/**`,
					"**/nginx.conf",
					"**/robots.txt",
					"**/sitemap.xml",
					"**/default.json",
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

		const destination = this.getDestFile(f);

		if (!destination) {
			return;
		}

		if (fs.existsSync(f)) {
			ensureDestPath(destination);
			fs.copySync(f, destination);
			console.log(`${destination} updated`);
		}
	}

	removed(f) {
		if (!this.watching) {
			return;
		}

		const destination = this.getDestFile(f);

		if (!destination) {
			return;
		}

		if (fs.existsSync(destination)) {
			fs.unlinkSync(destination);
			console.log(`${destination} removed`);
		}
	}

	getDestFile(f) {
		const sourcePath = this.sourcePaths.find(x => isChildOf(f, x.basePath));

		if (!sourcePath) {
			return null;
		}

		if (!sourcePath.buildScript) {
			return path.join(paths.contentPath, path.relative(sourcePath.basePath, f));
		}

		const distPaths = sourcePath.distPaths || [];

		if (fs.existsSync(sourcePath.buildScript) && distPaths.length > 0) {
			console.log(`Triggering build script ${sourcePath.buildScript}`);
			const workDir = path.dirname(sourcePath.buildScript);

			this.watching = false;

			const childProc = exec(sourcePath.buildScript, { cwd: workDir }, (error, stdout, stderr) => {
				this.watching = true;

				if (error) {
					console.log(`build script execution failed: ${error}`);
				} else {
					console.log(`Build script ${sourcePath.buildScript} successfully completed`);
				}

				distPaths.forEach(distPath => {
					const script = `rsync --relative -avzP ${distPath} ${paths.contentPath}`;

					exec(script, (error, stdout, stderr) => { });
				});
			});

			childProc.stdout.on("data", data => console.log(data.toString()));
			childProc.stderr.on("data", data => console.log(data.toString()));
		}

		return null;
	}

};

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
			ignored: [
				"**/node_modules/**",
				"**/*.tar.gz",
				"**/.*",
				"**/.git/**"
			]
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
		let filename = path.basename(f);

		let basePath, destination, relativePath;

		if (filename === "_config.yml" || filename === "_config_nativescript.yml" || filename === "_config_angular.yml") {
			console.log(`${f} updated -> restarting jekyll service...`);
			let destination;

			if (f.toLowerCase().indexOf("sidekick-docs") < 0) {
				destination = path.join(paths.binRoot, filename);
			} else {
				destination = path.join(paths.sidekickRoot, filename);
			}

			if (f !== destination) {
                fs.copySync(f, destination);
                this.jekyllService.restart();
            }

			return;
		}

		let assetsPath = paths.assetsPaths.find(ap => isChildOf(f, ap));
		if (assetsPath) {
			basePath = path.normalize(path.join(assetsPath, ".."));
			relativePath = path.relative(basePath, f);
			destination = path.join(paths.contentPath, relativePath);

			if (f.toLowerCase().indexOf("sidekick-docs") > -1) {
				destination = path.join(paths.sidekickRoot, relativePath);
			}

			if (fs.existsSync(f) && f !== destination) {
				ensureDestPath(destination);
				fs.copySync(f, destination);
				console.log(f, destination);
				console.log(`${destination} asset updated`);
			}
			return;
		}

		relativePath = path.relative(paths.sourceFilesRoot, f);
		destination = path.join(paths.wwwRoot, relativePath);

		if (fs.existsSync(f) && f !== destination) {
			ensureDestPath(destination);
			fs.copySync(f, destination);
			console.log(`${destination} updated -> rebuilding site...`);
		}
	}

	sourceFileRemoved(f) {
		let basePath, destination, relativePath;
		let assetsPath = paths.assetsPaths.find(ap => isChildOf(f, ap));

		if (assetsPath) {
			basePath = path.normalize(path.join(assetsPath, ".."));
			relativePath = path.relative(basePath, f);
			destination = path.join(paths.contentPath, relativePath);
			if (f.toLowerCase().indexOf("sidekick-docs") > -1) {
				destination = path.join(paths.sidekickRoot, relativePath);
			}

			if (fs.existsSync(f) && f !== destination) {
				console.log(`${destination} removed -> rebuilding site...`);
				fs.unlinkSync(destination);
				this.jekyllService.restart();
			}
			return;
		}

		relativePath = path.relative(paths.sourceFilesRoot, f);
		destination = path.join(paths.wwwRoot, relativePath);

		if (fs.existsSync(destination) && f !== destination) {
			fs.unlinkSync(destination);
			console.log(`${destination} removed -> rebuilding site...`);
		}
	}
};

function isChildOf(child, parent) {
	child = path.normalize(child);
	parent = path.normalize(parent);

	if (child === parent) {
		return false;
	}

	const parentTokens = parent.split("/").filter(i => i);
	const childTokens = child.split("/").filter(i => i);

	return parentTokens.every((t, i) => childTokens[i].toLowerCase() === t.toLowerCase());
}

function ensureDestPath(filename) {
	const folder = path.dirname(filename);

	if (!fs.existsSync(folder)) {
		fs.ensureDirSync(folder);
	}
}
