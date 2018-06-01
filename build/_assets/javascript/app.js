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

function traverseAnchors(elements, level) {
    let html = "<ul>";

    elements.each((index, anchor) => {
        if (!anchor.textContent.startsWith("Example")) {
            html += `<li><a href="${anchor.hash}">${anchor.textContent}</a>`;

            html += traverseAnchors($(anchor.parentElement).nextUntil(`h${level}`, `h${level + 1}`).children("a"), level + 1);

            html += "</li>";
        }
    });

    return html + "</ul>";
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

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    };

    window.addEventListener("scroll", (e) => {
        e.target.documentElement.classList[e.target.scrollingElement.scrollTop !== 0 ? "add" : "remove"]("ns-state-scrolled");
    }, { passive: true });

    const visibleElements = [];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const tocElement = $(`.right-nav__tree [href$=${entry.target.id}]`)[0];

            if (entry.intersectionRatio < 1) {
                if (tocElement && visibleElements.length) {
                    visibleElements[entry.intersectionRect.y < entry.rootBounds.height / 2 ? "shift" : "pop"]();
                    $(`.right-nav__tree a`).removeClass("ns-state-selected");
                }
            } else if (tocElement) {
                visibleElements[entry.intersectionRect.y < entry.rootBounds.height / 2 ? "unshift" : "push"](tocElement);
                $(`.right-nav__tree a`).removeClass("ns-state-selected");
            }

            if (visibleElements[0]) {
                visibleElements[0].classList.add("ns-state-selected");
            }
        });
    }, options);

    const seeAlso = $("#see-also");
    const seeAlsoLinks = seeAlso.next("ul");

    seeAlso.remove();

    const apiReferences = $("article > p > a[href*=api-reference]");
    const rightNavLinks = $(".right-nav__links");

    const rightNav = $(`
<div class="right-nav__container">
    <input id="right-nav__toggle" class="right-nav__input" type="checkbox">
    <label for="right-nav__toggle" class="right-nav__label"></label>
    <div class="right-nav__tree">
        <div class='-allcaps'>In this article</div>
        ${traverseAnchors($("article > h2 > a"), 2)}
    </div>
</div>`)
        .insertBefore($("article"))
        .children(".right-nav__tree");

    if (seeAlsoLinks[0]) {
        rightNav
            .append($("<div class='-allcaps'>Related articles</div>"))
            .append(seeAlsoLinks);
    }

    if (apiReferences[0]) {
        apiReferences.parent().remove();

        rightNav
            .append($("<div class='-allcaps'>API Reference</div>"))
            .append(apiReferences.wrap("<li></li>").parent().wrapAll("<ul></ul>").parent());
    }

    if (rightNavLinks[0]) {
        rightNav
            .append($("<div>Not finding the help you need?</div>"))
            .append(rightNavLinks);
    }

    $(document.documentElement).on("click", () => {
        const toggle = $("#right-nav__toggle")[0];

        if (toggle) {
            toggle.checked = false;
        }
    });

    $(".right-nav__container").on("click", (e) => {
        e.stopPropagation();
    });

    $("article > h1, article > h2, article > h3").each((index, node) => {
        observer.observe(node);
    });

    const bodyObserver = new MutationObserver((entries) => {
        entries.forEach(() => {
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

