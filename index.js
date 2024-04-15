// Import required modules
const inquirer = require('inquirer'); // Import inquirer for command-line user input
const fs = require('fs'); // Import fs for file system operations

// Define Square class
class Square {
  constructor(text, textColor, width, height) {
    this.text = text;
    this.textColor = textColor;
    this.width = width;
    this.height = height;
    this.shapeColor = ""; // Initialize shapeColor property
  }

  setColor(color) {
    this.shapeColor = color; // Set shapeColor property
  }

  render() {
    return `<rect width="${this.width}" height="${this.height}" fill="${this.shapeColor}"/>`; // Use shapeColor property
  }
}

// Define Circle class
class Circle {
  constructor(text, textColor, radius) {
    this.text = text;
    this.textColor = textColor;
    this.radius = radius;
    this.shapeColor = ""; // Initialize shapeColor property
  }

  setColor(color) {
    this.shapeColor = color; // Set shapeColor property
  }

  render() {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.shapeColor}"/>`; // Use shapeColor property
  }
}

// Define Triangle class
class Triangle {
  constructor(text, textColor, width, height) {
    this.text = text;
    this.textColor = textColor;
    this.width = width;
    this.height = height;
    this.shapeColor = ""; // Initialize shapeColor property
  }

  setColor(color) {
    this.shapeColor = color; // Set shapeColor property
  }

  render() {
    return `<polygon points="0,${this.height} ${this.width},0 ${this.width},${this.height}" fill="${this.shapeColor}"/>`; // Use shapeColor property
  }
}

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
      userShape.setColor(shapeColor); // Set shape color
      break;
    case 'Square':
      userShape = new Square(text, textColor, 100, 100); // Example width and height values
      userShape.setColor(shapeColor); // Set shape color
      break;
    default:
      userShape = new Triangle(text, textColor, 100, 100); // Example width and height values
      userShape.setColor(shapeColor); // Set shape color
  }

  return userShape; // Return the created shape object
}

// Function to generate SVG code based on user-selected shape
async function generateSVG(userShape) {
  // Construct SVG code
  const svgCode = `<svg version="1.1" width="300" height="200">
    ${userShape.render()}
    <text x="150" y="100" font-size="20" text-anchor="middle" fill="${userShape.textColor}">${userShape.text}</text>
  </svg>`;

  // Write SVG code to file
  await fs.promises.writeFile('./logo.svg', svgCode);

  console.log('SVG generated successfully!');
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


