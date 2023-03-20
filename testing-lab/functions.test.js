const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js');

test('testing return two func', () => {
    expect(returnTwo()).toBe(2)
}) 

test('test greeting to return proper string', () => {
    expect(greeting('Noah')).toBe('Hello, Noah.')
})

describe('Math functions', () => {
    test('test add to return sum', () => {
        expect(add(3, 7)).toEqual(10)
    })

    test('test multiply to return product', () => {
        expect(multiply(3, 7)).toEqual(21)
    })

    test('test divide to return quotient', () => {
        expect(divide(21, 7)).toEqual(3)
    })

    test('test subtract to return difference', () => {
        expect(subtract(14, 7)).toEqual(7)
    })
})