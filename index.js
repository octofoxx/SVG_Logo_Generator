//required packages to run application
const inquirer = require('inquirer');

const fs = require('fs');

const {Triangle, Circle, Square} = require('./lib/shapes');

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

function generateLogo (fileName, answers) {

    //starts file out as empty 
    let SVGlogo = "";

    //sets the file to a 300x200 size
    SVGlogo = `<svg width ="300" height="200">`;

    //<g> wraps the text into the shape so it is displayed in front of the shape
    SVGlogo += "<g>";

    //adds shape picked by user to the file, filling the color based on user's input
    SVGlogo += `${answers.shape}`;

    //conditional statement to determine which shape to generate based on user's selection
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        SVGlogo +=  `<polygon points="150,10 50,190 250,190"  fill= "${answers.shapeColor}" />`;

    } else if(answers.shape === "Circle") {
        shapeChoice = new Circle();
        SVGlogo +=  `<circle cx="150" cy="115" r="65" fill= "${answers.shapeColor}" />`;

    } else if(answers.shape === "Square") {
        shapeChoice = new Square();
        SVGlogo +=  `<rect x="100" y="70" width="100" height="100" fill= "${answers.shapeColor}" />`;
    }

    //adds the user's chosen text to the file
    SVGlogo += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.title}</text>`;

    //closing <g> and <svg> tags
    SVGlogo += "</g>";
  
    SVGlogo += "</svg>";
 
    fs.writeFile(fileName, SVGlogo, (err) =>
    err ? console.log(err) : console.log('Successfully generated logo.svg!')
    );
};

inquirer.prompt([
    {
        type: 'maxlength-input',
        name: 'title',
        message: 'Please choose up to three(3) characters for your logo.',
        maxLength:3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a color for your logo text (hexadecimal number is acceptable).'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your logo',
        choices: ['Triangle', 'Circle', 'Square'
    ],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please choose a color for your shape (hexadecimal number is acceptable).'
    }
])
.then((answers)=> 
{
    //use the generateLogo function to create the logo.svg file with user's chosen text, shape and colors
   generateLogo('logo.svg', answers);
 
});
