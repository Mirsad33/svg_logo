class Shape {
    constructor(text, textColor, textX, textY) {
        this.textX = textX, 
        this.textColor = textColor,
        this.text = text,
        this.textY = textY,
        this.shapeColor = ''
    }

    setColor(color) {
        this.shapeColor = color
    }
}

module.exports = Shape