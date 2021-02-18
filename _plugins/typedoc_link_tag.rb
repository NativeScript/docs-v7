class TypeDocLinkTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
        super
      @text = text.strip
      @arguments = text.strip.split(",")
    end

    def render(context)
        if @arguments.count == 0
            return
        end
        page_url = context.environments.first["page"]["url"]
        localSite = context['site']
       
        apiRefUrl = localSite['apirefurl']

        moduleInfo = @arguments[0].split(":")
        if moduleInfo.count < 2
            return
        end

        puts "Resolved module info: #{moduleInfo[1]}"

        result = "<a href=\"/ns-ui-api-reference/#{apiRefUrl}/#{moduleInfo[0]}/#{moduleInfo[1].downcase}.html\">\`#{moduleInfo[1]}\`</a>"

        if @arguments.count > 1
            memberInfo = @arguments[1].split(':')
            if memberInfo.count == 2
                puts "Resolved member info: #{memberInfo[1]}"
                if memberInfo[0] != "member"
                    return result
                else
                    memberAnchor = memberInfo[1].gsub(Regexp.new("\\(.*\\)"), "")
                    result = "<a href=\"/ns-ui-api-reference/#{apiRefUrl}/#{moduleInfo[0].downcase}/#{moduleInfo[1].downcase}.html\##{memberAnchor.downcase}\">\`#{memberInfo[1]}\`</a>"
                    puts "Generating member info link: #{result}"
                end
            end
        end
        value = result
    end
  end

Liquid::Template.register_tag('typedoc_link', TypeDocLinkTag)
