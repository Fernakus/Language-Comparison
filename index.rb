class Triangle
    def initialize(lines)
        @sides = lines || 0
    end

    def print_triangle
        puts "-- Ruby Triangle --"
        @sides.times do |i|
            puts " " * (@sides - i) + "#" * (2 * i + 1)
        end
    end
end

# Run
Triangle.new(20).print_triangle
