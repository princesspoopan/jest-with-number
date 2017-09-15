/* eslint-env jest */

const JumpWithNumber = require('../src/JumpWithNumber')

test('with input [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], output should be [1, 3, 8, 9]', () => {
  const input = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
  expect(JumpWithNumber(input)).toEqual([1, 3, 8, 9])
})

test('with input [2, 3, 1, 1, 1, 1], output should be [2, 3, 1, 1]', () => {
  const input = [2, 3, 1, 1, 1, 1]
  expect(JumpWithNumber(input)).toEqual([2, 3, 1, 1])
})
