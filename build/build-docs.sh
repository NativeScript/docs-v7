#!/bin/bash
set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
ROOT=$SCRIPT_PATH"/bin"
CONTENT_ROOT=$ROOT"/Content"
WWW_ROOT=$ROOT"/site"
NS_DIST_ROOT=$ROOT"/nativescript"
NG_DIST_ROOT=$ROOT"/angular"

DOCS_ROOT=$SCRIPT_PATH"/../../docs"
MODULES_ROOT=$SCRIPT_PATH"/../../NativeScript"
NG_ROOT=$SCRIPT_PATH"/../../nativescript-angular"
SDK_ROOT_JS=$SCRIPT_PATH"/../../nativescript-sdk-examples-js"
SDK_ROOT_NG=$SCRIPT_PATH"/../../nativescript-sdk-examples-ng"
CLI_ROOT=$SCRIPT_PATH"/../../nativescript-cli"
VUEJS_ROOT=$SCRIPT_PATH"/../../docs/vuejs-docs"
NS_UI_LV=$SCRIPT_PATH"/../../nativescript-ui-listview"
NS_UI_AC=$SCRIPT_PATH"/../../nativescript-ui-autocomplete"
NS_UI_DF=$SCRIPT_PATH"/../../nativescript-ui-dataform"
NS_UI_CH=$SCRIPT_PATH"/../../nativescript-ui-chart"
NS_UI_CA=$SCRIPT_PATH"/../../nativescript-ui-calendar"
NS_UI_GA=$SCRIPT_PATH"/../../nativescript-ui-gauge"
NS_UI_SD=$SCRIPT_PATH"/../../nativescript-ui-sidedrawer"
NS_UI_API_REF=$DOCS_ROOT"/ns_ui_api-reference"

if [ -d "$ROOT" ]; then
	rm -rf $ROOT
fi

mkdir $ROOT

if [ ! -d "$CONTENT_ROOT" ]; then
	mkdir $CONTENT_ROOT
fi

if [ ! -d "$WWW_ROOT" ]; then
	mkdir $WWW_ROOT
fi

bundle config build.nokogiri --use-system-libraries

cd $CLI_ROOT
./docs/build-jekyll-md.sh

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
if [ -f $NS_UI_LV"/README.md" ]; then

	set +e
	set -e
	declare -a examples=($NS_UI_AC $NS_UI_CA $NS_UI_CH $NS_UI_DF $NS_UI_GA $NS_UI_LV $NS_UI_SD)

	for i in "${examples[@]}"
	do
		cd $i
		# Generating Angular d.ts
		cd "src"
		npm i --ignore-scripts
		cd "angular"
		tsc

		cd "../../demo"
		npm install markdown-snippet-injector
		# cd app
		# tsc
		# cd ../
		npm run inject
		cd "../demo-angular"
		npm install markdown-snippet-injector
		npm run inject
		
		
	done

	cd $NS_UI_API_REF
	npm i
	gulp
fi

cd $SDK_ROOT_NG
./build-docs.sh

cd $SDK_ROOT_JS
./build-docs.sh

cd $NG_ROOT
./build-doc-snippets.sh

cd $MODULES_ROOT
./build-docs.sh

cp $SCRIPT_PATH"/_config_angular.yml" \
   $SCRIPT_PATH"/_config_nativescript.yml" \
   $SCRIPT_PATH"/_config.yml" \
   $ROOT

cd $DOCS_ROOT"/build"
for JEKYLL_DIR in {_assets,_includes,_layouts,_plugins,fonts,images}; do
	rsync -a --delete $JEKYLL_DIR $CONTENT_ROOT
done

cp -R $DOCS_ROOT"/docs/./" \
	  $SDK_ROOT_JS"/dist/cookbook/ns-framework-modules" \
	  $MODULES_ROOT"/bin/dist/snippets" \
	  $NG_ROOT"/bin/dist/snippets" \
	  $SDK_ROOT_NG"/dist/code-samples/ng-framework-modules" \
	  $SDK_ROOT_NG"/dist/code-samples/ng-hardware-access" \
	  $CONTENT_ROOT

cp -R $CLI_ROOT"/docs-cli" $CONTENT_ROOT"/tooling"
cp -R $SDK_ROOT_JS"/dist/cookbook/ns-ui-widgets" $CONTENT_ROOT"/ui"
cp -R $SDK_ROOT_JS"/dist/cookbook/ns-ui/." $CONTENT_ROOT"/ui"
cp -R $SDK_ROOT_NG"/dist/code-samples/ng-ui-widgets" $CONTENT_ROOT"/ui"
cp -R $SDK_ROOT_NG"/dist/code-samples/common-screens" $CONTENT_ROOT"/app-and-screen-templates"
cp -R $SDK_ROOT_NG"/dist/code-samples/ng-ui/." $CONTENT_ROOT"/ui"


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
export JEKYLL_ENV="angular"
jekyll build --config _config_angular.yml,_config.yml


cd $VUEJS_ROOT

export JEKYLL_ENV="vuejs"
jekyll build --config _config_vuejs.yml --trace

cd $ROOT

cp -R $MODULES_ROOT"/bin/dist/api-reference" \
	  $VUEJS_ROOT"/vuejs" \
	  $WWW_ROOT
if [ -f $NS_UI_LV"/README.md" ]; then
	cp -R $NS_UI_API_REF"/ns-ui-api-reference" \
	  $WWW_ROOT
fi
cp -R $NS_DIST_ROOT"/./" $WWW_ROOT
cp -R $NG_DIST_ROOT"/./" $WWW_ROOT"/angular"

