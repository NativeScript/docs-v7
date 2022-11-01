#!/bin/bash
set -ex

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
ROOT=$SCRIPT_PATH"/bin"
CONTENT_ROOT=$ROOT"/Content"
WWW_ROOT=$ROOT"/site"
NS_DIST_ROOT=$ROOT"/nativescript"
NG_DIST_ROOT=$ROOT"/angular"

DOCS_ROOT=$SCRIPT_PATH"/../../docs"
MODULES_ROOT=$SCRIPT_PATH"/../../NativeScript"
NG_ROOT=$SCRIPT_PATH"/../../nativescript-angular"
NS_DOCS_VERSIONS=$SCRIPT_PATH"/../../docs_versions"
SDK_ROOT_JS=$SCRIPT_PATH"/../../nativescript-sdk-examples-js"
SDK_ROOT_NG=$SCRIPT_PATH"/../../nativescript-sdk-examples-ng"
CLI_ROOT=$SCRIPT_PATH"/../../nativescript-cli"
VUEJS_ROOT=$SCRIPT_PATH"/../../docs/vuejs-docs"
NS_UI_SM=$SCRIPT_PATH"/../../nativescript-ui-samples"
NS_UI_SM_NG=$SCRIPT_PATH"/../../nativescript-ui-samples-angular"
NS_UI_DOCS=$SCRIPT_PATH"/ns_ui_docs"

[ ! -d "$ROOT" ] || rm -rf $ROOT

mkdir $ROOT

[ -d "$CONTENT_ROOT" ] || mkdir $CONTENT_ROOT
[ -d "$WWW_ROOT" ] || mkdir $WWW_ROOT

bundle config build.nokogiri --use-system-libraries

[ ! -d $CLI_ROOT ] || (cd $CLI_ROOT && ./docs/build-jekyll-md.sh)

cd $SCRIPT_PATH
bundle install

cp -r $SCRIPT_PATH"/_config_vuejs.yml" \
	$SCRIPT_PATH"/_assets" \
	$SCRIPT_PATH"/_layouts" \
	$SCRIPT_PATH"/_plugins" \
	$SCRIPT_PATH"/_includes" \
	$SCRIPT_PATH"/fonts" \
	$VUEJS_ROOT

rm $VUEJS_ROOT"/_plugins/redirect_generator.rb" \
$VUEJS_ROOT"/_plugins/snippet.rb" \
$VUEJS_ROOT"/_plugins/ns_cookbook.rb"

# NativeScript UI Docs Api Reference build. Docs snippet injecting
if [ -d $NS_UI_DOCS ] && [ -d $NS_UI_SM ] && [ -d $NS_UI_SM_NG ]; then
	cd $NS_UI_DOCS
	npm i
	gulp
fi

[ ! -d $SDK_ROOT_NG ] || (cd $SDK_ROOT_NG && ./build-docs.sh)
[ ! -d $SDK_ROOT_JS ] || (cd $SDK_ROOT_JS && ./build-docs.sh)
[ ! -d $NG_ROOT ] || (cd $NG_ROOT && ./build-doc-snippets.sh)
[ ! -d $MODULES_ROOT ] || (cd $MODULES_ROOT && cp ./tools/scripts/build-docs.sh . && ./build-docs.sh)
[ ! -d $NG_ROOT ] || (cd $NG_ROOT && ./build-docs.sh)

cp $SCRIPT_PATH"/_config_angular.yml" \
   $SCRIPT_PATH"/_config_nativescript.yml" \
   $SCRIPT_PATH"/_config.yml" \
   $ROOT

cd $DOCS_ROOT"/build"
for JEKYLL_DIR in {_assets,_includes,_layouts,_plugins,fonts,images}; do
	rsync -a --delete $JEKYLL_DIR $CONTENT_ROOT
done

cp -R $DOCS_ROOT"/docs/./" $CONTENT_ROOT

[ ! -d $SDK_ROOT_JS ] || cp -R $SDK_ROOT_JS"/dist/cookbook/ns-framework-modules" $CONTENT_ROOT
[ ! -d $SDK_ROOT_NG ] || cp -R $SDK_ROOT_NG"/dist/code-samples/ng-framework-modules" \
		$CONTENT_ROOT

[ ! -d $CLI_ROOT ] || cp -R $CLI_ROOT"/docs-cli" $CONTENT_ROOT"/tooling"
[ ! -d $SDK_ROOT_JS ] || cp -R $SDK_ROOT_JS"/dist/cookbook/ns-ui-widgets/." $CONTENT_ROOT"/ui/components"
[ ! -d $SDK_ROOT_JS ] || cp -R $SDK_ROOT_JS"/dist/cookbook/ns-ui/." $CONTENT_ROOT"/ui/components"
[ ! -d $SDK_ROOT_NG ] || cp -R $SDK_ROOT_NG"/dist/code-samples/ng-ui-widgets/." $CONTENT_ROOT"/ui/ng-components"
[ ! -d $SDK_ROOT_NG ] || cp -R $SDK_ROOT_NG"/dist/code-samples/ng-ui/." $CONTENT_ROOT"/ui/ng-components"

cp $SCRIPT_PATH"/nginx.conf" $CONTENT_ROOT

cd $ROOT

# Disable sitemap_generator plugin
SITEMAP_GENERATOR=$CONTENT_ROOT"/_plugins/sitemap_generator.rb"
if [ -f $SITEMAP_GENERATOR ] && [ "$1" != "SKIP_SITEMAP_GENERATOR_REMOVAL" ]; then
	echo "Removing sitemap generator plugin"
	rm $SITEMAP_GENERATOR
fi

export JEKYLL_ENV="nativescript"
jekyll build --config _config_nativescript.yml,_config.yml

[ ! -d $NG_ROOT ] || (export JEKYLL_ENV="angular" && jekyll build --config _config_angular.yml,_config.yml)

cd $VUEJS_ROOT

export JEKYLL_ENV="vuejs"
jekyll build --config _config_vuejs.yml --trace

cp -R $VUEJS_ROOT"/vuejs" $WWW_ROOT

cd $ROOT

[ ! -d $MODULES_ROOT ] || cp -R $MODULES_ROOT"/bin/dist/api-reference" $WWW_ROOT
[ ! -d $NG_ROOT ] || cp -R $NG_ROOT"/nativescript-angular/bin/dist/ng-api-reference" $WWW_ROOT

if [ -d $NS_UI_DOCS"/ns-ui-api-reference" ] && [ -d $NS_UI_SM ] && [ -d $NS_UI_SM_NG ]; then
	cp -R $NS_UI_DOCS"/ns-ui-api-reference" $WWW_ROOT

fi

cp -R $NS_DIST_ROOT"/./" $WWW_ROOT
cp $DOCS_ROOT"/docs_versions.json" $WWW_ROOT
[ ! -d $NG_ROOT ] || cp -R $NG_DIST_ROOT"/./" $WWW_ROOT"/angular"
[ ! -d $NS_DOCS_VERSIONS ] || cp -R $NS_DOCS_VERSIONS"/./" $WWW_ROOT
