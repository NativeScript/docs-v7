#! /usr/bin/ruby

# Cleans the wrong UTF-8 encoding in HOW-TO files. A workaround until
# the generator fixed.
paths = [
    "./Content/ApiReference/ui/label/HOW-TO.md",
    "./Content/ApiReference/ui/page/HOW-TO.md",
    "./Content/ApiReference/ui/image/HOW-TO.md",
    "./Content/ApiReference/text/formatted-string/HOW-TO.md"
]

paths.each do |path|
    contents = File.read(path)
    contents = contents.encode('UTF-8', 'binary', invalid: :replace, undef: :replace, replace: '')
    newFile = File.open(path, "w")
    newFile.write(contents)
end


