class Triangle {
    lines: number;

    constructor(lines = 0) {
        this.lines = lines;
    }

    printTriangle() {
        console.log('-- TS Triangle --');
        for (let i = 0; i < this.lines; i++) {
            let line = '';

            for (let j = 0; j < this.lines - i; j++)
                line += ' ';

            for (let k = 0; k < i * 2 + 1; k++)
                line += '#';

            console.log(line);
        }
    }
}

// Call
new Triangle(20).printTriangle();
