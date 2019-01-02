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

            if (node) {
                node.set("expanded", true);
                dataSource = node.children;
            }
        }

        node && node.set("selected", true);

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

function traverseAnchors(elements, level) {
    var html = "<ul>";

    elements.each(function(index, anchor) {
        if (!anchor.textContent.startsWith("Example")) {
            html += '<li><a href="' + anchor.hash + '">' + anchor.textContent + '</a>';

            html += traverseAnchors($(anchor.parentElement).nextUntil('h' + level, 'h' + (level + 1)).children("a"), level + 1);

            html += "</li>";
        }
    });

    return html + "</ul>";
}

function initNSMenu() {
    hidePanelBar();
    $(".ns-menu-trigger").addClass("-hidden");
    $("#side-nav__toggle").prop("checked", true);

    window.nsMenu.clone().kendoMenu({
        openOnClick: {
            rootMenuItems: true
        },
        closeOnClick: true,
        animation: { open: {
            effects: "fadeIn",
            duration: 100
        }}
    }).appendTo(".navigation__right");
}

function initPanelBar() {
    $(".ns-menu-trigger").removeClass("-hidden");
    $("#side-nav__toggle").prop("checked", false);

    var menu = window.nsMenu.clone();

    menu.children("li:nth-last-child(-n+2)")
        .remove()
        .wrapAll("<ul class='ns-menu'></ul>")
        .parent()
        .kendoMenu()
        .appendTo(".navigation__right");

    menu.kendoPanelBar({
            expandMode: "single"
        })
        .prependTo(".ns-navigation")
        .click(function(e) {
            e.stopPropagation();
        });
}

function initMenus(loading) {
    var menu = $(".ns-menu");
    var isLoading = loading === true;
    var isSmall = Math.min(window.innerWidth, window.outerWidth || 1024) < 1024;
    var isContextMenu = menu.hasClass("k-panelbar");
    var responsive = isContextMenu && !isSmall;

    if (isLoading || responsive || !isContextMenu && isSmall) {
        menu.each(function () {
            var menuInstance = kendo.widgetInstance($(this));

            menuInstance && menuInstance.destroy();
            menu.remove();
        });

        window[(isLoading ? !isSmall : responsive) ? "initNSMenu" : "initPanelBar"]();
    }
}

function hidePanelBar() {
    $(".k-panelbar").toggle(false);
    $(".ns-menu-trigger").removeClass("k-state-selected");

    $(document.documentElement).off("click", hidePanelBar);
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
    };

    var codeSampleExtensionMapper = {
        '.xml': 'markup',
        '.css' : 'css',
        '.js' : 'javascript',
        '.ts' : 'javascript',
    };

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

            $(this)
                .prepend("<button class='copy-button ns-button -hollow' title='Copy to clipboard'></button>")
                .wrap("<div class='ns-copy-container'></div>");
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

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    };

    window.addEventListener("scroll", function(e) {
        e.target.documentElement.classList[e.target.scrollingElement.scrollTop !== 0 ? "add" : "remove"]("ns-state-scrolled");
    }, { passive: true });

    var visibleElements = [];

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio < 1) {
                visibleElements.splice(visibleElements.indexOf(entry.target), 1);
            } else {
                visibleElements[entry.intersectionRect.y < entry.rootBounds.height ? "unshift" : "push"](entry.target);
            }
        });

        if (visibleElements[0]) {
            var topElement = { offsetTop: 9999999 };

            visibleElements.forEach(function (element) {
                if (element.offsetTop < topElement.offsetTop) {
                    topElement = element;
                }
            });

            var prevParent = $(topElement).prevAll("h2")[0];

            topElement = $('.right-nav__tree' +
                (prevParent && topElement.nodeName !== "H2" ? ' [href$="#' + prevParent.id + '"] + ul' : '')  +
                ' [href$="#' + topElement.id + '"]');

            if (topElement[0]) {
                $(".right-nav__tree a").removeClass("ns-state-selected");

                topElement.addClass("ns-state-selected");
            }
        }
    }, options);

    var seeAlso = $("#see-also");
    var seeAlsoLinks = seeAlso.next("ul");

    seeAlso.remove();

    var apiReferences = $("article > p > a[href*=api-reference]");

    if (apiReferences[0]) {
        apiReferences = $($.uniqueSort(
            apiReferences
                .clone()
                .wrapAll("<div/>")
                .parent()
                .html()
                .toString()
                .trim()
                .split(/(?=<\/a>)/i))
            .join(""));
    }

    var rightNavLinks = $(".right-nav__links");

    var rightNav = $('\
<div class="right-nav__container navigation__right__scroll">\
    <input id="right-nav__toggle" class="right-nav__input" type="checkbox">\
    <label for="right-nav__toggle" class="right-nav__label"></label>\
    <div class="right-nav__tree"></div>\
    <div class="right-nav__sizer"></div>\
</div>')
        .insertBefore($("article"))
        .children(".right-nav__tree");

    var articleAnchors = $(traverseAnchors($("article > h2 > a"), 2));

    if (articleAnchors.children()[0]) {
        rightNav
            .append($("<div class='-allcaps'>In this article</div>"))
            .append(articleAnchors);
    }

    if (seeAlsoLinks[0]) {
        rightNav
            .append($("<div class='-allcaps'>Related articles</div>"))
            .append(seeAlsoLinks);
    }

    if (apiReferences[0]) {
        apiReferences.parent().remove();

        rightNav
            .append($("<div class='-allcaps -references'>API Reference</div>"))
            .append(apiReferences.wrap("<li></li>").parent().wrapAll("<ul></ul>").parent());
    }

    if (rightNavLinks[0]) {
        rightNav
            .append($("<div>Not finding the help you need?</div>"))
            .append(rightNavLinks);
    }

    $(document.documentElement).on("click", function() {
        var toggle = $("#right-nav__toggle")[0];

        if (toggle) {
            toggle.checked = false;
        }
    });

    window.addEventListener("resize", initMenus, { passive: true });

    $(".ns-menu-trigger").on("click", function () {
        var panelbar = $(".k-panelbar");
        var shouldBeVisible = !panelbar.is(":visible");

        $(this).toggleClass("k-state-selected", shouldBeVisible);
        panelbar.toggle(shouldBeVisible);

        if (shouldBeVisible) {
            setTimeout(function () {
                $(document.documentElement).on("click", hidePanelBar);
            });
        }
    });

    $(".right-nav__container").on("click", function(e) {
        e.stopPropagation();
    });

    $("article > h2, article > h3").each(function(index, node) {
        observer.observe(node);
    });

    var bodyObserver = new MutationObserver(function(entries) {
        entries.forEach(function() {
            if (document.body.classList.contains("gsc-overflow-hidden")) {
                document.documentElement.classList.add("-overflow-hidden");
            } else {
                document.documentElement.classList.remove("-overflow-hidden");
            }
        });
    });

    bodyObserver.observe(document.body, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["class"]
    });

    $(".ns-tip-container .close-banner-button").click(function () { this.parentNode.remove(); });
});

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

// Handle ns-side-scroll
function NsSideScroll(){
    const leftNav = document.querySelector('.ns-side-nav');
    
    function handleSticky(){
        if(window.scrollY >= 110){
            leftNav.classList.add('ns-side-nav-active');
        }else{
            leftNav.classList.remove('ns-side-nav-active');
        }
    }

    window.addEventListener('scroll', handleSticky);
    
}

setTimeout(NsSideScroll, 1500);

// Handle Navigation Right Scroll 

function handleScrollNav(){
    const rightNavScroll = document.querySelector('.right-nav__container');
    const pageContent = document.querySelector('#page-article article');
    if(pageContent){
        function handleRightScroll(e){
            const distanceHeight = pageContent.getBoundingClientRect().y + 180;
            if(distanceHeight < 115){
                rightNavScroll.style.transform = "translateY(0px)";
            }else{
                rightNavScroll.style.transform = "translateY(150px)";
            }
        }

        handleRightScroll();
    };

}
window.addEventListener('load', handleScrollNav);
setTimeout(window.addEventListener('scroll', handleScrollNav), 1500);

