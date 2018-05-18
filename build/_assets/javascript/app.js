function expandNavigation(url) {
    return function(e) {
        if (e.node) {
            return;
        }
        var segments = url.split("/");
        var page = segments[segments.length - 1];
        var treeview = this;

        var dataSource = this.dataSource;
        var node;

        for (var idx = 0; idx < segments.length; idx++) {
            node = dataSource.get(segments[idx]);
            node.set("expanded", true);
            dataSource = node.children;
        }

        node.set("selected", true);

        this.unbind("dataBound", arguments.callee);
    }
}

function navigationTemplate(root) {
    return function(data) {
        var item = data.item;
        var text = item.text;

        if (item.hasChildren) {
            return text;
        }

        var url = item.path;

        if (location.pathname.indexOf(".html") < 0) {
            url = url.replace(".html", "");
        }

        while (item = item.parentNode()) {
            url = item.path + "/" + url;
        }

        return '<a href="' + root + url + '">' + text + "</a>";
    }
}

function preventParentSelection(e) {
    if (this.dataItem(e.node).hasChildren) {
        e.preventDefault();
        this.toggle(e.node);
    }
}

$(function(){

    $("pre[lang]").each(function() {
       if (this.parentNode.className.indexOf("k-content") >= 0) {
           return;
       }

       var langs = $(this).nextUntil(":not(pre)", "pre").add(this);

       var tabs = $.map(langs, function(item) {
          return $("<li>").text($(item).attr("lang"));
       });

       // No need for tabs if there's only one tab
       if (tabs.length == 1) {
          return;
       }

       tabs[0].addClass("k-state-active");

       var tabstrip = $("<div class='nd-code-container'>")
                       .insertBefore(this)
                       .append($("<ul>").append(tabs))
                       .append(langs);

       langs.wrap("<div>");

       tabstrip.kendoTabStrip({
           animation: {
               open: {
                   effects: "fadeIn"
               }
           }
       });
    });

    var codeSampleMapper = {
        'c#': 'clike',
        'appbuilder' : 'javascript',
        'javascript' : 'javascript',
        'typescript' : 'javascript',
        'c++' : 'clike',
        'c' : 'clike',
        'css' : 'css',
        'objective-c' : 'clike',
        'java' : 'clike',
        'xml' : 'markup'
    }

    var codeSampleExtensionMapper = {
        '.xml': 'markup',
        '.css' : 'css',
        '.js' : 'javascript',
        '.ts' : 'javascript',
    }

    // Enable Prism support by mapping the lang attributes to the language-* attribute Prim expects
    $("pre").each(function(index){
        var lang = $(this).attr('lang') ? $(this).attr('lang').toLowerCase() : "";
        var langExtension = codeSampleMapper[lang];
        if(!langExtension) {
            // No language found - check for file extension.
            for (ext in codeSampleExtensionMapper){
                if (lang.lastIndexOf(ext, lang.length - ext.length) >= 0) {
                    langExtension = codeSampleExtensionMapper[ext];
                    break;
                }
            }
        }
        if (!langExtension) {
            // If still no language found, check if the first character is a “<”.
            // If it is, assume markup.
            if ($(this).text().charAt(0) === "<") {
                langExtension = "markup";
            }
        }
        $(this).addClass('language-' + langExtension);
    });
    Prism.highlightAll();

    // Build the exercise sections
    $(".exercise-start").each(function() {
        var exerciseDiv = $("<div class='exercise'></div>");
        $(this).before(exerciseDiv);
        $(this).nextUntil(".exercise-end").addBack().appendTo(exerciseDiv);
    });
    $(".exercise-end").remove();

    // Detecting clipboard support without UA sniffing is basically impossible
    // at the moment. See https://gist.github.com/jonrohan/81085b119d16cdd7868a.
    // Edge, Chrome, and Firefox support the API but Safari does not.
    // (Edge hits this if test because it has “Chrome” in its user agent string).
    if (navigator.userAgent.match(/(Chrome|Firefox)/)) {
        // Add copy buttons to all pre tags in exercises
        $(".exercise pre, .add-copy-button").each(function() {
            // Pre tags in exercises can remove the code button by including a div
            // with the no-copy-button class name before them.
            if ($(this).prev().hasClass("no-copy-button")) {
                return;
            }
            $(this).prepend("<button class='copy-button' title='Copy to clipboard'>Copy</button>");
        });
    }

    // Add copy-to-clipboard behavior to the copy buttons.
    // See https://developers.google.com/web/updates/2015/04/cut-and-copy-commands?hl=en
    $(".copy-button").on("click", function() {
        window.getSelection().removeAllRanges();
        var codeElement = $(this).parent().find("code")[0];
        var range = document.createRange();
        range.selectNode(codeElement);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        $(this).blur();
    });

    $("#markdown-toc").each(function() {
        var ul = $("<ul>");

        $("#page-article h2").each(function() {
            var h2 = $(this);

            if (!/fields|configuration|properties|events|methods/i.test(h2.text())) {
                return;
            }

            $("<li>")
                .addClass("section")
                .append(h2.children().clone())
                .appendTo(ul)
                .mouseenter(function() {
                    var children = $(this).children("ul");

                    if (!children.length) {
                        children = $("<ul>");

                        h2.nextUntil("h2").filter("h3").each(function(){
                            $("<li>").append($(this).children().clone()).appendTo(children);
                        });

                        if (children.children().length) {
                            children.appendTo(this);
                        }
                    }

                    children.show();
                })
                .mouseleave(function() {
                    $(this).children("ul").hide();
                });
        });

        ul.appendTo(this);
    });
});

//$(function() {
//    $(document.body)
//        .on("click", ".hamb", function(e) {
//            e.preventDefault();
//            $("#page-nav").toggleClass("expanded");
//        })
//        .kendoTouch({
//            tap: function(e) {
//                var navigation = $("#page-nav");
//                if (!$.contains(navigation[0], e.target)) {
//                    navigation.removeClass("expanded");
//                }
//            }
//        });
//});

$(function() {
    'use strict';
    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";

        document.cookie = name+"="+value+expires+"; path=/";

    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var banner = $('.tip-container');
    var close = $('.tip-close');
    var cookieName = 'ns-banner2-seen';
    var hasCookie = readCookie(cookieName);

    function onBannerClose() {
        banner.slideUp('fast');
        createCookie(cookieName, true, 1);
        return false;
    }

    function handleBanner() {
        if (!hasCookie) {
            banner.slideDown('fast');
            close.on('click.tip', onBannerClose);
        }
    }

    window.setTimeout(handleBanner, 1000);
});

$(function() {
  'use strict';

  var $searchBtn = $('.Search-open');
  var $searchBar = $('.Search-container');
  var $searchCancel = $('.Btn--cancel');
  var $navLinks = $('.Nav-menu .-fl');
  var $navLinksMobileToggle = $('.Nav-open-menu');

  // improve menu
  $navLinks.find('a').each(function() {
    if ($(this).attr('href') === document.location.pathname) {
      $(this).addClass('is-current');
    }
  });

  // show search menu
  $searchBtn.on('click', function() {
    $searchBtn.toggleClass('is-active');
    $searchBar.toggle();
    $('[name=search]').first().focus();
    // hide nav when opening search
    $navLinks.removeClass('is-visible');
    $navLinksMobileToggle.removeClass('is-active');
  });
  $searchCancel.on('click', function() {
    $searchBar.toggle();
    $searchBtn.toggleClass('is-active');
  });

  // show mobile menu
  $navLinksMobileToggle.on('click', function() {
    $(this).toggleClass('is-active');
    $navLinks.toggleClass('is-visible');
    // hide search when opening nav
    $searchBar.hide();
    $searchBtn.removeClass('is-active');
  });
});

