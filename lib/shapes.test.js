const { Circle, Square, Triangle } = require('./shapes.js');

describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
        const shape = new Triangle ('blue');
        expect(shape.render ()) .toEqual(
             '<polygon points="50, 200 250, 200 150, 0" fill="blue" />'
        );
    });    
});

//Unit testing  ->testing for a square with a purple background to render
describe("Square test", () => {
    test ("test for a square with a purple background", () => {
        const shape = new Square('purple');
        expect(shape.render()).toEqual(
            '<rect x="50" y="0" width="200" height="200" fill="purple" />'
        );
    });
});    

// Unit testing ->testing for a circle with a #ca00ca background to render
describe("Circle test", () => {
    test ("test for a circle with a #ca00ca background", () => {
        const shape = new Circle('#ca00ca');
        expect(shape.render ()).toEqual(
            '<circle r="100" cx="150" cy="100" fill="#ca00ca"></circle>'
        );
    });
});                  