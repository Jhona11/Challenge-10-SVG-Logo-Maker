class Circle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}"></circle>`;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="52" y="0" height="200" width="200" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="50, 25 150, 175 250, 25" fill="${this.color}" />`;
    }
}
module.exports = { Triangle, Circle, Square };