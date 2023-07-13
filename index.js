const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please choose up to three(3) characters for your logo.'
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
        choices: ['triangle', 'circle', 'square'
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
   const SVGlogo = shapes(answers);
   
   fs.writeFile('logo.svg', SVGlogo, (err) =>
   err ? console.log(err) : console.log('Successfully generated logo.svg!')
 );
});
