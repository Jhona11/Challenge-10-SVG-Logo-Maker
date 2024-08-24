const inquirer = require("inquirer"); // npm install --save inquirer@^8.0.0
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters',
        validate(value) {
            if (value.length > 3) {
                return 'Please enter at most 3 characters';
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textC',
        message: 'Enter a color for the text (color keyword or hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeC',
        message: 'Enter a color for the shape (color keyword or hexadecimal number)'
    }
];

function createSVGTags(answers) {
    let svgtags = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">';

    let shape;
    switch (answers.shape) {
        case 'square':
            shape = new Square(answers.shapeC);
            break;
        case 'circle':
            shape = new Circle(answers.shapeC);
            break;
        case 'triangle':
            shape = new Triangle(answers.shapeC);
            break;
    }
    svgtags += shape.render();

    svgtags += `<text fill="${answers.textC}" font-size="100" x="145" y="110" text-anchor="middle"><tspan dy="0" x="150">${answers.text}</tspan></text></svg>`;

    fs.writeFileSync('examples/logo.svg', svgtags);
    console.log("Generated logo.svg in the examples folder");
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            createSVGTags(answers);
        })
        .catch((error) => {
            console.log(error);
        });
}

init();