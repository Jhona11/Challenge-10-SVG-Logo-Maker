const { Circle, Square, Triangle } = require('./shapes.js');

describe("Triangle test", () => {
  test("test for a triangle with a yellow background", () => {
    const shape = new Triangle('yellow');
    expect(shape.render()).toEqual(
      '<polygon points="50, 25 150, 175 250, 25" fill="yellow" />'
    );
  });
});

describe("Square test", () => {
  test("test for a square with a blue background", () => {
    const shape = new Square('blue');
    expect(shape.render()).toEqual(
      '<rect x="52" y="0" height="200" width="200" fill="blue" />'
    );
  });
});

describe("Circle test", () => {
  test("test for a circle with a #bac263 background", () => {
    const shape = new Circle('#bac263');
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="75" fill="#bac263"></circle>'
    );
  });
});