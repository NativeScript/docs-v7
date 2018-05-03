require 'jekyll-sitemap'

module Jekyll

    #override the method from the original Jekyll-sitemap gem so it always uses our template instead of using their built-in template
    class JekyllSitemap < Jekyll::Generator
        def source_path(file = "sitemap.xml")
              File.expand_path "./#{file}", __dir__
        end
    end
    JekyllSitemap.new.source_path

end
