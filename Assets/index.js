const { Square, Circle } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

async function getUserShape() {
  const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    {
      name: 'text',
      message: 'Please enter the text for your SVG'
    },
    {
      name: 'textColor',
      message: 'Please provide a color for your SVG'
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

  // Use my shape variable to determine which object to construct
  switch (shape) {
    case 'Circle':
      userShape = new Circle(text, textColor, 50, 75);
      break;
    case 'Square':
      userShape = new Square(text, textColor, 75, 90);
      break;
    default:
      userShape = new Triangle(text, textColor);
  }

  userShape.setColor(shapeColor);

  return userShape;
}

async function generateSVG(userShape) {
  const svgCode = `<svg version="1.1" width="300" height="200">
    ${userShape.render()}
    <text x="${userShape.textX}" y="${userShape.textY}" font-size="60" text-anchor="middle" fill="${userShape.textColor}">${userShape.text}</text>
  </svg>`;

  await fs.promises.writeFile('./logo.svg', svgCode);

  console.log('SVG generated successfully!');
}

getUserShape()
  .then(generateSVG);