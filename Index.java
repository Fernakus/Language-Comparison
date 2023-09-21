private class Triangle {
    private int lines;

    public constructor(int lines) {
        this.lines = lines || 10;
    }

    public printTriangle() {
        System.out.println('-- Java Triangle --');
        for (int i = 0; i < this.lines; i++) {
            for (int j = 0; j < i; j++)
                System.out.print("#");

            System.out.println("");
        }
    }
}

public class Index {
    public static void main(String[] args) {
        Triangle triangle = new Triangle(20);
        triangle.printTriangle();
    }
}
