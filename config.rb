# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "web/stylesheets"
fonts_dir = "web/webfonts"
sass_dir = "web/sass"
images_dir = "web/images"
javascripts_dir = "web/js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass src/skin/frontend/enterprise/gdn/sass scss && rm -rf sass && mv scss sass

require "susy"


#http://blog.codepen.io/2013/09/17/adding-random-function-sass/
#module Sass::Script::Functions
#  def random(max = Sass::Script::Number.new(100))
#    Sass::Script::Number.new(rand(max.value), max.numerator_units, max.denominator_units)
#  end
#end
module Sass::Script::Functions
  def random(*args)
    case args.size
    when 1
      limit = args[0]
    else
      limit = Sass::Script::Number.new(100)
    end

    assert_type limit, :Number, :limit

    random_number = rand(limit.value)

    return Sass::Script::Number.new(random_number)
  end
end