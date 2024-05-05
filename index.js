// Import required modules
const inquirer = require('inquirer'); // Import inquirer for command-line user input
const fs = require('fs'); // Import fs for file system operations
const { generateSVG, Circle, Triangle, Square } = require('./lib/shapes') // Import shapes and generateSVG function from shapes.js


// Function to prompt user for shape input
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

  let userShape; // Variable to store user-selected shape

  // Use the shape variable to determine which object to construct
  switch (shape) {
    case 'Circle':
      userShape = new Circle(text, textColor, 100); // Example radius value
      break;
    case 'Square':
      userShape = new Square(text, textColor, 100, 100); // Example width and height values
      break;
    case 'Triangle':
      userShape = new Triangle(text, textColor, 100, 100); // Example width and height values
      break;
    default:
      console.error('Invalid shape selected');
      return null;
  }

  // userShape.setColor(shapeColor); // Set shape color
  // console.log('Final shape object:', userShape)

  return userShape; // Return the created shape object
}

// Main function to initiate the process
async function main() {
  try {
    // Prompt user for shape input and generate SVG
    const userShape = await getUserShape();
    await generateSVG(userShape);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call main function to start the process
main();


