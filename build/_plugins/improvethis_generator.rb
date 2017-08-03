module Jekyll
    class ImproveThisGenerator < Generator
        def generate(site)
            if @site.nil?
                @site = site
            end

            site.pages.each do |page|
                pageImproveThisUrl = getPageImproveThisUrl(page)
                if pageImproveThisUrl.nil? || pageImproveThisUrl.length == 0
                    page.data['improvethisurl'] = ''
                    page.data['improvethisvisibilityclass'] = 'noimprovethis'
                else
                    page.data['improvethisurl'] = pageImproveThisUrl
                    page.data['improvethisvisibilityclass'] = 'activeimprovethis'
                end
            end
        end

        def getPageImproveThisUrl(page)
            if @urlMap.nil?
                @urlMap = @site.config['improveThis']['mapOfBaseUrls']
            end

            resultUrl = ""
            @urlMap.each do |idx, entry|
                rootedPagePath = "/#{page.path}"

                if (Regexp.new(entry["matchPattern"]) =~ rootedPagePath)
                    pagePath = rootedPagePath
                    if entry["pathUpdatePattern"]
                        updater = Regexp.new(entry["pathUpdatePattern"])
                        pagePath = pagePath.gsub(updater, "")
                    end
                    if entry["baseUrl"]
                        # Ensure the baseUrl ends with a slash:
                        baseUrl = File.join(entry["baseUrl"], "")
                        resultUrl = "#{baseUrl}#{pagePath}"
                    end
                    break
                end
            end
            resultUrl
        end
    end
end
