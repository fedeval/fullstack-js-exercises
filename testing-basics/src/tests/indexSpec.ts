import arrays from "../utilities/arrays"

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