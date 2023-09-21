class Triangle {
    constructor(lines) {
        this.lines = lines || 10;
    }

    printTriangle() {
        console.log('-- JS Triangle --');
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
