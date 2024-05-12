// const fs = require('fs');

class Shape {
    constructor(title, textColor, shapeColor) {
        this.title = title;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
//         this.shape = ''; // Add shape property
    }
//     setColor(color) {
//         this.shapeColor = color;
//     }
//     writeSVGToFile(filename, data) {
//         const svgContent = generateSVG(data);
//         fs.writeFile(filename, svgContent, (err) => {
//             if (err) {
//                 console.error('Error writing SVG to file:', err);
//             } else {
//                 console.log('SVG written to file successfully!');
//             }
//         });
//     }
}

class Circle extends Shape {
    constructor(title, textColor, shapeColor) {
        super(title, textColor, shapeColor);
        this.shape = 'Circle'; // Set shape property
    }
    renderSVG() {
        return `<circle cx="150" cy="150" r="80" fill="${this.shapeColor}"/><text x="150" y="150" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.title}</text>`;
    }
}

class Triangle extends Shape {
    constructor(title, textColor, shapeColor) {
        super(title, textColor, shapeColor);
        this.shape = 'Triangle'; // Set shape property
    }
    renderSVG() {
        return `<polygon points="150,50 250,200 50,200" fill="${this.shapeColor}"/><text x="150" y="150" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.title}</text>`;
    }
}

class Square extends Shape {
    constructor(title, textColor, shapeColor) {
        super(title, textColor, shapeColor);
        this.shape = 'Square'; // Set shape property
    }
    renderSVG() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}"/><text x="150" y="150" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.title}</text>`;
    }
}

function generateSVG(data) {
    let shapeSVG;
    switch (data.shape) {
        case 'Circle':
            shapeSVG = new Circle(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        case 'Triangle':
            shapeSVG = new Triangle(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        case 'Square':
            shapeSVG = new Square(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        default:
            shapeSVG = '';
            break;
    }

    return `
    <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
    </svg>`;
}

module.exports = { generateSVG, Circle, Triangle, Square };

