module Jekyll
    class FlavorGenerator < Generator
        def generate(site)
            if @site.nil?
                @site = site
            end

            site.pages.each do |page|
                matchFlavor(page)
            end
        end

        def matchFlavor(page)
            if @urlMap.nil?
                @urlMap = @site.config['flavor']
            end

            @urlMap.each do |idx, entry|
                rootedPagePath = "/#{page.path}"

                if (Regexp.new(entry["matchPattern"]) =~ rootedPagePath)
                    page.data['flavor'] = idx
                    break
                end
            end

            if (page.data['flavor'].nil?)
                page.data['flavor'] = 'NativeScript Core'
            end
        end
    end
end
