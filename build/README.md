# Documentation Base

This repository contains the common infrastructure for building markdown documentation with [Jekyll](http://jekyllrb.com/).

## Some Jekyll info

Jekyll is a tool for creating static html web sites. It supports markdown which makes it a good fit for our needs. It is also highly customizable which makes delivering new documentation features a breeze.

### Jekyll Directory structure

#### _assets

Contains CSS and JavaScript files.

#### _includes

Contains common include files used by the layout pages. Not included in the final output in the `_site` directory.

#### _layouts

The layout pages used by the documentation site. They define the common HTML which contains navigation, search and other common UI. Not included in the final output.

#### _plugins

Contains [Jekyll plugins](http://jekyllrb.com/docs/plugins/) (Ruby classes) which are needed for producing the final output. Not included in the final output. 

#### Markdown includes

You can include Markdown files in other Markdown files using the special `!!include(someotherfile.md)` syntax. Useful when building up large pages or reusing content.

#### images

Contains images used in the web site.

#### fonts

Custom fonts used in the web site.

The following plugins are currently available:

* breadcrumb.rb - renders breadcrumb navigation
* markdown_processor.rb - creates HTML from Markdown using [html-pipeline](https://github.com/jch/html-pipeline). We are not using the default markdown conversion as we need to tweak the output to our needs.
* navigation_generator.rb - creates a JSON TOC file used for the left-hand treeview navigation.
* redirect_generator.rb - creates IIS redirect rules in the `web.config` to handle the `previous_url` attribute. 
* sitemap_generator.rb - creates sitemap.xml which is used by search engines for crawling.
* slug.rb - gets the URL of a help article from its slug.

#### assets

Contains CSS, JavaScript and image files used by the documentation. Included in the final output.

### Which files from the common documentation repository can be changed?

Any file can be changed per your requirements. However you will have to handle merge conflicts once you need to update to the latest documentation base changes. The following files are likely to be customized:

* _layouts/index.html
* _layouts/page.html
* assets/css/styles.css
* _config.yml

## Writing markdown documents

### Files and directories

You can organize your help topics in directories. The directory and filename will determine the final url of your topic. For example `getting-started/introduction.md` will lead to `getting-started/introduction`

### Markdown content

Your markdown file must start with the so called "front matter". This is some metadata used by jekyll and the documentation. Here is an example.

         ---
         title: Getting started
         page_title: Getting started with Kendo UI
         description: Installation and getting started instructions for Kendo UI
         position: 0
         slug: getting-started
         previous_url: /introduction/start
         ---

The supported attributes are:

#### title (required)

Determines the text displayed in the TOC navigation (the treeview in the left).

#### page_title (optional but recommended)

The contents of the `<title>` in the final output. If `page_title` is not set the value of `title` is usded. Blade name was `meta_title`.

#### description (optional but recommended)

Used to set the contents of the `<meta name="description">` in the final output. Improves SEO. Blade name was  `meta_description`.

#### position (optional)

The position this document will appear at in the TOC navigation. Blade name was `ordinal`.

#### slug (optional)

The optional unique identifier of the page. Can be used to link to the current page `[Getting-started]({% slug getting-started%})`

#### previous_url

The previous URL of this page. Used to create IIS redirect rules in `web.config`. Supports comma separated values if there is more than one previous url `previous_url: /foo/bar, /bar/foo`.

### Customizing the TOC

The TOC displays an entry for all directories and files. 

#### Files

The the `title` attribute of the markdown file determines the text displayed for that file in the TOC. The `position` attribute determines its position in the TOC. If `position` is not set the file will appear in its alphabetical order after all directories.

#### Directories

By default directories come before the files which don't have `position` set. The directory name determines the text displayed in the TOC. To change it you have to add an entry in `_config.yml` under `navigation`.

For example we want the `introduction/getting-started` directory to appear as `Getting Started` in the TOC. Open `_config.yml` and find the `navigation` attribute. Add a new item:

```
navigation
-
   introduction/getting-started
       title: Getting Started
```

Directories appear alphabetically sorted by default. You can change their position again from `_config.yml`.
```
navigation
-
   introduction/getting-started
       title: Getting Started
       position: 0
```
