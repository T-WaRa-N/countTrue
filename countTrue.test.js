// importing the countTrue module to be tested using "jest"
const { test, expect, it } = require("@jest/globals")
const countTrue = require("./countTrue")

// test('checking test', () => {
//     expect(countTrue()).toBe(2)
// })

it("Check whether an array is returned", ()=>{
    expect(countTrue([])).toEqual(0)
})

// it("Check number of bolean 'true' in the array", ()=>{
//     expect(countTrue([])).toEqual([])
// })


