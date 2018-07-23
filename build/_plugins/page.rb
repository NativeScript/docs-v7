module Jekyll
    class Page
        #https://github.com/jekyll/jekyll/blob/master/lib/jekyll/convertible.rb#L44
        def read_yaml(base, name, opts = {})
            filename = File.join(base, name)

            begin
                self.content = File.read(@path || site.in_source_dir(base, name),
                                         Utils.merged_file_read_opts(site, opts))
                if content =~ Document::YAML_FRONT_MATTER_REGEXP
                    self.content = $POSTMATCH
                    self.data = SafeYAML.load($1.gsub(/{{site\.([^}]+)}}/) {|o| site.config[$1]} )
                end
            rescue SyntaxError => e
                Jekyll.logger.warn "YAML Exception reading #{File.join(base, name)}: #{e.message}"
            rescue Exception => e
                Jekyll.logger.warn "Error reading file #{File.join(base, name)}: #{e.message}"
            end

            self.data ||= {}

            validate_data! filename
            validate_permalink! filename

            self.data
        end

    end
end
