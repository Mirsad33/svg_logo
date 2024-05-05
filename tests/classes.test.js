const { Circle, Square, Triangle } = require('../lib/shapes')

describe('Shape Class Tests', () => {
    it('Should render a square element tag', () => {
        square.setColor('Blue')

        expect(square.render()).toBe('<rect width="150" height="150" fill="blue" />')
    })

    it('Should return a circle object matching specific properties', () => {
        const circle = new Circle('xyz', 'red', 87, 69)

        circle.setColor('red')

        console.log(circle)

        expect(circle).toMatchObject({
            text: 'xyz',
            textColor: 'green',
            textX: 87,
            textY: 69
        })
    })
})