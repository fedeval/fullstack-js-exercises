import arrays from "../utilities/arrays"
import numbers from "../utilities/numbers"
import strings from "../utilities/strings"

/* Your task is to write at least one spec per function used on the index.ts file.
There should be at least 7 specs.
You must use at least 5 different matchers for your tests.
All of your specs can be on 1 spec file. */
describe("cut3", () => {
  it("removes the third element of an array", () => {
    const testArray = [1, 2, 4, 5]
    const thirdElement = testArray[2]
    expect(arrays.cut3(testArray)).not.toContain(thirdElement)
  })
})

describe("sum", () => {
  const num1 = 1
  const num2 = 2

  it("returns a number", () => {
    expect(typeof numbers.sum(num1,num2)).toBe("number")
  })

  it("returns the sum of two numbers", () => {
    expect(numbers.sum(num1, num2)).toEqual(3)
  })
})

describe("capitalize", () => {
  it("returns a string with the first letter capitalized", () => {
    const testSentence = "hello, world"
    expect(strings.capitalize(testSentence)[0]).toMatch(/[A-Z]/)
  })
})