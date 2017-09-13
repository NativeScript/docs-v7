# NativeScript Documentation

Home of the NativeScript documentation content that lives at <http://docs.nativescript.org>. Start [contributing](#contributing) today!

* [Contributing 🍺](#contributing)
* [About Jekyll :nut_and_bolt:](#about-jekyll)
* [Configuration ⚙️](#configuration)
* [Tutorials 📖](#tutorials)
* [Local Setup :computer:](#local-setup)
* [Contributors ❤️](#contributors)

## Contributing

The NativeScript documentation is completely open source and we love contributions. Whether you want to fix a typo, or write an entire article, the NativeScript documentation is a great way to get started contributing to an open source project.

Don’t know where to start? Check out the [list of issues with the “up-for-grabs” label](https://github.com/NativeScript/docs/issues?q=is%3Aopen+is%3Aissue+label%3Aup-for-grabs). New to git or GitHub? [Join our community Slack chat](http://developer.telerik.com/wp-login.php?action=slack-invitation) and we’ll be happy to help get you up and running.

The `master` branch contains the most up-to-date version of the NativeScript documentation and its contents are uploaded to [docs.nativescript.org](https://docs.nativescript.org/). When contributing to the documentation, always create a branch for your work from `master` as this will facilitate easier pull request management.

## About Jekyll
This documentation is built using [Jekyll](https://jekyllrb.com/docs/home/). More info on how to control the template, table of content and the project structure in general can be found in the [Build README](build/README.md)

## Configuration

There are two versions of the NativeScript documentation that generate similar output: `nativescript` and `angular`. The former builds the vanilla NativeScript docs at [docs.nativescript.org](https://docs.nativescript.org/), while the latter discusses Angular-specific topics at [docs.nativescript.org/angular](https://docs.nativescript.org/angular). 

Most of the content in this repository is shared between the two environments, but occasionally you may need to add environment-specific content. When you have this need you have a few options.

1. If you would like a page to appear in a single environment, add an `environment: angular` or `environment: nativescript` property to that page's front matter. Pages marked with an `environment` property will appear in a single environment, and pages _not_ marked with an `environment` property will be shared across all environments.

2. If you have a page that should be appear in both environments but has different content for certain sections, you can use our built-in environment block tags. The blocks are  named `angular` and `nativescript`, respectively, and can be used like this:

```
{% nativescript %}This paragraph appears only in the vanilla NativeScript documentation{% endnativescript %}

This paragraph appears in both environments.

{% angular %}This appears only in the Angular NativeScript documentation{% endangular %}
 ```

## Tutorials

The NativeScript documentation contains two full getting started tutorials, one for [using NativeScript with vanilla JavaScript](https://docs.nativescript.org/tutorial/chapter-0), and another for [using NativeScript with Angular](https://docs.nativescript.org/angular/tutorial/ng-chapter-0.html). The contents of these two tutorials are in [this repository’s `/tutorial` folder](https://github.com/NativeScript/docs/tree/master/tutorial).

When making changes to either of these tutorials you might need to additional alter one of the four templates these tutorials use. Readers use these templates through the `tns create` command, for example `tns create HelloWorld --template nativescript-template-tutorial`.

* JavaScript
    * [nativescript-template-tutorial](https://github.com/tjvantoll/nativescript-template-tutorial)
        * Hello world template used by the JavaScript tutorial.
    * [nativescript-template-groceries](https://github.com/tjvantoll/nativescript-template-groceries)
        * Starting point for the Groceries example used by the JavaScript tutorial.
* Angular
    * [nativescript-template-ng-tutorial](https://github.com/tjvantoll/nativescript-template-ng-tutorial)
        * Hello world template used by the Angular tutorial.
    * [nativescript-template-ng-groceries](https://github.com/tjvantoll/nativescript-template-ng-groceries)
        * Starting point for the Groceries example used by the Angular tutorial.

## Local Setup

If you plan to work on a non-trivial change, you will most probably want to run the documentation locally in order to give your change a try before submitting a pull request. To provide you with this opportunity without installing a ton of libraries and loose time in configuration, we have prepared a virtual environment based on vagrant configuration, where everything is prepared for you in advance. 

### Prerequisites

* VirtualBox: https://www.virtualbox.org
* Vagrant: https://www.vagrantup.com

### Installing the virtual machine

Open a console box (**Windows users should run a Git bash session!**) and cd to the `build` folder of the working dir.

```bash
$ cd build
```

Then do a:

```bash
$ vagrant up
```

This should download the correct image, install it, start the VM and run the provisioning script.

### Provisioning

The provisioning script (`provision/install.sh`) installs:

* Base system packages;
* Ruby;
* Node.js;
* nginx.

It also sets up the Jekyll project by installing all gems locally using bundler.

### Building the documentation

Connect to the running VM first:

```bash
$ vagrant ssh
```

Then go to the project dir (mapped to `/vagrant`):

```bash
$ cd /vagrant
```

And run the build script telling it to use the current branch and avoid committing changelogs:

```bash
$ ./build.sh
```

### Adding content

Edit an article and trigger your build by running `build.sh` as described above.

Then open a web browser on your host machine and navigate to http://localhost:8000/start/introduction.html or http://localhost:8000/angular/start/introduction.html.

Alternatively you could run a quick build with just a single configuration: "nativescript" or "angular" that will take about half the time. It could be useful when editing a documentation article and you want quicker feedback:

```bash
$ ./build-jekyll.sh "nativescript"
```

or

```bash
$ ./build-jekyll.sh "angular"
```

### Making changes

* Edit some files.
* Rerun the build command above.
* Refresh your browser.

## Contributors

The following is a list of all the people that have contributed to the NativeScript documentation. Thanks for your contributions!

[<img alt="tjvantoll" src="https://avatars2.githubusercontent.com/u/544280?v=3&s=117" width="117">](https://github.com/tjvantoll)[<img alt="ErjanGavalji" src="https://avatars0.githubusercontent.com/u/84975?v=3&s=117" width="117">](https://github.com/ErjanGavalji)[<img alt="ns-bot" src="https://avatars0.githubusercontent.com/u/8101183?v=3&s=117" width="117">](https://github.com/ns-bot)[<img alt="tsonevn" src="https://avatars0.githubusercontent.com/u/17448734?v=3&s=117" width="117">](https://github.com/tsonevn)[<img alt="vakrilov" src="https://avatars0.githubusercontent.com/u/4092076?v=3&s=117" width="117">](https://github.com/vakrilov)[<img alt="NickIliev" src="https://avatars1.githubusercontent.com/u/18008302?v=3&s=117" width="117">](https://github.com/NickIliev)

[<img alt="N3ll" src="https://avatars0.githubusercontent.com/u/12541122?v=3&s=117" width="117">](https://github.com/N3ll)[<img alt="hdeshev" src="https://avatars1.githubusercontent.com/u/63219?v=3&s=117" width="117">](https://github.com/hdeshev)[<img alt="vchimev" src="https://avatars2.githubusercontent.com/u/12251337?v=3&s=117" width="117">](https://github.com/vchimev)[<img alt="erikruth" src="https://avatars1.githubusercontent.com/u/14181027?v=3&s=117" width="117">](https://github.com/erikruth)[<img alt="nsndeck" src="https://avatars0.githubusercontent.com/u/5665150?v=3&s=117" width="117">](https://github.com/nsndeck)[<img alt="ikoevska" src="https://avatars1.githubusercontent.com/u/3539221?v=3&s=117" width="117">](https://github.com/ikoevska)

[<img alt="atanasovg" src="https://avatars0.githubusercontent.com/u/5878999?v=3&s=117" width="117">](https://github.com/atanasovg)[<img alt="Plamen5kov" src="https://avatars0.githubusercontent.com/u/5918351?v=3&s=117" width="117">](https://github.com/Plamen5kov)[<img alt="teobugslayer" src="https://avatars3.githubusercontent.com/u/5443453?v=3&s=117" width="117">](https://github.com/teobugslayer)[<img alt="tzraikov" src="https://avatars2.githubusercontent.com/u/3244426?v=3&s=117" width="117">](https://github.com/tzraikov)[<img alt="ivanbuhov" src="https://avatars2.githubusercontent.com/u/2405533?v=3&s=117" width="117">](https://github.com/ivanbuhov)[<img alt="jasssonpet" src="https://avatars2.githubusercontent.com/u/305639?v=3&s=117" width="117">](https://github.com/jasssonpet)

[<img alt="hamorphis" src="https://avatars3.githubusercontent.com/u/1201857?v=3&s=117" width="117">](https://github.com/hamorphis)[<img alt="enchev" src="https://avatars0.githubusercontent.com/u/5804953?v=3&s=117" width="117">](https://github.com/enchev)[<img alt="sis0k0" src="https://avatars1.githubusercontent.com/u/7893485?v=3&s=117" width="117">](https://github.com/sis0k0)[<img alt="Mitko-Kerezov" src="https://avatars3.githubusercontent.com/u/6683316?v=3&s=117" width="117">](https://github.com/Mitko-Kerezov)[<img alt="rosen-vladimirov" src="https://avatars2.githubusercontent.com/u/8351653?v=3&s=117" width="117">](https://github.com/rosen-vladimirov)[<img alt="boevski" src="https://avatars1.githubusercontent.com/u/10432616?v=3&s=117" width="117">](https://github.com/boevski)

[<img alt="Pip3r4o" src="https://avatars0.githubusercontent.com/u/10464986?v=3&s=117" width="117">](https://github.com/Pip3r4o)[<img alt="dtopuzov" src="https://avatars0.githubusercontent.com/u/6651651?v=3&s=117" width="117">](https://github.com/dtopuzov)[<img alt="PanayotCankov" src="https://avatars1.githubusercontent.com/u/5919275?v=3&s=117" width="117">](https://github.com/PanayotCankov)[<img alt="roblav96" src="https://avatars2.githubusercontent.com/u/1457327?v=3&s=117" width="117">](https://github.com/roblav96)[<img alt="getsetbro" src="https://avatars1.githubusercontent.com/u/442793?v=3&s=117" width="117">](https://github.com/getsetbro)[<img alt="tailsu" src="https://avatars2.githubusercontent.com/u/730130?v=3&s=117" width="117">](https://github.com/tailsu)

[<img alt="dmccuskey" src="https://avatars1.githubusercontent.com/u/933841?v=3&s=117" width="117">](https://github.com/dmccuskey)[<img alt="sipacate" src="https://avatars2.githubusercontent.com/u/1827394?v=3&s=117" width="117">](https://github.com/sipacate)[<img alt="bradmartin" src="https://avatars3.githubusercontent.com/u/6006148?v=3&s=117" width="117">](https://github.com/bradmartin)[<img alt="pelegri" src="https://avatars0.githubusercontent.com/u/416560?v=3&s=117" width="117">](https://github.com/pelegri)[<img alt="jbristowe" src="https://avatars1.githubusercontent.com/u/71493?v=3&s=117" width="117">](https://github.com/jbristowe)[<img alt="Lampei" src="https://avatars0.githubusercontent.com/u/104018?v=3&s=117" width="117">](https://github.com/Lampei)

[<img alt="zh-m" src="https://avatars0.githubusercontent.com/u/17438369?v=3&s=117" width="117">](https://github.com/zh-m)[<img alt="ls-spavel" src="https://avatars3.githubusercontent.com/u/20006215?v=3&s=117" width="117">](https://github.com/ls-spavel)[<img alt="jlooper" src="https://avatars1.githubusercontent.com/u/1450004?v=3&s=117" width="117">](https://github.com/jlooper)[<img alt="burkeholland" src="https://avatars2.githubusercontent.com/u/686963?v=3&s=117" width="117">](https://github.com/burkeholland)[<img alt="alejonext" src="https://avatars3.githubusercontent.com/u/1652887?v=3&s=117" width="117">](https://github.com/alejonext)[<img alt="alexziskind1" src="https://avatars1.githubusercontent.com/u/1638579?v=3&s=117" width="117">](https://github.com/alexziskind1)

[<img alt="fdnhkj" src="https://avatars0.githubusercontent.com/u/5569608?v=3&s=117" width="117">](https://github.com/fdnhkj)[<img alt="gbhojraj" src="https://avatars0.githubusercontent.com/u/5335826?v=3&s=117" width="117">](https://github.com/gbhojraj)[<img alt="Hakier" src="https://avatars2.githubusercontent.com/u/1499095?v=3&s=117" width="117">](https://github.com/Hakier)[<img alt="hshristov" src="https://avatars2.githubusercontent.com/u/5966717?v=3&s=117" width="117">](https://github.com/hshristov)[<img alt="ignaciolarranaga" src="https://avatars2.githubusercontent.com/u/15932965?v=3&s=117" width="117">](https://github.com/ignaciolarranaga)[<img alt="Bjorn576" src="https://avatars1.githubusercontent.com/u/22535161?v=3&s=117" width="117">](https://github.com/Bjorn576)

[<img alt="digitaldrummerj" src="https://avatars0.githubusercontent.com/u/708423?v=3&s=117" width="117">](https://github.com/digitaldrummerj)[<img alt="shiravand" src="https://avatars2.githubusercontent.com/u/13690699?v=3&s=117" width="117">](https://github.com/shiravand)[<img alt="rodrigopires" src="https://avatars3.githubusercontent.com/u/1280409?v=3&s=117" width="117">](https://github.com/rodrigopires)[<img alt="TedHopp" src="https://avatars3.githubusercontent.com/u/1922606?v=3&s=117" width="117">](https://github.com/TedHopp)[<img alt="toddanglin" src="https://avatars3.githubusercontent.com/u/647319?v=3&s=117" width="117">](https://github.com/toddanglin)[<img alt="mtekp" src="https://avatars1.githubusercontent.com/u/15797101?v=3&s=117" width="117">](https://github.com/mtekp)

[<img alt="TsvetanMilanov" src="https://avatars2.githubusercontent.com/u/10463529?v=3&s=117" width="117">](https://github.com/TsvetanMilanov)[<img alt="PetyaSotirova" src="https://avatars2.githubusercontent.com/u/3065015?v=3&s=117" width="117">](https://github.com/PetyaSotirova)[<img alt="amjd" src="https://avatars2.githubusercontent.com/u/1328238?v=3&s=117" width="117">](https://github.com/amjd)[<img alt="ABoschman" src="https://avatars2.githubusercontent.com/u/8722459?v=3&s=117" width="117">](https://github.com/ABoschman)[<img alt="bensooraj" src="https://avatars2.githubusercontent.com/u/10161260?v=3&s=117" width="117">](https://github.com/bensooraj)[<img alt="bsyk" src="https://avatars1.githubusercontent.com/u/6765840?v=3&s=117" width="117">](https://github.com/bsyk)

[<img alt="CMRHDL" src="https://avatars2.githubusercontent.com/u/10167897?v=3&s=117" width="117">](https://github.com/CMRHDL)[<img alt="cameronnorman" src="https://avatars2.githubusercontent.com/u/6358632?v=3&s=117" width="117">](https://github.com/cameronnorman)[<img alt="BaronVonPerko" src="https://avatars1.githubusercontent.com/u/5384791?v=3&s=117" width="117">](https://github.com/BaronVonPerko)[<img alt="dotlens" src="https://avatars0.githubusercontent.com/u/15105420?v=3&s=117" width="117">](https://github.com/dotlens)[<img alt="ejsuncy" src="https://avatars1.githubusercontent.com/u/5944767?v=3&s=117" width="117">](https://github.com/ejsuncy)[<img alt="dennistang" src="https://avatars0.githubusercontent.com/u/247852?v=3&s=117" width="117">](https://github.com/dennistang)

[<img alt="donangel" src="https://avatars0.githubusercontent.com/u/4919119?v=3&s=117" width="117">](https://github.com/donangel)[<img alt="EvanWieland" src="https://avatars3.githubusercontent.com/u/7815990?v=3&s=117" width="117">](https://github.com/EvanWieland)[<img alt="felipebernardes" src="https://avatars0.githubusercontent.com/u/7507797?v=3&s=117" width="117">](https://github.com/felipebernardes)[<img alt="FrancoisCamus" src="https://avatars0.githubusercontent.com/u/7439901?v=3&s=117" width="117">](https://github.com/FrancoisCamus)[<img alt="gabesumner" src="https://avatars0.githubusercontent.com/u/377569?v=3&s=117" width="117">](https://github.com/gabesumner)[<img alt="hristoborisov" src="https://avatars1.githubusercontent.com/u/2996983?v=3&s=117" width="117">](https://github.com/hristoborisov)

[<img alt="n3wc" src="https://avatars3.githubusercontent.com/u/1139568?v=3&s=117" width="117">](https://github.com/n3wc)[<img alt="joshgking" src="https://avatars3.githubusercontent.com/u/3820857?v=3&s=117" width="117">](https://github.com/joshgking)[<img alt="nemephx" src="https://avatars1.githubusercontent.com/u/12735072?v=3&s=117" width="117">](https://github.com/nemephx)[<img alt="michael-martin" src="https://avatars0.githubusercontent.com/u/825998?v=3&s=117" width="117">](https://github.com/michael-martin)[<img alt="realtebo" src="https://avatars1.githubusercontent.com/u/1268699?v=3&s=117" width="117">](https://github.com/realtebo)[<img alt="MitzaCoder" src="https://avatars2.githubusercontent.com/u/11768420?v=3&s=117" width="117">](https://github.com/MitzaCoder)

[<img alt="AntonDobrev" src="https://avatars3.githubusercontent.com/u/3618710?v=3&s=117" width="117">](https://github.com/AntonDobrev)[<img alt="Razzeee" src="https://avatars1.githubusercontent.com/u/5943908?v=3&s=117" width="117">](https://github.com/Razzeee)[<img alt="SamVerschueren" src="https://avatars1.githubusercontent.com/u/1913805?v=3&s=117" width="117">](https://github.com/SamVerschueren)[<img alt="sebastianovide" src="https://avatars3.githubusercontent.com/u/1496395?v=3&s=117" width="117">](https://github.com/sebastianovide)[<img alt="shauntif" src="https://avatars0.githubusercontent.com/u/1767985?v=3&s=117" width="117">](https://github.com/shauntif)[<img alt="simmstein" src="https://avatars2.githubusercontent.com/u/520175?v=3&s=117" width="117">](https://github.com/simmstein)

[<img alt="DasAllFolks" src="https://avatars1.githubusercontent.com/u/4843949?v=3&s=117" width="117">](https://github.com/DasAllFolks)[<img alt="Taremeh" src="https://avatars3.githubusercontent.com/u/1512652?v=3&s=117" width="117">](https://github.com/Taremeh)[<img alt="tdous" src="https://avatars0.githubusercontent.com/u/505549?v=3&s=117" width="117">](https://github.com/tdous)[<img alt="e2l3n" src="https://avatars2.githubusercontent.com/u/2971483?v=3&s=117" width="117">](https://github.com/e2l3n)[<img alt="trentvb" src="https://avatars1.githubusercontent.com/u/1418656?v=3&s=117" width="117">](https://github.com/trentvb)[<img alt="VladimirAmiorkov" src="https://avatars1.githubusercontent.com/u/4989411?v=3&s=117" width="117">](https://github.com/VladimirAmiorkov)

[<img alt="weech3r" src="https://avatars3.githubusercontent.com/u/6155180?v=3&s=117" width="117">](https://github.com/weech3r)[<img alt="williamho" src="https://avatars2.githubusercontent.com/u/1883086?v=3&s=117" width="117">](https://github.com/williamho)[<img alt="Xorbert" src="https://avatars1.githubusercontent.com/u/6226676?v=3&s=117" width="117">](https://github.com/Xorbert)[<img alt="csj" src="https://avatars2.githubusercontent.com/u/5482155?v=3&s=117" width="117">](https://github.com/csj)[<img alt="narayananl23" src="https://avatars3.githubusercontent.com/u/3720723?v=3&s=117" width="117">](https://github.com/narayananl23)[<img alt="peterennis" src="https://avatars2.githubusercontent.com/u/140737?v=3&s=117" width="117">](https://github.com/peterennis)

[<img alt="saiberz" src="https://avatars1.githubusercontent.com/u/1022999?v=3&s=117" width="117">](https://github.com/saiberz)[<img alt="svalchinov" src="https://avatars3.githubusercontent.com/u/3678622?v=3&s=117" width="117">](https://github.com/svalchinov)[<img alt="tdsmithATabc" src="https://avatars2.githubusercontent.com/u/20977267?v=3&s=117" width="117">](https://github.com/tdsmithATabc)[<img alt="trevordowdle" src="https://avatars2.githubusercontent.com/u/4210581?v=3&s=117" width="117">](https://github.com/trevordowdle)[<img alt="yjaaidi" src="https://avatars1.githubusercontent.com/u/2674658?v=3&s=117" width="117">](https://github.com/yjaaidi)[<img alt="yyosifov" src="https://avatars0.githubusercontent.com/u/2012493?v=3&s=117" width="117">](https://github.com/yyosifov)

<!-- Note: The table above get generated with the following commands -->
<!-- npm install -g github-contributors-list -->
<!-- githubcontrib --owner NativeScript --repo docs --cols 6 --sortOrder desc | pbcopy -->
