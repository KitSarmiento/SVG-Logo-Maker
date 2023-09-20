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

//This function will initialize the app
function init() {
  console.log("Welcome to the Logo Generator!");

  createLogo();
}

// Function to create the logo
async function createLogo() {
  try {
    const answers = await inquirer.prompt(questions);

    let shapeElement = "";

    switch (answers.shape) {
      case "Triangle":
        shapeElement = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
        break;

      case "Circle":
        shapeElement = `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
        break;

      case "Square":
        shapeElement = `<rect x="73" y="40" width="160" height="120" fill="${answers.shapeColor}"/>`;
        break;
    }

    const textElement = `<text x="10" y="100" fill="${answers.textColor}" font-size="30">${answers.text}</text>`;

    const svg = new Svg();
    svg.textElement = textElement;
    svg.shapeElement = shapeElement;

    const svgCode = svg.render();

    // Save the SVG to a file
    fs.writeFileSync("logo.svg", svgCode);

    console.log("Generated logo.svg");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the init function
init();
