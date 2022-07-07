import { getRandomValue } from './utils'

describe('Function: getRandomValue', () => {
  it('return random number from 1 to 10', () => {
    expect(getRandomValue()).not.toBeGreaterThan(10)
  })
})

