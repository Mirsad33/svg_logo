const Shape = require('./Shape')

class Square extends Shape {
    render() {
        return `<rect width="150" height="150" fill="$this.shapeColor}" />`
    }
}

module.exoprts = Square