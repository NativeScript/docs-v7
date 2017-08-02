require "json"

class SnippetTag < Liquid::Tag
    def initialize(tag_name, id, tokens)
        @id = id.strip
    end

    def snippet_dir
        File.join(File.dirname(File.dirname(__FILE__)), "snippets")
    end

    def render(context)
        snippetPath = File.join(snippet_dir, "#{@id}.json")
        if !File.exists? snippetPath
            raise "Snippet file not found: #{snippetPath}"
        end
        snippet = JSON::parse(File.read(snippetPath))

        result = ""
        result += render_type snippet, "ts"
        result += render_type snippet, "js"
        result += render_type snippet, "xml"
        result += render_type snippet, "html"
        result += render_type snippet, "css"

        if result == ""
            raise "No snippets found for: #{@id}"
        end

        result
    end

    def render_type(snippet, type)
        case type
        when "ts"
            title = "TypeScript"
        when "js"
            title = "JavaScript"
        when "html"
            title = "HTML"
        when "xml"
            title = "XML"
        when "css"
            title = "CSS"
        else
            raise "Unknown snippet type: #{type}"
        end

        if snippet.key? type
            return "```#{title}\n#{snippet[type]}\n```\n"
        else
            return ""
        end
    end
end

Liquid::Template.register_tag("snippet", SnippetTag)
