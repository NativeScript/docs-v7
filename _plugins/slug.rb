class SlugTag < Liquid::Tag
    def initialize(tag_name, slug_name, tokens)
        @slug_name = slug_name.strip
    end

    def render(context)
        site = context.registers[:site]
        page = site.pages.find {|p| p.data['slug'] == @slug_name}
        if page
            page.url.sub('.html', '')
        else
            page_url = context.environments.first["page"]["url"]
            Jekyll.logger.warn "Slug:", "No page with slug `#{@slug_name}` in #{page_url}. Consider fixing the slug or use normal link." 
        end
    end
end

Liquid::Template.register_tag('slug', SlugTag)
