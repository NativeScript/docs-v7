module Jekyll
    class JekyllSiteGenerator < Generator
        def initialize(config)
            @config = config
        end

        def self.site
            @@site
        end

        def generate(site)
            #HACK: store the site in a static field, so that we can access it in the markdown include filter during the render stage.
            @@site = site unless site.nil?
        end
    end
end
