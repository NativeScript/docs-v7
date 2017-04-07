# NativeScript Documentation

Home of the NativeScript documentation content that lives at <http://docs.nativescript.org>. Start [contributing](#contributing) today!

* [Contributing 🍺](#contributing)
* [Branches ⤴️](#branches)
* [Configuration ⚙️](#configuration)
* [Tutorials 📖](#tutorials)
* [Contributors ❤️](#contributors)

## Contributing

The NativeScript documentation is completely open source and we love contributions. Whether you want to fix a typo, or write an entire article, the NativeScript documentation is a great way to get started contributing to an open source project.

Don’t know where to start? Check out the [list of issues with the “up-for-grabs” label](https://github.com/NativeScript/docs/issues?q=is%3Aopen+is%3Aissue+label%3Aup-for-grabs). New to git or GitHub? [Join our community Slack chat](http://developer.telerik.com/wp-login.php?action=slack-invitation) and we’ll be happy to help get you up and running.

## Branches

This repository’s two main branches are `master` and `production`.

* The `production` branch contains the version of the content that is currently deployed on docs.nativescript.org. New commits to this branch trigger a complete build that will push the changes live; therefore, only commit urgent fixes to this branch.
* The `master` branch contains the most up-to-date version of the NativeScript documentation. The contents of the `master` branch are moved into the `production` branch with NativeScript release; therefore, the `master` branch is perfect for updating the docs about yet-to-be-released versions of NativeScript, as well as trivial changes that don’t need to be deployed immediately.

When in doubt feel free to submit pull requests against either branch.
> Note: The pull request should be made in `production` branch, in case those edits are related to the current version of NativeScript and it is important to immediately publish the changes(e.g. mistakes in the code snippets, semantic errors in  the articles, etc.)

> All other pull requests related to the upcoming releases or when it is not critical for the current version, should be made in the `master` branch (e.g. article for a new feature, adding some extra information for the component or modules, etc.).

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

The NativeScript documentation contains two full getting started tutorials, one for [using NativeScript with vanilla JavaScript](https://docs.nativescript.org/tutorial/chapter-0), and another for [using NativeScript with Angular](https://docs.nativescript.org/angular/tutorial/ng-chapter-0.html). The contents of these two tutorials are in [this repository’s `/tutorial` folder](https://github.com/NativeScript/docs/tree/production/tutorial).

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

## Contributors

The following is a list of all the people that have contributed to the NativeScript documentation. Thanks for your contributions!

[<img alt="tjvantoll" src="https://avatars.githubusercontent.com/u/544280?v=3&s=117" width="117">](https://github.com/tjvantoll)[<img alt="ErjanGavalji" src="https://avatars.githubusercontent.com/u/84975?v=3&s=117" width="117">](https://github.com/ErjanGavalji)[<img alt="ns-bot" src="https://avatars.githubusercontent.com/u/8101183?v=3&s=117" width="117">](https://github.com/ns-bot)[<img alt="tsonevn" src="https://avatars.githubusercontent.com/u/17448734?v=3&s=117" width="117">](https://github.com/tsonevn)[<img alt="vakrilov" src="https://avatars.githubusercontent.com/u/4092076?v=3&s=117" width="117">](https://github.com/vakrilov)[<img alt="N3ll" src="https://avatars.githubusercontent.com/u/12541122?v=3&s=117" width="117">](https://github.com/N3ll)

[<img alt="hdeshev" src="https://avatars.githubusercontent.com/u/63219?v=3&s=117" width="117">](https://github.com/hdeshev)[<img alt="nsndeck" src="https://avatars.githubusercontent.com/u/5665150?v=3&s=117" width="117">](https://github.com/nsndeck)[<img alt="vchimev" src="https://avatars.githubusercontent.com/u/12251337?v=3&s=117" width="117">](https://github.com/vchimev)[<img alt="erikruth" src="https://avatars.githubusercontent.com/u/14181027?v=3&s=117" width="117">](https://github.com/erikruth)[<img alt="NickIliev" src="https://avatars.githubusercontent.com/u/18008302?v=3&s=117" width="117">](https://github.com/NickIliev)[<img alt="ikoevska" src="https://avatars.githubusercontent.com/u/3539221?v=3&s=117" width="117">](https://github.com/ikoevska)

[<img alt="hamorphis" src="https://avatars.githubusercontent.com/u/1201857?v=3&s=117" width="117">](https://github.com/hamorphis)[<img alt="atanasovg" src="https://avatars.githubusercontent.com/u/5878999?v=3&s=117" width="117">](https://github.com/atanasovg)[<img alt="Plamen5kov" src="https://avatars.githubusercontent.com/u/5918351?v=3&s=117" width="117">](https://github.com/Plamen5kov)[<img alt="teobugslayer" src="https://avatars.githubusercontent.com/u/5443453?v=3&s=117" width="117">](https://github.com/teobugslayer)[<img alt="tzraikov" src="https://avatars.githubusercontent.com/u/3244426?v=3&s=117" width="117">](https://github.com/tzraikov)[<img alt="ivanbuhov" src="https://avatars.githubusercontent.com/u/2405533?v=3&s=117" width="117">](https://github.com/ivanbuhov)

[<img alt="jasssonpet" src="https://avatars.githubusercontent.com/u/305639?v=3&s=117" width="117">](https://github.com/jasssonpet)[<img alt="enchev" src="https://avatars.githubusercontent.com/u/5804953?v=3&s=117" width="117">](https://github.com/enchev)[<img alt="rosen-vladimirov" src="https://avatars.githubusercontent.com/u/8351653?v=3&s=117" width="117">](https://github.com/rosen-vladimirov)[<img alt="Mitko-Kerezov" src="https://avatars.githubusercontent.com/u/6683316?v=3&s=117" width="117">](https://github.com/Mitko-Kerezov)[<img alt="boevski" src="https://avatars.githubusercontent.com/u/10432616?v=3&s=117" width="117">](https://github.com/boevski)[<img alt="dtopuzov" src="https://avatars.githubusercontent.com/u/6651651?v=3&s=117" width="117">](https://github.com/dtopuzov)

[<img alt="roblav96" src="https://avatars.githubusercontent.com/u/1457327?v=3&s=117" width="117">](https://github.com/roblav96)[<img alt="tailsu" src="https://avatars.githubusercontent.com/u/730130?v=3&s=117" width="117">](https://github.com/tailsu)[<img alt="dmccuskey" src="https://avatars.githubusercontent.com/u/933841?v=3&s=117" width="117">](https://github.com/dmccuskey)[<img alt="sipacate" src="https://avatars.githubusercontent.com/u/1827394?v=3&s=117" width="117">](https://github.com/sipacate)[<img alt="PanayotCankov" src="https://avatars.githubusercontent.com/u/5919275?v=3&s=117" width="117">](https://github.com/PanayotCankov)[<img alt="getsetbro" src="https://avatars.githubusercontent.com/u/442793?v=3&s=117" width="117">](https://github.com/getsetbro)

[<img alt="Pip3r4o" src="https://avatars.githubusercontent.com/u/10464986?v=3&s=117" width="117">](https://github.com/Pip3r4o)[<img alt="bradmartin" src="https://avatars.githubusercontent.com/u/6006148?v=3&s=117" width="117">](https://github.com/bradmartin)[<img alt="burkeholland" src="https://avatars.githubusercontent.com/u/686963?v=3&s=117" width="117">](https://github.com/burkeholland)[<img alt="jbristowe" src="https://avatars.githubusercontent.com/u/71493?v=3&s=117" width="117">](https://github.com/jbristowe)[<img alt="Lampei" src="https://avatars.githubusercontent.com/u/104018?v=3&s=117" width="117">](https://github.com/Lampei)[<img alt="sis0k0" src="https://avatars.githubusercontent.com/u/7893485?v=3&s=117" width="117">](https://github.com/sis0k0)

[<img alt="alejonext" src="https://avatars.githubusercontent.com/u/1652887?v=3&s=117" width="117">](https://github.com/alejonext)[<img alt="bsyk" src="https://avatars.githubusercontent.com/u/6765840?v=3&s=117" width="117">](https://github.com/bsyk)[<img alt="fdnhkj" src="https://avatars.githubusercontent.com/u/5569608?v=3&s=117" width="117">](https://github.com/fdnhkj)[<img alt="hshristov" src="https://avatars.githubusercontent.com/u/5966717?v=3&s=117" width="117">](https://github.com/hshristov)[<img alt="rodrigopires" src="https://avatars.githubusercontent.com/u/1280409?v=3&s=117" width="117">](https://github.com/rodrigopires)[<img alt="toddanglin" src="https://avatars.githubusercontent.com/u/647319?v=3&s=117" width="117">](https://github.com/toddanglin)

[<img alt="jlooper" src="https://avatars.githubusercontent.com/u/1450004?v=3&s=117" width="117">](https://github.com/jlooper)[<img alt="mtekp" src="https://avatars.githubusercontent.com/u/15797101?v=3&s=117" width="117">](https://github.com/mtekp)[<img alt="TsvetanMilanov" src="https://avatars.githubusercontent.com/u/10463529?v=3&s=117" width="117">](https://github.com/TsvetanMilanov)[<img alt="realtebo" src="https://avatars.githubusercontent.com/u/1268699?v=3&s=117" width="117">](https://github.com/realtebo)[<img alt="alexziskind1" src="https://avatars.githubusercontent.com/u/1638579?v=3&s=117" width="117">](https://github.com/alexziskind1)[<img alt="AntonDobrev" src="https://avatars.githubusercontent.com/u/3618710?v=3&s=117" width="117">](https://github.com/AntonDobrev)

[<img alt="ABoschman" src="https://avatars.githubusercontent.com/u/8722459?v=3&s=117" width="117">](https://github.com/ABoschman)[<img alt="bensooraj" src="https://avatars.githubusercontent.com/u/10161260?v=3&s=117" width="117">](https://github.com/bensooraj)[<img alt="ejsuncy" src="https://avatars.githubusercontent.com/u/5944767?v=3&s=117" width="117">](https://github.com/ejsuncy)[<img alt="dennistang" src="https://avatars.githubusercontent.com/u/247852?v=3&s=117" width="117">](https://github.com/dennistang)[<img alt="donangel" src="https://avatars.githubusercontent.com/u/4919119?v=3&s=117" width="117">](https://github.com/donangel)[<img alt="pelegri" src="https://avatars.githubusercontent.com/u/416560?v=3&s=117" width="117">](https://github.com/pelegri)

[<img alt="EvanWieland" src="https://avatars.githubusercontent.com/u/7815990?v=3&s=117" width="117">](https://github.com/EvanWieland)[<img alt="FrancoisCamus" src="https://avatars.githubusercontent.com/u/7439901?v=3&s=117" width="117">](https://github.com/FrancoisCamus)[<img alt="gabesumner" src="https://avatars.githubusercontent.com/u/377569?v=3&s=117" width="117">](https://github.com/gabesumner)[<img alt="gbhojraj" src="https://avatars.githubusercontent.com/u/5335826?v=3&s=117" width="117">](https://github.com/gbhojraj)[<img alt="hristoborisov" src="https://avatars.githubusercontent.com/u/2996983?v=3&s=117" width="117">](https://github.com/hristoborisov)[<img alt="n3wc" src="https://avatars.githubusercontent.com/u/1139568?v=3&s=117" width="117">](https://github.com/n3wc)

[<img alt="joshgking" src="https://avatars.githubusercontent.com/u/3820857?v=3&s=117" width="117">](https://github.com/joshgking)[<img alt="digitaldrummerj" src="https://avatars.githubusercontent.com/u/708423?v=3&s=117" width="117">](https://github.com/digitaldrummerj)[<img alt="nemephx" src="https://avatars.githubusercontent.com/u/12735072?v=3&s=117" width="117">](https://github.com/nemephx)[<img alt="zh-m" src="https://avatars.githubusercontent.com/u/17438369?v=3&s=117" width="117">](https://github.com/zh-m)[<img alt="amjd" src="https://avatars.githubusercontent.com/u/1328238?v=3&s=117" width="117">](https://github.com/amjd)[<img alt="shiravand" src="https://avatars.githubusercontent.com/u/13690699?v=3&s=117" width="117">](https://github.com/shiravand)

[<img alt="bel3atar" src="https://avatars.githubusercontent.com/u/2218261?v=3&s=117" width="117">](https://github.com/bel3atar)[<img alt="SamVerschueren" src="https://avatars.githubusercontent.com/u/1913805?v=3&s=117" width="117">](https://github.com/SamVerschueren)[<img alt="simmstein" src="https://avatars.githubusercontent.com/u/520175?v=3&s=117" width="117">](https://github.com/simmstein)[<img alt="DasAllFolks" src="https://avatars.githubusercontent.com/u/4843949?v=3&s=117" width="117">](https://github.com/DasAllFolks)[<img alt="Taremeh" src="https://avatars.githubusercontent.com/u/1512652?v=3&s=117" width="117">](https://github.com/Taremeh)[<img alt="TedHopp" src="https://avatars.githubusercontent.com/u/1922606?v=3&s=117" width="117">](https://github.com/TedHopp)

[<img alt="e2l3n" src="https://avatars.githubusercontent.com/u/2971483?v=3&s=117" width="117">](https://github.com/e2l3n)[<img alt="trentvb" src="https://avatars.githubusercontent.com/u/1418656?v=3&s=117" width="117">](https://github.com/trentvb)[<img alt="VladimirAmiorkov" src="https://avatars.githubusercontent.com/u/4989411?v=3&s=117" width="117">](https://github.com/VladimirAmiorkov)[<img alt="williamho" src="https://avatars.githubusercontent.com/u/1883086?v=3&s=117" width="117">](https://github.com/williamho)[<img alt="Xorbert" src="https://avatars.githubusercontent.com/u/6226676?v=3&s=117" width="117">](https://github.com/Xorbert)[<img alt="narayananl23" src="https://avatars.githubusercontent.com/u/3720723?v=3&s=117" width="117">](https://github.com/narayananl23)

[<img alt="peterennis" src="https://avatars.githubusercontent.com/u/140737?v=3&s=117" width="117">](https://github.com/peterennis)[<img alt="saiberz" src="https://avatars.githubusercontent.com/u/1022999?v=3&s=117" width="117">](https://github.com/saiberz)[<img alt="svalchinov" src="https://avatars.githubusercontent.com/u/3678622?v=3&s=117" width="117">](https://github.com/svalchinov)[<img alt="trevordowdle" src="https://avatars.githubusercontent.com/u/4210581?v=3&s=117" width="117">](https://github.com/trevordowdle)[<img alt="yjaaidi" src="https://avatars.githubusercontent.com/u/2674658?v=3&s=117" width="117">](https://github.com/yjaaidi)[<img alt="yyosifov" src="https://avatars.githubusercontent.com/u/2012493?v=3&s=117" width="117">](https://github.com/yyosifov)

<!-- Note: The table above get generated with the following commands -->
<!-- npm install -g github-contributors-list -->
<!-- githubcontrib --owner NativeScript --repo docs --cols 6 --sortOrder desc | pbcopy -->
