class TimeStampTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
        @text = markup
        super
    end

    def get_config(var)
        if @config.nil?
            @config = Jekyll.configuration({})
        end
        @config["source"]
    end

    def get_source()
        if @source.nil?
            @source = get_config "source"
        end
        @source
    end

    def render(context)
        contents = super
        content = Liquid::Template.parse(contents).render context
        content = URI.unescape(content)
        dir = File.dirname(content)
        filename = File.basename(content)

        filePath = File.join(get_source, content)

        if !Dir.exist?(File.join(get_source, dir)) || !File.exist?(filePath)
            "#{get_config 'release_date'}"
        end

		# aim for YYYY-MM-DD format https://www.google.com/sitemaps/protocol.html#lastmoddef
       `cd "#{get_source}/#{dir}" && git log -1 --format=%cd --date=short "#{filename}"`.strip
    end
end

Liquid::Template.register_tag('timestamp', TimeStampTag)
