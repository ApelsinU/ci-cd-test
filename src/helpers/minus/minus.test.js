import {minus} from './minus'

describe('minus', () => {
    test('positive', () => {
        expect(minus(5,5)).toBe(0)
    })

    test('negative', () => {
        expect(minus(-5,-5)).toBe(0)
    })

    test('multi-negative-first', () => {
        expect(minus(-5, 5)).toBe(-10)
    })

    test('multi-negative-second', () => {
        expect(minus(5, -5)).toBe(10)
    })
})