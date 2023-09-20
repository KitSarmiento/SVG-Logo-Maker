const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

// Arrays of questions for user input to creat a logo
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter three (3) characters:",
    validate: validateText,
  },
  {
    type: "input",
    name: "text-color",
    message:
      "Enter a color keyword (OR a hexadecimal number) for your text color:",
  },
  {
    type: "input",
    name: "shape-color",
    message:
      "Enter a color keyword (OR a hexadecimal number) for your shape color ",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["Triangle", "Circle", "Square"],
  },
];

// function to validate the three characters
function validateText(input) {
  if (input.length <= 3) {
    return true;
  }
  return "Please enter up to three characters.";
}

//SVG class
class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
}
