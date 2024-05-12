// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const { generateSVG, Circle, Triangle, Square } = require('./shapes');

async function getUserShape() {
    const { text, textColor, shape, shapeColor } = await inquirer.prompt([
        {
            name: 'text',
            message: 'Please enter the text for your SVG'
        },
        {
            name: 'textColor',
            message: 'Please provide a color for your SVG text'
        },
        {
            type: 'list',
            message: 'Please enter the shape of your SVG',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            name: 'shapeColor',
            message: 'Please provide a shape color for your SVG'
        }
    ]);

    let userShape;

    switch (shape) {
        case 'Circle':
            userShape = new Circle(text, textColor, shapeColor);
            break;
        case 'Square':
            userShape = new Square(text, textColor, shapeColor);
            break;
        case 'Triangle':
            userShape = new Triangle(text, textColor, shapeColor);
            break;
        default:
            console.error('Invalid shape selected');
            return null;
    }

    userShape.setColor(shapeColor);
    console.log('Final shape object:', userShape);

    return userShape;
}

async function main() {
    try {
        const userShape = await getUserShape();
        if (userShape) {
            const filename = 'output.svg'; // Define filename for the SVG output
            userShape.writeSVGToFile(filename, userShape);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();



