

class Circle {
    constructor(color) {
        this.color = color;
    }

    render () {
        return `<circle r="100" cx="150" cy="100" fill="${this.color}"></circle>`;
    }
}    

class Square {
    constructor(color) {
        this.color = color;
    }
    
    render () {
        return`<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }
    
    render () {
        return `<polygon points="50, 200 250, 200 150, 0" fill="${this.color}" />`;
    }
}

module.exports = {Triangle, Circle, Square };