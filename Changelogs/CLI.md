


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>nativescript-cli/CHANGELOG.md at master · NativeScript/nativescript-cli · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="NativeScript/nativescript-cli" name="twitter:title" /><meta content="nativescript-cli - Command-line interface for building NativeScript apps" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/7392261?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/7392261?v=3&amp;s=400" property="og:image" /><meta content="NativeScript/nativescript-cli" property="og:title" /><meta content="https://github.com/NativeScript/nativescript-cli" property="og:url" /><meta content="nativescript-cli - Command-line interface for building NativeScript apps" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5267403E:0C07:22596B1:55421071" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="LNXzUIr7qrBEH6oRACarNv4iKPWxQQl5fBxFpTXLbSqGENgj1JgglxcACXO1WBGKT9FFE0/qq10zyEDUgVd4cw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-1f4e9d0de938f415dcb176615f029017dbee3475099b06749269c4933a2cb6e2.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-c824dcc050792a9b99cecf90812f90fa3f7f68c11e586f619219ab4f083b37ca.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="7efc7fbbe2b83a3141a7d73caee4f3a4">

      
  <meta name="description" content="nativescript-cli - Command-line interface for building NativeScript apps">
  <meta name="go-import" content="github.com/NativeScript/nativescript-cli git https://github.com/NativeScript/nativescript-cli.git">

  <meta content="7392261" name="octolytics-dimension-user_id" /><meta content="NativeScript" name="octolytics-dimension-user_login" /><meta content="21347346" name="octolytics-dimension-repository_id" /><meta content="NativeScript/nativescript-cli" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="21347346" name="octolytics-dimension-repository_network_root_id" /><meta content="NativeScript/nativescript-cli" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/NativeScript/nativescript-cli/commits/master.atom" rel="alternate" title="Recent Commits to nativescript-cli:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        
        <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2FNativeScript%2Fnativescript-cli%2Fblob%2Fmaster%2FCHANGELOG.md" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/NativeScript/nativescript-cli/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/NativeScript/nativescript-cli/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2FNativeScript%2Fnativescript-cli"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/NativeScript/nativescript-cli/watchers">
    61
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FNativeScript%2Fnativescript-cli"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/NativeScript/nativescript-cli/stargazers">
      262
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2FNativeScript%2Fnativescript-cli"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/NativeScript/nativescript-cli/network" class="social-count">
        38
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/NativeScript" class="url fn" itemprop="url" rel="author"><span itemprop="title">NativeScript</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/NativeScript/nativescript-cli" class="js-current-repository" data-pjax="#js-repo-pjax-container">nativescript-cli</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/NativeScript/nativescript-cli/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/NativeScript/nativescript-cli" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /NativeScript/nativescript-cli">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/NativeScript/nativescript-cli/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /NativeScript/nativescript-cli/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/NativeScript/nativescript-cli/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /NativeScript/nativescript-cli/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/NativeScript/nativescript-cli/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /NativeScript/nativescript-cli/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/NativeScript/nativescript-cli/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /NativeScript/nativescript-cli/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/NativeScript/nativescript-cli/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /NativeScript/nativescript-cli/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/NativeScript/nativescript-cli.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/NativeScript/nativescript-cli" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>




                <a href="/NativeScript/nativescript-cli/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of NativeScript/nativescript-cli as a zip file"
                   title="Download the contents of NativeScript/nativescript-cli as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/NativeScript/nativescript-cli/blob/a1869ae2a6e04354c07c3b820299911c9faa27e2/CHANGELOG.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cf6da64e5ffd40b8c506f00da269ef9c -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/ProxyGenerator/CHANGELOG.md"
               data-name="ProxyGenerator"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ProxyGenerator">
                ProxyGenerator
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/buhov/remove-metadata-generation-on-library-add/CHANGELOG.md"
               data-name="buhov/remove-metadata-generation-on-library-add"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="buhov/remove-metadata-generation-on-library-add">
                buhov/remove-metadata-generation-on-library-add
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/cankov/debug-brk/CHANGELOG.md"
               data-name="cankov/debug-brk"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cankov/debug-brk">
                cankov/debug-brk
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/cankov/ios-debug-emulator/CHANGELOG.md"
               data-name="cankov/ios-debug-emulator"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cankov/ios-debug-emulator">
                cankov/ios-debug-emulator
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/cankov/locally-installed/CHANGELOG.md"
               data-name="cankov/locally-installed"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cankov/locally-installed">
                cankov/locally-installed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/famte/update-to-latest-common/CHANGELOG.md"
               data-name="famte/update-to-latest-common"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="famte/update-to-latest-common">
                famte/update-to-latest-common
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/1/CHANGELOG.md"
               data-name="fatme/1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/1">
                fatme/1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/fix-appid-inconsistent/CHANGELOG.md"
               data-name="fatme/fix-appid-inconsistent"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/fix-appid-inconsistent">
                fatme/fix-appid-inconsistent
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/improve-commands/CHANGELOG.md"
               data-name="fatme/improve-commands"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/improve-commands">
                fatme/improve-commands
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/ios-debugging/CHANGELOG.md"
               data-name="fatme/ios-debugging"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/ios-debugging">
                fatme/ios-debugging
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/new-analytics-sdk/CHANGELOG.md"
               data-name="fatme/new-analytics-sdk"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/new-analytics-sdk">
                fatme/new-analytics-sdk
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/npm-as-package-manager/CHANGELOG.md"
               data-name="fatme/npm-as-package-manager"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/npm-as-package-manager">
                fatme/npm-as-package-manager
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/ns-release-1.0.0/CHANGELOG.md"
               data-name="fatme/ns-release-1.0.0"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/ns-release-1.0.0">
                fatme/ns-release-1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/prepare-project-before-building/CHANGELOG.md"
               data-name="fatme/prepare-project-before-building"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/prepare-project-before-building">
                fatme/prepare-project-before-building
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/respect-app-resources-on-prepare/CHANGELOG.md"
               data-name="fatme/respect-app-resources-on-prepare"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/respect-app-resources-on-prepare">
                fatme/respect-app-resources-on-prepare
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/fatme/specify-version-to-update/CHANGELOG.md"
               data-name="fatme/specify-version-to-update"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fatme/specify-version-to-update">
                fatme/specify-version-to-update
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/ikoevska/autocomplete/CHANGELOG.md"
               data-name="ikoevska/autocomplete"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ikoevska/autocomplete">
                ikoevska/autocomplete
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/ikoevska/debug-and-node12/CHANGELOG.md"
               data-name="ikoevska/debug-and-node12"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ikoevska/debug-and-node12">
                ikoevska/debug-and-node12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/ikoevska/new-sys-reqs/CHANGELOG.md"
               data-name="ikoevska/new-sys-reqs"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ikoevska/new-sys-reqs">
                ikoevska/new-sys-reqs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/ikoevska/unsafe-perm/CHANGELOG.md"
               data-name="ikoevska/unsafe-perm"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ikoevska/unsafe-perm">
                ikoevska/unsafe-perm
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/NativeScript/nativescript-cli/blob/master/CHANGELOG.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/node-analytics-ns/CHANGELOG.md"
               data-name="node-analytics-ns"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="node-analytics-ns">
                node-analytics-ns
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/release/CHANGELOG.md"
               data-name="release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="release">
                release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/slavchev/update-metadata-generator/CHANGELOG.md"
               data-name="slavchev/update-metadata-generator"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="slavchev/update-metadata-generator">
                slavchev/update-metadata-generator
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/100/CHANGELOG.md"
               data-name="totev/100"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/100">
                totev/100
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/100changelog/CHANGELOG.md"
               data-name="totev/100changelog"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/100changelog">
                totev/100changelog
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/100rc/CHANGELOG.md"
               data-name="totev/100rc"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/100rc">
                totev/100rc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/android-emu-google-release/CHANGELOG.md"
               data-name="totev/android-emu-google-release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/android-emu-google-release">
                totev/android-emu-google-release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/bash-completion-prompt/CHANGELOG.md"
               data-name="totev/bash-completion-prompt"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/bash-completion-prompt">
                totev/bash-completion-prompt
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/improve-warnings/CHANGELOG.md"
               data-name="totev/improve-warnings"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/improve-warnings">
                totev/improve-warnings
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/improve-warnings2/CHANGELOG.md"
               data-name="totev/improve-warnings2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/improve-warnings2">
                totev/improve-warnings2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/java-release/CHANGELOG.md"
               data-name="totev/java-release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/java-release">
                totev/java-release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/metadata-speedup/CHANGELOG.md"
               data-name="totev/metadata-speedup"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/metadata-speedup">
                totev/metadata-speedup
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/metadata-speedup-release/CHANGELOG.md"
               data-name="totev/metadata-speedup-release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/metadata-speedup-release">
                totev/metadata-speedup-release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/remove-adb-warning/CHANGELOG.md"
               data-name="totev/remove-adb-warning"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/remove-adb-warning">
                totev/remove-adb-warning
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/sysinfo/CHANGELOG.md"
               data-name="totev/sysinfo"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/sysinfo">
                totev/sysinfo
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/sysinfo2/CHANGELOG.md"
               data-name="totev/sysinfo2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/sysinfo2">
                totev/sysinfo2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/totev/ts/CHANGELOG.md"
               data-name="totev/ts"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="totev/ts">
                totev/ts
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/nativescript-cli/blob/vladimirov/proxy-test/CHANGELOG.md"
               data-name="vladimirov/proxy-test"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="vladimirov/proxy-test">
                vladimirov/proxy-test
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v1.0.0/CHANGELOG.md"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.10.0/CHANGELOG.md"
                 data-name="v0.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.0">v0.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.4.2/CHANGELOG.md"
                 data-name="v0.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.4.2">v0.4.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.3.1/CHANGELOG.md"
                 data-name="v0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.3.1">v0.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.3.0/CHANGELOG.md"
                 data-name="v0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.3.0">v0.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.2.0/CHANGELOG.md"
                 data-name="v0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.0">v0.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.1.7/CHANGELOG.md"
                 data-name="v0.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.7">v0.1.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.1.6/CHANGELOG.md"
                 data-name="v0.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.6">v0.1.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.1.3/CHANGELOG.md"
                 data-name="v0.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.3">v0.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/v0.1.2/CHANGELOG.md"
                 data-name="v0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.2">v0.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/nativescript-cli/tree/0.4.0/CHANGELOG.md"
                 data-name="0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.0">0.4.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/NativeScript/nativescript-cli/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/NativeScript/nativescript-cli" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">nativescript-cli</span></a></span></span><span class="separator">/</span><strong class="final-path">CHANGELOG.md</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@ikoevska" class="avatar" data-user="3539221" height="24" src="https://avatars3.githubusercontent.com/u/3539221?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/ikoevska" rel="contributor">ikoevska</a></span>
        <time datetime="2015-03-18T14:01:27Z" is="relative-time">Mar 18, 2015</time>
        <div class="commit-title">
            <a href="/NativeScript/nativescript-cli/commit/b42ac1fa064eec7c33571c04992d1d80ebf15379" class="message" data-pjax="true" title="Changelog for 0.9.4">Changelog for 0.9.4</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@ikoevska" data-user="3539221" height="24" src="https://avatars3.githubusercontent.com/u/3539221?v=3&amp;s=48" width="24" />
            <a href="/ikoevska">ikoevska</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/NativeScript/nativescript-cli/raw/master/CHANGELOG.md" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/NativeScript/nativescript-cli/blame/master/CHANGELOG.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/NativeScript/nativescript-cli/commits/master/CHANGELOG.md" class="btn btn-sm " rel="nofollow">History</a>
      </div>


          <button type="button" class="octicon-btn disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
            <span class="octicon octicon-pencil"></span>
          </button>

        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
    </div>

    <div class="file-info">
        30 lines (19 sloc)
        <span class="file-info-divider"></span>
      1.691 kb
    </div>
  </div>
    <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-nativescript-cli-changelog" class="anchor" href="#nativescript-cli-changelog" aria-hidden="true"><span class="octicon octicon-link"></span></a>NativeScript CLI Changelog</h1>

<h1>
<a id="user-content-094-2015-march-18" class="anchor" href="#094-2015-march-18" aria-hidden="true"><span class="octicon octicon-link"></span></a>0.9.4 (2015, March 18)</h1>

<h3>
<a id="user-content-fixed" class="anchor" href="#fixed" aria-hidden="true"><span class="octicon octicon-link"></span></a>Fixed</h3>

<ul>
<li>
<a href="https://github.com/NativeScript/nativescript-cli/issues/348">Fixed #348</a>: <code>tns platform add ios</code> downloads the latest experimental version of the ios runtime instead of the latest stable version.</li>
</ul>

<h1>
<a id="user-content-093-2015-march-18" class="anchor" href="#093-2015-march-18" aria-hidden="true"><span class="octicon octicon-link"></span></a>0.9.3 (2015, March 18)</h1>

<h3>
<a id="user-content-fixed-1" class="anchor" href="#fixed-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>Fixed</h3>

<ul>
<li>
<a href="https://github.com/NativeScript/nativescript-cli/issues/312">Fixed #312</a>: <code>tns platform add ios</code> does not preserve your app ID, if not default.</li>
</ul>

<h1>
<a id="user-content-092-2015-march-17" class="anchor" href="#092-2015-march-17" aria-hidden="true"><span class="octicon octicon-link"></span></a>0.9.2 (2015, March 17)</h1>

<h3>
<a id="user-content-new" class="anchor" href="#new" aria-hidden="true"><span class="octicon octicon-link"></span></a>New</h3>

<ul>
<li>
<a href="https://github.com/NativeScript/nativescript-cli/issues/305">Implemented #305</a>, <a href="https://github.com/NativeScript/nativescript-cli/issues/322">#322</a>: You can quickly add or update your platform runtime to a specific version by running <code>tns platform update platform@version</code><br>For example: <code>tns platform update ios@0.9.2-beta</code><br>The NativeScript team will publish experimental support for the latest versions of iOS and Android.<br>To list all available versions for android, run $ npm view tns-android versions<br>To list only experimental versions for android, run $ npm view tns-android dist-tags
To list all available versions for ios, run $ npm view tns-ios versions<br>To list only experimental versions for ios, run $ npm view tns-ios dist-tags </li>
<li>
<a href="https://github.com/NativeScript/nativescript-cli/issues/302">Implemented #302</a>: You can configure proxy settings for the NativeScript CLI.</li>
</ul>

<h3>
<a id="user-content-fixed-2" class="anchor" href="#fixed-2" aria-hidden="true"><span class="octicon octicon-link"></span></a>Fixed</h3>

<ul>
<li>
<a href="https://github.com/NativeScript/nativescript-cli/issues/299">Fixed #299</a>: You cannot build the default <code>Hello World</code> app for Android on OS X systems.</li>
<li>
<a href="https://github.com/NativeScript/nativescript-cli/issues/297">Fixed #297</a>: You cannot install the NativeScript CLI.</li>
</ul>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.03518s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2c8ae50712a47d2b83d740cb875d55cdbbb3fdbccf303951cc6b7e63731e0c38.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-d719016cdd96ecc8c9af5369a38f86aa56d6ddf33e3a1a56279f23456d49c801.js"></script>
      
      


  </body>
</html>

