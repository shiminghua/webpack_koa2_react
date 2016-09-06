class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

let point = new Point();
console.log(point.toString());