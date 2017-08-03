class EnvironmentTag < Liquid::Block
    def current_environment
        (ENV["JEKYLL_ENV"] || "").strip
    end

    def render(context)
        site = context.registers[:site]
        if current_environment == expected_environment
            super
        else
            ""
        end
    end
end

class NativeScriptTag < EnvironmentTag
    def expected_environment
        "nativescript"
    end
end

class AngularTag < EnvironmentTag
    def expected_environment
        "angular"
    end
end

Liquid::Template.register_tag("nativescript", NativeScriptTag)
Liquid::Template.register_tag("angular", AngularTag)
