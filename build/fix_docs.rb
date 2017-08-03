#! /urs/bin/ruby
#encoding: UTF-8

require 'iconv' unless String.method_defined?(:encode)

def fix_invalid_chars(s)
#    c = s.encode('UTF-8', :invalid => :replace, :replace => '').encode('UTF-8')
    invalid_ascii = "\xC2\xA0"
    invalid = invalid_ascii.force_encoding("UTF-8")
    c = s.gsub(invalid, ' ')
    return c
end

file_rel_paths = ["ui/label/HOW-TO.md",
                  "ui/page/HOW-TO.md",
                  "ui/image/HOW-TO.md",
                  "ui/web-view/HOW-TO.md",
                  "text/formatted-string/HOW-TO.md"
]

def do_it(file_rel_paths)
    file_rel_paths.each do |file_rel_path|

        file_path = File.join("./Content/ApiReference", file_rel_path)
        save_file_path = file_path

#        file_contents = File.read(file_path, :encoding => "ascii");
        file_contents = File.read(file_path);

        fixed = fix_invalid_chars file_contents

        File.write(file_path, fixed)
        puts "Processed #{file_path}"
    end

    puts "\n\n\n"
    puts "#{file_rel_paths.length} files processed"
end

do_it file_rel_paths
