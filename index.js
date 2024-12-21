class Figure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    square() {
        return undefined;
    }
}

class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }

    square() {
        return Math.PI * this.#r * this.#r;
    }
}

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }

    square() {
        return this.#h * this.#w;
    }
}

const circle = new Circle(0, 0, 5);
console.log(`Площадь круга с радиусом 5: ${circle.square().toFixed(2)}`);

const rectangle = new Rectangle(0, 0, 4, 6);
console.log(`Площадь прямоугольника 4x6: ${rectangle.square()}`); 