const { sortPages } = require('./report.js')
const { test, inspect } = require('@jest/globals')

test('sortPages 2 pages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expected)
})

test('sortPages 5 pages', () => {
    const input = {
        'https://wagslane.dev/path1': 1,
        'https://wagslane.dev/path2': 5,
        'https://wagslane.dev/path3': 23,
        'https://wagslane.dev/path4': 7,
        'https://wagslane.dev/path5': 9,
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev/path3', 23],
        ['https://wagslane.dev/path5', 9],
        ['https://wagslane.dev/path4', 7],
        ['https://wagslane.dev/path2', 5],
        ['https://wagslane.dev/path1', 1]
    ]
    expect(actual).toEqual(expected)
})