


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>NativeScript/CHANGELOG.md at master · NativeScript/NativeScript · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="NativeScript/NativeScript" name="twitter:title" /><meta content="NativeScript - Open Source framework for building cross-platform truly native iOS, Android and Windows mobile apps using JavaScript." name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/7392261?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/7392261?v=3&amp;s=400" property="og:image" /><meta content="NativeScript/NativeScript" property="og:title" /><meta content="https://github.com/NativeScript/NativeScript" property="og:url" /><meta content="NativeScript - Open Source framework for building cross-platform truly native iOS, Android and Windows mobile apps using JavaScript." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5267403E:0C0A:3E040F7:55421070" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="cQ9WmJP13b455ZCqCNp3EOwEATI83GyDMZhHP2bPg/WSVfmNjW7E2gCzlDn20DPJMyXUPCIQxbLRv8308z5YZA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-1f4e9d0de938f415dcb176615f029017dbee3475099b06749269c4933a2cb6e2.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-c824dcc050792a9b99cecf90812f90fa3f7f68c11e586f619219ab4f083b37ca.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="7efc7fbbe2b83a3141a7d73caee4f3a4">

      
  <meta name="description" content="NativeScript - Open Source framework for building cross-platform truly native iOS, Android and Windows mobile apps using JavaScript.">
  <meta name="go-import" content="github.com/NativeScript/NativeScript git https://github.com/NativeScript/NativeScript.git">

  <meta content="7392261" name="octolytics-dimension-user_id" /><meta content="NativeScript" name="octolytics-dimension-user_login" /><meta content="31492490" name="octolytics-dimension-repository_id" /><meta content="NativeScript/NativeScript" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="31492490" name="octolytics-dimension-repository_network_root_id" /><meta content="NativeScript/NativeScript" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/NativeScript/NativeScript/commits/master.atom" rel="alternate" title="Recent Commits to NativeScript:master" type="application/atom+xml">

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
      <a class="btn" href="/login?return_to=%2FNativeScript%2FNativeScript%2Fblob%2Fmaster%2FCHANGELOG.md" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/NativeScript/NativeScript/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/NativeScript/NativeScript/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
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
      <a href="/login?return_to=%2FNativeScript%2FNativeScript"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/NativeScript/NativeScript/watchers">
    243
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FNativeScript%2FNativeScript"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/NativeScript/NativeScript/stargazers">
      2,943
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2FNativeScript%2FNativeScript"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/NativeScript/NativeScript/network" class="social-count">
        155
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/NativeScript" class="url fn" itemprop="url" rel="author"><span itemprop="title">NativeScript</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/NativeScript/NativeScript" class="js-current-repository" data-pjax="#js-repo-pjax-container">NativeScript</a></strong>

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
     data-issue-count-url="/NativeScript/NativeScript/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/NativeScript/NativeScript" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /NativeScript/NativeScript">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/NativeScript/NativeScript/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /NativeScript/NativeScript/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/NativeScript/NativeScript/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /NativeScript/NativeScript/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/NativeScript/NativeScript/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /NativeScript/NativeScript/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/NativeScript/NativeScript/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /NativeScript/NativeScript/graphs">
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
           value="https://github.com/NativeScript/NativeScript.git" readonly="readonly">
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
           value="https://github.com/NativeScript/NativeScript" readonly="readonly">
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




                <a href="/NativeScript/NativeScript/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of NativeScript/NativeScript as a zip file"
                   title="Download the contents of NativeScript/NativeScript as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/NativeScript/NativeScript/blob/b8e818d41f39bacbca851ddd5513bbdd11949850/CHANGELOG.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:400ce82bb51ba99f9feb53990331fd36 -->

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
               href="/NativeScript/NativeScript/blob/ErjanGavalji/improve-template-descriptions/CHANGELOG.md"
               data-name="ErjanGavalji/improve-template-descriptions"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ErjanGavalji/improve-template-descriptions">
                ErjanGavalji/improve-template-descriptions
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/atanasovg/fix-file-system/CHANGELOG.md"
               data-name="atanasovg/fix-file-system"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="atanasovg/fix-file-system">
                atanasovg/fix-file-system
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/feature/definition-tests/CHANGELOG.md"
               data-name="feature/definition-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/definition-tests">
                feature/definition-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/feature/file-name-resolver-tests-fix/CHANGELOG.md"
               data-name="feature/file-name-resolver-tests-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/file-name-resolver-tests-fix">
                feature/file-name-resolver-tests-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/feature/fixes/CHANGELOG.md"
               data-name="feature/fixes"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/fixes">
                feature/fixes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/feature/gradient-sample/CHANGELOG.md"
               data-name="feature/gradient-sample"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/gradient-sample">
                feature/gradient-sample
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/feature/share-example/CHANGELOG.md"
               data-name="feature/share-example"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/share-example">
                feature/share-example
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/gatanasov/api-reference-update/CHANGELOG.md"
               data-name="gatanasov/api-reference-update"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gatanasov/api-reference-update">
                gatanasov/api-reference-update
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/NativeScript/NativeScript/blob/master/CHANGELOG.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/platform-specific-files/CHANGELOG.md"
               data-name="platform-specific-files"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="platform-specific-files">
                platform-specific-files
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/release/CHANGELOG.md"
               data-name="release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="release">
                release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/NativeScript/NativeScript/blob/toolbar/CHANGELOG.md"
               data-name="toolbar"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="toolbar">
                toolbar
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/NativeScript/tree/v1.0.0/CHANGELOG.md"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/NativeScript/tree/v0.10.0/CHANGELOG.md"
                 data-name="v0.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.0">v0.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/NativeScript/NativeScript/tree/v0.9.0/CHANGELOG.md"
                 data-name="v0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.0">v0.9.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/NativeScript/NativeScript/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/NativeScript/NativeScript" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">NativeScript</span></a></span></span><span class="separator">/</span><strong class="final-path">CHANGELOG.md</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@nsndeck" class="avatar" data-user="5665150" height="24" src="https://avatars1.githubusercontent.com/u/5665150?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/nsndeck" rel="contributor">nsndeck</a></span>
        <time datetime="2015-04-30T10:55:40Z" is="relative-time">Apr 30, 2015</time>
        <div class="commit-title">
            <a href="/NativeScript/NativeScript/commit/b8e818d41f39bacbca851ddd5513bbdd11949850" class="message" data-pjax="true" title="Forgotten breaking change item.">Forgotten breaking change item.</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>4</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="nsndeck" href="/NativeScript/NativeScript/commits/master/CHANGELOG.md?author=nsndeck"><img alt="@nsndeck" class="avatar" data-user="5665150" height="20" src="https://avatars3.githubusercontent.com/u/5665150?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hamorphis" href="/NativeScript/NativeScript/commits/master/CHANGELOG.md?author=hamorphis"><img alt="@hamorphis" class="avatar" data-user="1201857" height="20" src="https://avatars3.githubusercontent.com/u/1201857?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ErjanGavalji" href="/NativeScript/NativeScript/commits/master/CHANGELOG.md?author=ErjanGavalji"><img alt="@ErjanGavalji" class="avatar" data-user="84975" height="20" src="https://avatars0.githubusercontent.com/u/84975?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vakrilov" href="/NativeScript/NativeScript/commits/master/CHANGELOG.md?author=vakrilov"><img alt="@vakrilov" class="avatar" data-user="4092076" height="20" src="https://avatars3.githubusercontent.com/u/4092076?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@nsndeck" data-user="5665150" height="24" src="https://avatars1.githubusercontent.com/u/5665150?v=3&amp;s=48" width="24" />
            <a href="/nsndeck">nsndeck</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hamorphis" data-user="1201857" height="24" src="https://avatars1.githubusercontent.com/u/1201857?v=3&amp;s=48" width="24" />
            <a href="/hamorphis">hamorphis</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ErjanGavalji" data-user="84975" height="24" src="https://avatars2.githubusercontent.com/u/84975?v=3&amp;s=48" width="24" />
            <a href="/ErjanGavalji">ErjanGavalji</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vakrilov" data-user="4092076" height="24" src="https://avatars1.githubusercontent.com/u/4092076?v=3&amp;s=48" width="24" />
            <a href="/vakrilov">vakrilov</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/NativeScript/NativeScript/raw/master/CHANGELOG.md" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/NativeScript/NativeScript/blame/master/CHANGELOG.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/NativeScript/NativeScript/commits/master/CHANGELOG.md" class="btn btn-sm " rel="nofollow">History</a>
      </div>


          <button type="button" class="octicon-btn disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
            <span class="octicon octicon-pencil"></span>
          </button>

        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
    </div>

    <div class="file-info">
        41 lines (28 sloc)
        <span class="file-info-divider"></span>
      2.594 kb
    </div>
  </div>
    <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-cross-platform-modules-changelog" class="anchor" href="#cross-platform-modules-changelog" aria-hidden="true"><span class="octicon octicon-link"></span></a>Cross Platform Modules Changelog</h1>

<p>1.0.0 (2015, April 29)</p>

<h3>
<a id="user-content-new" class="anchor" href="#new" aria-hidden="true"><span class="octicon octicon-link"></span></a>New</h3>

<ul>
<li>New options for camera module. Added a resizing options along with keep-aspect-ratio options. More information about how to use it can be found at the dedicated camera help article.</li>
<li>First-file search order changed. Now package.json is searched first, then index.js and bootstrap.js is being searched last.</li>
</ul>

<h3>
<a id="user-content-fixed" class="anchor" href="#fixed" aria-hidden="true"><span class="octicon octicon-link"></span></a>Fixed</h3>

<ul>
<li>Taking a full size picture in Android with NativeScript camera module.</li>
<li>Pages no more freeze on cancelling back-navigation via swipe gesture</li>
<li>Items having verticalAlignment set to center now have correct layout bounds</li>
<li>Camera for ios no more throws a Null pointer error</li>
<li>iOS dialog OK button now appears last</li>
</ul>

<h3>
<a id="user-content-breaking-changes" class="anchor" href="#breaking-changes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Breaking changes</h3>

<ul>
<li>
<code>image-cache</code> now stores native image instances, i.e. <code>android.graphics.Bitmap</code> or <code>UIImage</code>. </li>
<li>
<code>Image.src</code> property is now of type <code>any</code> and can accept either a string containing an image url or a native image instance.</li>
<li>Gesture related enum values changed to start with a small letter in order to be consistent with all other enums within NativeScript. For example "gesturesModule.GestureType.Tap" should be used like "gesturesModule.GestureType.tap".</li>
<li>
<code>knownEvents</code> modules within all UI controls are removed and replaced with a static string values. In that case all possible events will be visible through the inheritance tree. These static strings have an <code>Event</code> suffix. At every place where <code>viewModule.knownEvents.loaded</code> is used should be changed to <code>viewModule.View.loadedEvent</code> or <code>pageModule.Page.loadedEvent</code>. This change is relevant to code-behind only (xml declaration will not be affected).</li>
</ul>

<h1>
<a id="user-content-0100-2015-april-17" class="anchor" href="#0100-2015-april-17" aria-hidden="true"><span class="octicon octicon-link"></span></a>0.10.0 (2015, April 17)</h1>

<h3>
<a id="user-content-fixed-1" class="anchor" href="#fixed-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>Fixed</h3>

<h3>
<a id="user-content-new-1" class="anchor" href="#new-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>New</h3>

<ul>
<li><p>In addition to binding converters introduced in version 0.42 static (global) place for most common converters is added. This place is named <code>application.resources</code>. More information how to use it can be found in the special help topic regarding <code>Data binding</code>.</p></li>
<li><p>Using plain objects (numbers, strings also an entire object) as binding context via <code>$value</code>. More information can be found at the dedicated <code>Data binding</code> help topic.</p></li>
</ul>

<h3>
<a id="user-content-breaking-changes-1" class="anchor" href="#breaking-changes-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>Breaking Changes</h3>

<ul>
<li>Image: <code>url</code> property renamed to <code>src</code>
</li>
<li>Image: <code>source</code> property renamed to <code>imageSource</code>
</li>
<li>TabView: <code>TabEntry</code> renamed to <code>TabViewItem</code>
</li>
<li>Module <code>local-settings</code> changed to <code>application-settings</code>. Change is just in the name of the module (API is just the same), so mandatory is only a change in the <code>require</code> statements. <code>require("local-settings")</code> should be changed to <code>require("application-settings")</code>.</li>
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
      <li>&copy; 2015 <span title="0.03717s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

