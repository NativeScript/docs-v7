require "json"

module Jekyll

    class NavigationGenerator < Generator
        def initialize(config)
            @navigation = Hash[(config['navigation'] || {}).map { |key, value| [/^#{key.gsub('*', '.*?')}$/, value] }]
        end

        def current_environment
            (ENV['JEKYLL_ENV'] || '').strip
        end

        def other_environment(page)
            page_environment = page['environment']
            page_environment and page_environment != current_environment
        end

        def categories(site)
            categories = {}

            site.pages.each do |page|
                page_category = page.data['category']

                next if other_environment(page)
                next if page.data['publish'] == false
                next unless page_category

                category_items = categories[page_category]

                unless category_items
                    categories[page_category] = category_items = []
                end

                url = page.url.sub('/', '')

                segments = url.split('/')

                segments.each_with_index do |segment, index|
                    item = category_items.find { |n| n['path'] == segment }

                    unless item
                        item = { 'path' => segment }

                        if index == segments.size - 1
                            item['position'] = page.data['position'] if page.data['position']
                            item['text'] = page.data['title']
                        else
                            path = segments[0..index].join('/')
                            navigation_entry =  @navigation.find { |key, value| path =~ key }
                            mapping = navigation_entry ? navigation_entry[1] : {}
                            item['text'] = mapping['title'] || segment
                            item['items'] = []
                            item['position'] = mapping['position'] if mapping.has_key?('position')
                            item['expanded'] = mapping['expanded'] if mapping.has_key?('expanded')
                        end

                        category_items << item
                    end

                    category_items = item['items']

                end
            end

            categories.each {  |key, value| sort!(value) }

            categories
        end

        def generate(site)
            categories(site).each do |key, value|
                filename = "#{key}.json"

                FileUtils.mkdir_p(site.dest) unless File.exist?(site.dest)

                File.write(File.join(site.dest, filename), value.to_json)

                # Keep the file from being cleaned by Jekyll
                site.keep_files << filename
            end
        end

        def sort!(items)
            items.each {|item| sort!(item['items']) if item['items'] }

            # sorty by position, directory or file and then title (ignoring case)
            items.sort_by! {|a| [a['position'] || 1000000, a.has_key?('items') ? -1 : 1,  a['text'].downcase]}
        end

    end
end
