class NSCookbook < Liquid::Tag
    def initialize(tag_name, url, tokens)
        @url = url

    end

    def render(context)
        site = context.registers[:site]
        ns_cookbook = site.config['nscookbookurl']

        # NS_COOKBOOK replaced by NSCookbookFilter
        "NS_COOKBOOK/#{@url}"
    end
end

Liquid::Template.register_tag('ns_cookbook', NSCookbook)
