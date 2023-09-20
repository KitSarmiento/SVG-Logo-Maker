const { Triangle, Circle, Square } = require("./shapes.js");

// Testing the Triangle for the red background
describe("Triangle", () => {
  it("test for a triangle shape with a red background", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    const svgCode = triangle.render();
    expect(svgCode).toEqual(
      '<polygon points="150,18 244,182 56,182" fill="red" />'
    );
  });
});

// Testing the Circle for the green background
describe("Circle", () => {
  it("test for a circle shape with a green background", () => {
    const circle = new Circle();
    circle.setColor("green");
    const svgCode = circle.render();
    expect(svgCode).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
  });
});

// Testing the square for the blue background
describe("Square", () => {
  it("test for a circle shape with a green background", () => {
    const square = new Square();
    square.setColor("blue");
    const svgCode = square.render();
    expect(svgCode).toEqual(
      '<rect x="73" y="40" width="160" height="120" fill="blue" />'
    );
  });
});
