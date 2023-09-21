<?php
    class Triangle {
        public $lines;

        public function __construct($lines) {
            $this->lines = $lines;
        }

        public function print_triangle() {
            echo "-- PHP Triangle -- \n";
            for ($i = 0; $i < $this->lines; $i++) {
                $line = '';

                for ($j = 0; $j < $this->lines - $i; $j++)
                    $line .= " ";

                for ($k = 0; $k < $i * 2 + 1; $k++)
                    $line .= "#";

                echo $line . "\n";
            }
        }
    }

    $triangle = new Triangle(20);
    $triangle->print_triangle();
?>
