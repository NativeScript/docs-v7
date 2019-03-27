# NativeScript Documentation

Home of the NativeScript documentation content that lives at <http://docs.nativescript.org>. Start [contributing](#contributing) today!

* [Contributing 🍺](#contributing)
* [About Jekyll :nut_and_bolt:](#about-jekyll)
* [Configuration ⚙️](#configuration)
* [Local Setup :computer:](#local-setup)
* [Contributors ❤️](#contributors)

## Contributing

The NativeScript documentation is completely open source and we love contributions. Whether you want to fix a typo, or write an entire article, the NativeScript documentation is a great way to get started contributing to an open source project.

Don’t know where to start? Check out the [list of issues with the “help wanted” label](https://github.com/NativeScript/docs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22). New to git or GitHub? [Join our community Slack chat](http://developer.telerik.com/wp-login.php?action=slack-invitation) and we’ll be happy to help get you up and running.

The `master` branch contains the most up-to-date version of the NativeScript documentation and its contents are uploaded to [docs.nativescript.org](https://docs.nativescript.org/). When contributing to the documentation, always create a branch for your work from `master` as this will facilitate easier pull request management.

## About Jekyll
This documentation is built using [Jekyll](https://jekyllrb.com/docs/home/). More info on how to control the template, table of content and the project structure in general can be found in the [Build README](build/README.md)

## Configuration

There are two versions of the NativeScript documentation that generate similar output: `nativescript` and `angular`. The former builds the vanilla NativeScript docs at [docs.nativescript.org/start/introduction](https://docs.nativescript.org/start/introduction), while the latter discusses Angular-specific topics at [docs.nativescript.org/angular/start/introduction](https://docs.nativescript.org/angular/start/introduction).

Most of the content in this repository is shared between the two environments, but occasionally you may need to add environment-specific content. When you have this need you have a few options.

1. If you would like a page to appear in a single environment, add an `environment: angular` or `environment: nativescript` property to that page's front matter. Pages marked with an `environment` property will appear in a single environment, and pages _not_ marked with an `environment` property will be shared across all environments.

2. If you have a page that should be appear in both environments but has different content for certain sections, you can use our built-in environment block tags. The blocks are  named `angular` and `nativescript`, respectively, and can be used like this:

```md
{% nativescript %}This paragraph appears only in the vanilla NativeScript documentation{% endnativescript %}

This paragraph appears in both environments.

{% angular %}This appears only in the Angular NativeScript documentation{% endangular %}
 ```

## Local Setup

If you plan to work on a non-trivial change, you will most probably want to run the documentation locally in order to give your change a try before submitting a pull request. To provide you with this opportunity without installing a ton of libraries and loose time in configuration, we have prepared a virtual environment based on a docker image, where everything is prepared for you in advance.

### Prerequisites

Docker should be installed on your machine:

* Open the [official Docker install page](https://docs.docker.com/engine/installation/) and follow the instructions.

The NativeScript documentation is composed from multiple repositories:

* [NativeScript Docs](https://github.com/NativeScript/docs)
* [NativeScript Modules](https://github.com/NativeScript/NativeScript)
* [NativeScript Angular](https://github.com/NativeScript/nativescript-angular)
* [NativeScript JavaScript SDK examples](https://github.com/NativeScript/nativescript-sdk-examples-js)
* [NativeScript Angular SDK examples](https://github.com/NativeScript/nativescript-sdk-examples-ng)

### Building the docker image

Start by cloning all required git repositories in some local folder (`ns-docs` in the following examples):

Open a console box (**Windows users should run a Git bash session!**) and clone the required git repositories:

```bash
mkdir ns-docs
cd ns-docs
git clone https://github.com/NativeScript/docs.git
git clone https://github.com/NativeScript/nativescript-angular.git
```

Optional:

```bash
git clone https://github.com/NativeScript/NativeScript.git
git clone https://github.com/NativeScript/nativescript-sdk-examples-js.git
git clone https://github.com/NativeScript/nativescript-sdk-examples-ng.git
git clone https://github.com/NativeScript/nativescript-cli.git

git clone https://github.com/NativeScript/nativescript-ui-listview
git clone https://github.com/NativeScript/nativescript-ui-autocomplete
git clone https://github.com/NativeScript/nativescript-ui-dataform
git clone https://github.com/NativeScript/nativescript-ui-chart
git clone https://github.com/NativeScript/nativescript-ui-calendar
git clone https://github.com/NativeScript/nativescript-ui-gauge
git clone https://github.com/NativeScript/nativescript-ui-sidedrawer
```

> **NOTE**: `nativescript-ui-...` are private repositories used for building the Api Reference for the NativeScript UI components.  
> **NOTE**: If you have these repositories locally from previous work with the documentation, be sure to delete them and start from scratch as some old files can cause problems with the current setup.

Then build the docker image by using the following command from the `ns-docs` folder:

```bash
sudo docker build -t ns-docs:1.0 docs/build
```

> **NOTE**: If you received some unauthorized error, make sure you are logged into docker from the CLI. Just execute `docker login` and follow the instruction. One thing to have in mind is that docker username is your email, but docker ID is what you see on top right when you login to https://hub.docker.com. When executing `docker login` you need to enter your docker ID.

### Building the documentation

Start the docker image created in the previous step from the **ns-docs** folder:

```bash
sudo docker run --rm -t -i -v $(pwd):/root -p 9192:9192 -t ns-docs:1.0
```

Due to the [poor performance of mounted volumes on Mac OS](https://docs.docker.com/docker-for-mac/osxfs/#performance-issues-solutions-and-roadmap) you may use the [`delegated`](https://docs.docker.com/docker-for-mac/osxfs-caching/#delegated) mount strategy:

```bash
sudo docker run --rm -t -i -v $(pwd):/root:delegated -p 9192:9192 -t ns-docs:1.0
```

### Adding content

Edit an article in some of the repositories and navigate to http://localhost:9192 on the host machine. Notice that it might take some time for the changes to be reflected in the browser.

### Making changes

* Edit some files.
* Refresh your browser (depending on which files have been modified it might take more or less time for the changes to take effect).

## Contributors

The following is a list of all the people that have contributed to the NativeScript documentation. Thanks for your contributions!

[<img alt="tjvantoll" src="https://avatars1.githubusercontent.com/u/544280?v=4&s=117" width="117">](https://github.com/tjvantoll)[<img alt="NickIliev" src="https://avatars2.githubusercontent.com/u/18008302?v=4&s=117" width="117">](https://github.com/NickIliev)[<img alt="tsonevn" src="https://avatars3.githubusercontent.com/u/17448734?v=4&s=117" width="117">](https://github.com/tsonevn)[<img alt="etabakov" src="https://avatars3.githubusercontent.com/u/2611328?v=4&s=117" width="117">](https://github.com/etabakov)[<img alt="ErjanGavalji" src="https://avatars3.githubusercontent.com/u/84975?v=4&s=117" width="117">](https://github.com/ErjanGavalji)[<img alt="ns-bot" src="https://avatars3.githubusercontent.com/u/8101183?v=4&s=117" width="117">](https://github.com/ns-bot)

[<img alt="vakrilov" src="https://avatars3.githubusercontent.com/u/4092076?v=4&s=117" width="117">](https://github.com/vakrilov)[<img alt="radeva" src="https://avatars3.githubusercontent.com/u/5549757?v=4&s=117" width="117">](https://github.com/radeva)[<img alt="vchimev" src="https://avatars1.githubusercontent.com/u/12251337?v=4&s=117" width="117">](https://github.com/vchimev)[<img alt="N3ll" src="https://avatars3.githubusercontent.com/u/12541122?v=4&s=117" width="117">](https://github.com/N3ll)[<img alt="hdeshev" src="https://avatars2.githubusercontent.com/u/63219?v=4&s=117" width="117">](https://github.com/hdeshev)[<img alt="ikoevska" src="https://avatars2.githubusercontent.com/u/3539221?v=4&s=117" width="117">](https://github.com/ikoevska)

[<img alt="erikruth" src="https://avatars2.githubusercontent.com/u/14181027?v=4&s=117" width="117">](https://github.com/erikruth)[<img alt="nsndeck" src="https://avatars3.githubusercontent.com/u/5665150?v=4&s=117" width="117">](https://github.com/nsndeck)[<img alt="Pip3r4o" src="https://avatars3.githubusercontent.com/u/10464986?v=4&s=117" width="117">](https://github.com/Pip3r4o)[<img alt="hamorphis" src="https://avatars0.githubusercontent.com/u/1201857?v=4&s=117" width="117">](https://github.com/hamorphis)[<img alt="Plamen5kov" src="https://avatars3.githubusercontent.com/u/5918351?v=4&s=117" width="117">](https://github.com/Plamen5kov)[<img alt="tbozhikov" src="https://avatars3.githubusercontent.com/u/5127806?v=4&s=117" width="117">](https://github.com/tbozhikov)

[<img alt="PetyaSotirova" src="https://avatars1.githubusercontent.com/u/3065015?v=4&s=117" width="117">](https://github.com/PetyaSotirova)[<img alt="alexziskind1" src="https://avatars2.githubusercontent.com/u/1638579?v=4&s=117" width="117">](https://github.com/alexziskind1)[<img alt="atanasovg" src="https://avatars3.githubusercontent.com/u/5878999?v=4&s=117" width="117">](https://github.com/atanasovg)[<img alt="vtrifonov" src="https://avatars3.githubusercontent.com/u/2012477?v=4&s=117" width="117">](https://github.com/vtrifonov)[<img alt="sis0k0" src="https://avatars2.githubusercontent.com/u/7893485?v=4&s=117" width="117">](https://github.com/sis0k0)[<img alt="sipacate" src="https://avatars1.githubusercontent.com/u/1827394?v=4&s=117" width="117">](https://github.com/sipacate)

[<img alt="angeltsvetkov" src="https://avatars1.githubusercontent.com/u/3983704?v=4&s=117" width="117">](https://github.com/angeltsvetkov)[<img alt="teobugslayer" src="https://avatars0.githubusercontent.com/u/5443453?v=4&s=117" width="117">](https://github.com/teobugslayer)[<img alt="ivanbuhov" src="https://avatars1.githubusercontent.com/u/2405533?v=4&s=117" width="117">](https://github.com/ivanbuhov)[<img alt="rdlauer" src="https://avatars3.githubusercontent.com/u/1918280?v=4&s=117" width="117">](https://github.com/rdlauer)[<img alt="bundyo" src="https://avatars1.githubusercontent.com/u/98318?v=4&s=117" width="117">](https://github.com/bundyo)[<img alt="dtopuzov" src="https://avatars3.githubusercontent.com/u/6651651?v=4&s=117" width="117">](https://github.com/dtopuzov)

[<img alt="toddanglin" src="https://avatars0.githubusercontent.com/u/647319?v=4&s=117" width="117">](https://github.com/toddanglin)[<img alt="EmilStoychev" src="https://avatars2.githubusercontent.com/u/65982?v=4&s=117" width="117">](https://github.com/EmilStoychev)[<img alt="jasssonpet" src="https://avatars1.githubusercontent.com/u/305639?v=4&s=117" width="117">](https://github.com/jasssonpet)[<img alt="tdermendjiev" src="https://avatars2.githubusercontent.com/u/12174161?v=4&s=117" width="117">](https://github.com/tdermendjiev)[<img alt="sebawita" src="https://avatars0.githubusercontent.com/u/6089763?v=4&s=117" width="117">](https://github.com/sebawita)[<img alt="enchev" src="https://avatars3.githubusercontent.com/u/5804953?v=4&s=117" width="117">](https://github.com/enchev)

[<img alt="pkoleva" src="https://avatars1.githubusercontent.com/u/7813201?v=4&s=117" width="117">](https://github.com/pkoleva)[<img alt="lini" src="https://avatars0.githubusercontent.com/u/1461621?v=4&s=117" width="117">](https://github.com/lini)[<img alt="Mitko-Kerezov" src="https://avatars0.githubusercontent.com/u/6683316?v=4&s=117" width="117">](https://github.com/Mitko-Kerezov)[<img alt="rosen-vladimirov" src="https://avatars1.githubusercontent.com/u/8351653?v=4&s=117" width="117">](https://github.com/rosen-vladimirov)[<img alt="boevski" src="https://avatars2.githubusercontent.com/u/10432616?v=4&s=117" width="117">](https://github.com/boevski)[<img alt="darind" src="https://avatars1.githubusercontent.com/u/270695?v=4&s=117" width="117">](https://github.com/darind)

[<img alt="paulpv" src="https://avatars3.githubusercontent.com/u/1393897?v=4&s=117" width="117">](https://github.com/paulpv)[<img alt="roblav96" src="https://avatars1.githubusercontent.com/u/1457327?v=4&s=117" width="117">](https://github.com/roblav96)[<img alt="tzraikov" src="https://avatars1.githubusercontent.com/u/3244426?v=4&s=117" width="117">](https://github.com/tzraikov)[<img alt="surdu" src="https://avatars3.githubusercontent.com/u/11520795?v=4&s=117" width="117">](https://github.com/surdu)[<img alt="PanayotCankov" src="https://avatars2.githubusercontent.com/u/5919275?v=4&s=117" width="117">](https://github.com/PanayotCankov)[<img alt="bradmartin" src="https://avatars0.githubusercontent.com/u/6006148?v=4&s=117" width="117">](https://github.com/bradmartin)

[<img alt="tailsu" src="https://avatars1.githubusercontent.com/u/730130?v=4&s=117" width="117">](https://github.com/tailsu)[<img alt="sitefinitysteve" src="https://avatars3.githubusercontent.com/u/1542376?v=4&s=117" width="117">](https://github.com/sitefinitysteve)[<img alt="zbranzov" src="https://avatars1.githubusercontent.com/u/2787764?v=4&s=117" width="117">](https://github.com/zbranzov)[<img alt="dmccuskey" src="https://avatars2.githubusercontent.com/u/933841?v=4&s=117" width="117">](https://github.com/dmccuskey)[<img alt="yyosifov" src="https://avatars3.githubusercontent.com/u/2012493?v=4&s=117" width="117">](https://github.com/yyosifov)[<img alt="jlooper" src="https://avatars2.githubusercontent.com/u/1450004?v=4&s=117" width="117">](https://github.com/jlooper)

[<img alt="getsetbro" src="https://avatars2.githubusercontent.com/u/442793?v=4&s=117" width="117">](https://github.com/getsetbro)[<img alt="parloti" src="https://avatars3.githubusercontent.com/u/9643115?v=4&s=117" width="117">](https://github.com/parloti)[<img alt="pelegri" src="https://avatars3.githubusercontent.com/u/416560?v=4&s=117" width="117">](https://github.com/pelegri)[<img alt="jbristowe" src="https://avatars2.githubusercontent.com/u/71493?v=4&s=117" width="117">](https://github.com/jbristowe)[<img alt="KristianDD" src="https://avatars2.githubusercontent.com/u/2412096?v=4&s=117" width="117">](https://github.com/KristianDD)[<img alt="Lampei" src="https://avatars3.githubusercontent.com/u/104018?v=4&s=117" width="117">](https://github.com/Lampei)

[<img alt="mbektchiev" src="https://avatars1.githubusercontent.com/u/5744783?v=4&s=117" width="117">](https://github.com/mbektchiev)[<img alt="zh-m" src="https://avatars3.githubusercontent.com/u/17438369?v=4&s=117" width="117">](https://github.com/zh-m)[<img alt="ShawnPavel" src="https://avatars0.githubusercontent.com/u/20006215?v=4&s=117" width="117">](https://github.com/ShawnPavel)[<img alt="ggarabedian" src="https://avatars3.githubusercontent.com/u/10515242?v=4&s=117" width="117">](https://github.com/ggarabedian)[<img alt="manoldonev" src="https://avatars1.githubusercontent.com/u/2650247?v=4&s=117" width="117">](https://github.com/manoldonev)[<img alt="burkeholland" src="https://avatars1.githubusercontent.com/u/686963?v=4&s=117" width="117">](https://github.com/burkeholland)

[<img alt="msaelices" src="https://avatars0.githubusercontent.com/u/136875?v=4&s=117" width="117">](https://github.com/msaelices)[<img alt="AntonDobrev" src="https://avatars0.githubusercontent.com/u/3618710?v=4&s=117" width="117">](https://github.com/AntonDobrev)[<img alt="fdnhkj" src="https://avatars3.githubusercontent.com/u/5569608?v=4&s=117" width="117">](https://github.com/fdnhkj)[<img alt="gbhojraj" src="https://avatars3.githubusercontent.com/u/5335826?v=4&s=117" width="117">](https://github.com/gbhojraj)[<img alt="Hakier" src="https://avatars1.githubusercontent.com/u/1499095?v=4&s=117" width="117">](https://github.com/Hakier)[<img alt="shirohana" src="https://avatars3.githubusercontent.com/u/11359892?v=4&s=117" width="117">](https://github.com/shirohana)

[<img alt="imcgonigle" src="https://avatars0.githubusercontent.com/u/15026647?v=4&s=117" width="117">](https://github.com/imcgonigle)[<img alt="alejonext" src="https://avatars0.githubusercontent.com/u/1652887?v=4&s=117" width="117">](https://github.com/alejonext)[<img alt="Bjorn576" src="https://avatars2.githubusercontent.com/u/22535161?v=4&s=117" width="117">](https://github.com/Bjorn576)[<img alt="jayvolr" src="https://avatars0.githubusercontent.com/u/7539910?v=4&s=117" width="117">](https://github.com/jayvolr)[<img alt="jonnysamps" src="https://avatars0.githubusercontent.com/u/149911?v=4&s=117" width="117">](https://github.com/jonnysamps)[<img alt="digitaldrummerj" src="https://avatars3.githubusercontent.com/u/708423?v=4&s=117" width="117">](https://github.com/digitaldrummerj)

[<img alt="LokeCarlsson" src="https://avatars2.githubusercontent.com/u/14079937?v=4&s=117" width="117">](https://github.com/LokeCarlsson)[<img alt="felipebueno" src="https://avatars1.githubusercontent.com/u/241271?v=4&s=117" width="117">](https://github.com/felipebueno)[<img alt="Nikhil22" src="https://avatars1.githubusercontent.com/u/10525104?v=4&s=117" width="117">](https://github.com/Nikhil22)[<img alt="noumaans" src="https://avatars3.githubusercontent.com/u/9739321?v=4&s=117" width="117">](https://github.com/noumaans)[<img alt="pedromorgan" src="https://avatars1.githubusercontent.com/u/123932?v=4&s=117" width="117">](https://github.com/pedromorgan)[<img alt="Razzeee" src="https://avatars2.githubusercontent.com/u/5943908?v=4&s=117" width="117">](https://github.com/Razzeee)

[<img alt="renestalder" src="https://avatars2.githubusercontent.com/u/105358?v=4&s=117" width="117">](https://github.com/renestalder)[<img alt="rodrigopires" src="https://avatars0.githubusercontent.com/u/1280409?v=4&s=117" width="117">](https://github.com/rodrigopires)[<img alt="TedHopp" src="https://avatars0.githubusercontent.com/u/1922606?v=4&s=117" width="117">](https://github.com/TedHopp)[<img alt="devoto13" src="https://avatars1.githubusercontent.com/u/823594?v=4&s=117" width="117">](https://github.com/devoto13)[<img alt="eyal7773" src="https://avatars2.githubusercontent.com/u/9251314?v=4&s=117" width="117">](https://github.com/eyal7773)[<img alt="miroslavaivanova" src="https://avatars1.githubusercontent.com/u/4198315?v=4&s=117" width="117">](https://github.com/miroslavaivanova)

[<img alt="mtekp" src="https://avatars2.githubusercontent.com/u/15797101?v=4&s=117" width="117">](https://github.com/mtekp)[<img alt="TsvetanMilanov" src="https://avatars1.githubusercontent.com/u/10463529?v=4&s=117" width="117">](https://github.com/TsvetanMilanov)[<img alt="ignaciolarranaga" src="https://avatars1.githubusercontent.com/u/15932965?v=4&s=117" width="117">](https://github.com/ignaciolarranaga)[<img alt="ADmad" src="https://avatars0.githubusercontent.com/u/142658?v=4&s=117" width="117">](https://github.com/ADmad)[<img alt="airandfingers" src="https://avatars1.githubusercontent.com/u/1088051?v=4&s=117" width="117">](https://github.com/airandfingers)[<img alt="ADjenkov" src="https://avatars3.githubusercontent.com/u/5860190?v=4&s=117" width="117">](https://github.com/ADjenkov)

[<img alt="kondasoft" src="https://avatars0.githubusercontent.com/u/273284?v=4&s=117" width="117">](https://github.com/kondasoft)[<img alt="amjd" src="https://avatars1.githubusercontent.com/u/1328238?v=4&s=117" width="117">](https://github.com/amjd)[<img alt="devdRew" src="https://avatars2.githubusercontent.com/u/5088159?v=4&s=117" width="117">](https://github.com/devdRew)[<img alt="MonsieurMan" src="https://avatars0.githubusercontent.com/u/13108166?v=4&s=117" width="117">](https://github.com/MonsieurMan)[<img alt="gupta-ankit" src="https://avatars1.githubusercontent.com/u/931331?v=4&s=117" width="117">](https://github.com/gupta-ankit)[<img alt="ABoschman" src="https://avatars1.githubusercontent.com/u/8722459?v=4&s=117" width="117">](https://github.com/ABoschman)

[<img alt="yjaaidi" src="https://avatars2.githubusercontent.com/u/2674658?v=4&s=117" width="117">](https://github.com/yjaaidi)[<img alt="bsyk" src="https://avatars2.githubusercontent.com/u/6765840?v=4&s=117" width="117">](https://github.com/bsyk)[<img alt="benjlin" src="https://avatars3.githubusercontent.com/u/27397250?v=4&s=117" width="117">](https://github.com/benjlin)[<img alt="brandonpearson23" src="https://avatars1.githubusercontent.com/u/14300990?v=4&s=117" width="117">](https://github.com/brandonpearson23)[<img alt="clounie" src="https://avatars1.githubusercontent.com/u/11947182?v=4&s=117" width="117">](https://github.com/clounie)[<img alt="CMRHDL" src="https://avatars1.githubusercontent.com/u/10167897?v=4&s=117" width="117">](https://github.com/CMRHDL)

[<img alt="cameronnorman" src="https://avatars1.githubusercontent.com/u/6358632?v=4&s=117" width="117">](https://github.com/cameronnorman)[<img alt="celso-wo" src="https://avatars0.githubusercontent.com/u/9733841?v=4&s=117" width="117">](https://github.com/celso-wo)[<img alt="chuckmitchell" src="https://avatars1.githubusercontent.com/u/70250?v=4&s=117" width="117">](https://github.com/chuckmitchell)[<img alt="BaronVonPerko" src="https://avatars2.githubusercontent.com/u/5384791?v=4&s=117" width="117">](https://github.com/BaronVonPerko)[<img alt="crixx" src="https://avatars1.githubusercontent.com/u/5507533?v=4&s=117" width="117">](https://github.com/crixx)[<img alt="chrants" src="https://avatars0.githubusercontent.com/u/4203662?v=4&s=117" width="117">](https://github.com/chrants)

[<img alt="yapcwed" src="https://avatars1.githubusercontent.com/u/40124426?v=4&s=117" width="117">](https://github.com/yapcwed)[<img alt="chrismullins" src="https://avatars2.githubusercontent.com/u/1045657?v=4&s=117" width="117">](https://github.com/chrismullins)[<img alt="dotlens" src="https://avatars3.githubusercontent.com/u/15105420?v=4&s=117" width="117">](https://github.com/dotlens)[<img alt="derskeal" src="https://avatars2.githubusercontent.com/u/27731088?v=4&s=117" width="117">](https://github.com/derskeal)[<img alt="ejsuncy" src="https://avatars2.githubusercontent.com/u/5944767?v=4&s=117" width="117">](https://github.com/ejsuncy)[<img alt="DannyFeliz" src="https://avatars1.githubusercontent.com/u/5460365?v=4&s=117" width="117">](https://github.com/DannyFeliz)

[<img alt="dennistang" src="https://avatars3.githubusercontent.com/u/247852?v=4&s=117" width="117">](https://github.com/dennistang)[<img alt="DimitarTachev" src="https://avatars1.githubusercontent.com/u/1865068?v=4&s=117" width="117">](https://github.com/DimitarTachev)[<img alt="diogocapela" src="https://avatars3.githubusercontent.com/u/10655554?v=4&s=117" width="117">](https://github.com/diogocapela)[<img alt="donangel" src="https://avatars3.githubusercontent.com/u/4919119?v=4&s=117" width="117">](https://github.com/donangel)[<img alt="dogabudak" src="https://avatars3.githubusercontent.com/u/15941813?v=4&s=117" width="117">](https://github.com/dogabudak)[<img alt="DrQwertySilence" src="https://avatars0.githubusercontent.com/u/1941149?v=4&s=117" width="117">](https://github.com/DrQwertySilence)

[<img alt="dyldawg" src="https://avatars1.githubusercontent.com/u/22238774?v=4&s=117" width="117">](https://github.com/dyldawg)[<img alt="djenitoo" src="https://avatars3.githubusercontent.com/u/5939585?v=4&s=117" width="117">](https://github.com/djenitoo)[<img alt="rexeze" src="https://avatars0.githubusercontent.com/u/12452884?v=4&s=117" width="117">](https://github.com/rexeze)[<img alt="felipebernardes" src="https://avatars3.githubusercontent.com/u/7507797?v=4&s=117" width="117">](https://github.com/felipebernardes)[<img alt="FrancoisCamus" src="https://avatars3.githubusercontent.com/u/7439901?v=4&s=117" width="117">](https://github.com/FrancoisCamus)[<img alt="gabesumner" src="https://avatars3.githubusercontent.com/u/377569?v=4&s=117" width="117">](https://github.com/gabesumner)

[<img alt="hristoborisov" src="https://avatars2.githubusercontent.com/u/2996983?v=4&s=117" width="117">](https://github.com/hristoborisov)[<img alt="jkulubya" src="https://avatars1.githubusercontent.com/u/7911793?v=4&s=117" width="117">](https://github.com/jkulubya)[<img alt="jayoma" src="https://avatars0.githubusercontent.com/u/3663759?v=4&s=117" width="117">](https://github.com/jayoma)[<img alt="n3wc" src="https://avatars0.githubusercontent.com/u/1139568?v=4&s=117" width="117">](https://github.com/n3wc)[<img alt="JmOkay" src="https://avatars1.githubusercontent.com/u/16624674?v=4&s=117" width="117">](https://github.com/JmOkay)[<img alt="jrz" src="https://avatars0.githubusercontent.com/u/149668?v=4&s=117" width="117">](https://github.com/jrz)

[<img alt="joshgking" src="https://avatars0.githubusercontent.com/u/3820857?v=4&s=117" width="117">](https://github.com/joshgking)[<img alt="jurgentreep" src="https://avatars1.githubusercontent.com/u/2023697?v=4&s=117" width="117">](https://github.com/jurgentreep)[<img alt="Ksantacr" src="https://avatars3.githubusercontent.com/u/3767609?v=4&s=117" width="117">](https://github.com/Ksantacr)[<img alt="kharysharpe" src="https://avatars3.githubusercontent.com/u/278654?v=4&s=117" width="117">](https://github.com/kharysharpe)[<img alt="LeandroDG" src="https://avatars3.githubusercontent.com/u/442153?v=4&s=117" width="117">](https://github.com/LeandroDG)[<img alt="macknelson" src="https://avatars1.githubusercontent.com/u/29145302?v=4&s=117" width="117">](https://github.com/macknelson)

[<img alt="marablayev" src="https://avatars2.githubusercontent.com/u/17024338?v=4&s=117" width="117">](https://github.com/marablayev)[<img alt="mrcaste" src="https://avatars3.githubusercontent.com/u/1858998?v=4&s=117" width="117">](https://github.com/mrcaste)[<img alt="hettiger" src="https://avatars1.githubusercontent.com/u/4583871?v=4&s=117" width="117">](https://github.com/hettiger)[<img alt="nemephx" src="https://avatars2.githubusercontent.com/u/12735072?v=4&s=117" width="117">](https://github.com/nemephx)[<img alt="michael-martin" src="https://avatars3.githubusercontent.com/u/825998?v=4&s=117" width="117">](https://github.com/michael-martin)[<img alt="DanekDanek" src="https://avatars1.githubusercontent.com/u/17088213?v=4&s=117" width="117">](https://github.com/DanekDanek)

[<img alt="realtebo" src="https://avatars2.githubusercontent.com/u/1268699?v=4&s=117" width="117">](https://github.com/realtebo)[<img alt="MitzaCoder" src="https://avatars1.githubusercontent.com/u/11768420?v=4&s=117" width="117">](https://github.com/MitzaCoder)[<img alt="mhrabiee" src="https://avatars2.githubusercontent.com/u/600483?v=4&s=117" width="117">](https://github.com/mhrabiee)[<img alt="Natalia-Hristova" src="https://avatars0.githubusercontent.com/u/5803037?v=4&s=117" width="117">](https://github.com/Natalia-Hristova)[<img alt="nicoeg" src="https://avatars3.githubusercontent.com/u/947230?v=4&s=117" width="117">](https://github.com/nicoeg)[<img alt="developer82" src="https://avatars3.githubusercontent.com/u/3031516?v=4&s=117" width="117">](https://github.com/developer82)

[<img alt="pzanitti" src="https://avatars3.githubusercontent.com/u/1615955?v=4&s=117" width="117">](https://github.com/pzanitti)[<img alt="pdvorchik" src="https://avatars2.githubusercontent.com/u/4419203?v=4&s=117" width="117">](https://github.com/pdvorchik)[<img alt="000panther" src="https://avatars1.githubusercontent.com/u/499094?v=4&s=117" width="117">](https://github.com/000panther)[<img alt="morph3o" src="https://avatars2.githubusercontent.com/u/1556931?v=4&s=117" width="117">](https://github.com/morph3o)[<img alt="rajatraj733" src="https://avatars3.githubusercontent.com/u/5202706?v=4&s=117" width="117">](https://github.com/rajatraj733)[<img alt="rakeshgirase" src="https://avatars2.githubusercontent.com/u/16098644?v=4&s=117" width="117">](https://github.com/rakeshgirase)

[<img alt="ffxsam" src="https://avatars2.githubusercontent.com/u/12532733?v=4&s=117" width="117">](https://github.com/ffxsam)[<img alt="SamVerschueren" src="https://avatars2.githubusercontent.com/u/1913805?v=4&s=117" width="117">](https://github.com/SamVerschueren)[<img alt="mastix" src="https://avatars3.githubusercontent.com/u/1812978?v=4&s=117" width="117">](https://github.com/mastix)[<img alt="sean-perkins" src="https://avatars2.githubusercontent.com/u/13732623?v=4&s=117" width="117">](https://github.com/sean-perkins)[<img alt="sebastianovide" src="https://avatars0.githubusercontent.com/u/1496395?v=4&s=117" width="117">](https://github.com/sebastianovide)[<img alt="jalkoby" src="https://avatars1.githubusercontent.com/u/484327?v=4&s=117" width="117">](https://github.com/jalkoby)

[<img alt="shauntif" src="https://avatars3.githubusercontent.com/u/1767985?v=4&s=117" width="117">](https://github.com/shauntif)[<img alt="shiv19" src="https://avatars1.githubusercontent.com/u/9407019?v=4&s=117" width="117">](https://github.com/shiv19)[<img alt="simmstein" src="https://avatars1.githubusercontent.com/u/520175?v=4&s=117" width="117">](https://github.com/simmstein)[<img alt="DasAllFolks" src="https://avatars2.githubusercontent.com/u/4843949?v=4&s=117" width="117">](https://github.com/DasAllFolks)[<img alt="tadeucariolano" src="https://avatars0.githubusercontent.com/u/6059096?v=4&s=117" width="117">](https://github.com/tadeucariolano)[<img alt="Taremeh" src="https://avatars0.githubusercontent.com/u/1512652?v=4&s=117" width="117">](https://github.com/Taremeh)

[<img alt="TechnicalSoup" src="https://avatars2.githubusercontent.com/u/22541141?v=4&s=117" width="117">](https://github.com/TechnicalSoup)[<img alt="Tetrygon" src="https://avatars0.githubusercontent.com/u/18582872?v=4&s=117" width="117">](https://github.com/Tetrygon)[<img alt="fartek" src="https://avatars3.githubusercontent.com/u/6594580?v=4&s=117" width="117">](https://github.com/fartek)[<img alt="tdous" src="https://avatars3.githubusercontent.com/u/505549?v=4&s=117" width="117">](https://github.com/tdous)[<img alt="e2l3n" src="https://avatars1.githubusercontent.com/u/2971483?v=4&s=117" width="117">](https://github.com/e2l3n)[<img alt="tonymporter" src="https://avatars2.githubusercontent.com/u/2789043?v=4&s=117" width="117">](https://github.com/tonymporter)

[<img alt="trentvb" src="https://avatars2.githubusercontent.com/u/1418656?v=4&s=117" width="117">](https://github.com/trentvb)[<img alt="VladimirAmiorkov" src="https://avatars2.githubusercontent.com/u/4989411?v=4&s=117" width="117">](https://github.com/VladimirAmiorkov)[<img alt="weech3r" src="https://avatars0.githubusercontent.com/u/6155180?v=4&s=117" width="117">](https://github.com/weech3r)[<img alt="williamho" src="https://avatars1.githubusercontent.com/u/1883086?v=4&s=117" width="117">](https://github.com/williamho)[<img alt="Xorbert" src="https://avatars2.githubusercontent.com/u/6226676?v=4&s=117" width="117">](https://github.com/Xorbert)[<img alt="csj" src="https://avatars1.githubusercontent.com/u/5482155?v=4&s=117" width="117">](https://github.com/csj)

[<img alt="diyews" src="https://avatars1.githubusercontent.com/u/35769340?v=4&s=117" width="117">](https://github.com/diyews)[<img alt="doorb02" src="https://avatars1.githubusercontent.com/u/2681338?v=4&s=117" width="117">](https://github.com/doorb02)[<img alt="gezbo" src="https://avatars0.githubusercontent.com/u/7525980?v=4&s=117" width="117">](https://github.com/gezbo)[<img alt="ishandutta2007" src="https://avatars3.githubusercontent.com/u/2527354?v=4&s=117" width="117">](https://github.com/ishandutta2007)[<img alt="jacostaperu" src="https://avatars2.githubusercontent.com/u/6208793?v=4&s=117" width="117">](https://github.com/jacostaperu)[<img alt="narayananl23" src="https://avatars0.githubusercontent.com/u/3720723?v=4&s=117" width="117">](https://github.com/narayananl23)

[<img alt="peterennis" src="https://avatars1.githubusercontent.com/u/140737?v=4&s=117" width="117">](https://github.com/peterennis)[<img alt="quintonn" src="https://avatars0.githubusercontent.com/u/9988541?v=4&s=117" width="117">](https://github.com/quintonn)[<img alt="saiberz" src="https://avatars2.githubusercontent.com/u/1022999?v=4&s=117" width="117">](https://github.com/saiberz)[<img alt="saknarak" src="https://avatars2.githubusercontent.com/u/7794793?v=4&s=117" width="117">](https://github.com/saknarak)[<img alt="seros00" src="https://avatars1.githubusercontent.com/u/12219508?v=4&s=117" width="117">](https://github.com/seros00)[<img alt="stevo-knievo" src="https://avatars2.githubusercontent.com/u/2980220?v=4&s=117" width="117">](https://github.com/stevo-knievo)

[<img alt="svalchinov" src="https://avatars0.githubusercontent.com/u/3678622?v=4&s=117" width="117">](https://github.com/svalchinov)[<img alt="tdsmithATabc" src="https://avatars1.githubusercontent.com/u/20977267?v=4&s=117" width="117">](https://github.com/tdsmithATabc)[<img alt="trevordowdle" src="https://avatars1.githubusercontent.com/u/4210581?v=4&s=117" width="117">](https://github.com/trevordowdle)[<img alt="tsira" src="https://avatars1.githubusercontent.com/u/221682?v=4&s=117" width="117">](https://github.com/tsira)[<img alt="yavulan" src="https://avatars3.githubusercontent.com/u/7360866?v=4&s=117" width="117">](https://github.com/yavulan)[<img alt="bensooraj" src="https://avatars1.githubusercontent.com/u/10161260?v=4&s=117" width="117">](https://github.com/bensooraj)[<img alt="bdlb77" src="https://avatars3.githubusercontent.com/u/32174912?s=400&u=8a81fa5d01ccc8569b3ae4dbc2dca1db39e40176&v=4" width="117">](https://github.com/bdlb77)

<!-- Note: The table above get generated with the following commands -->
<!-- npm install -g github-contributors-list -->
<!-- githubcontrib --owner NativeScript --repo docs --cols 6 --sortOrder desc | pbcopy -->
