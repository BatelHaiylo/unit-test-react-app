import {getGreeting, getCustomUserGreeting, getMaxNumOutOfTwo, getTwoNumbersDivision, getMinNumOutOfThree, getAverage, getTreeDigitsNumSum, isArraysOnTheSameLength, getSortedNumbersArray, getMaxNumInNumbersArr, getMinNumIndexInNumbersArr, getNumsArrSum, isNumInArray} from './tryFunc'

describe("tests for getGreeting function", ()=>{
    it("return Hello World",()=>{
        expect(getGreeting()).toBe("Hello, World")
    })
    it("not return Hello Batel",()=>{
        expect(getGreeting()).not.toBe("Hello, Batel")
    })
    it("not return a number",()=>{
        expect(getGreeting()).not.toBeNaN()
    })
    it("not return null",()=>{
        expect(getGreeting()).not.toBeNull()
    })
})

describe("tests for getCustomUserGreeting function", ()=>{
    it("return Hello Batel",()=>{
        expect(getCustomUserGreeting("Batel")).toBe("Hello Batel")
    })
    it("return Hello",()=>{
        expect(getCustomUserGreeting("")).toBe("Hello")
    })
    it("return an error",()=>{
        expect(getCustomUserGreeting()).toThrowError()
    })
    it("alert not valid name",()=>{
        expect(getCustomUserGreeting()).toThrow("not valid name")
    })
})

describe("test for getMaxNumOutOfTwo function", ()=>{
    it("return the biggest number of two",()=>{
        expect(getMaxNumOutOfTwo(2,4)).toEqual(4)
    })
    it("return one number",()=>{
        expect(getMaxNumOutOfTwo(25,25)).toEqual(25)
    })
})
describe("test for getTwoNumbersDivision function", ()=>{
    it("return the two numbers division result",()=>{
        expect(getTwoNumbersDivision(56,6)).toEqual(50)
    })
    it("return one number",()=>{
        expect(getTwoNumbersDivision(56,-6)).toEqual(50)
    })
})
describe("test for getMinNumOutOfThree function", ()=>{
    it("return the min number of three",()=>{
        expect(getMinNumOutOfThree(2,4,45)).toEqual(4)
    })
    it("return one number",()=>{
        expect(getMinNumOutOfThree(2,4,null)).not.toBe(2)
    })
})
describe("test for getAverage function", ()=>{
    it("return the average of the given numbers",()=>{
        expect(getAverage(1,2,1,2,1)).toEqual(1.4)
    })
    it("return one number",()=>{
        expect(getAverage(1,2,3,4,5,6,7,8,9,5,2,1,2,33,4,5,1,2,88,7,1)).toEqual(9.7)
    })
})
describe("test for getTreeDigitsNumSum function", ()=>{
    it("returns the sum of a three-digit param",()=>{
        expect(getTreeDigitsNumSum(2568)).toEqual(21)
    })
    it("return one number",()=>{
        expect(getTreeDigitsNumSum(-2568)).toEqual(17)
    })
})
describe("test for isArraysOnTheSameLength function", ()=>{
    it("return boolean result is the params length is equal",()=>{
        expect(isArraysOnTheSameLength([1,2,3,4],[2,5,8,7])).toEqual(true)
    })
    it("return one number",()=>{
        expect(isArraysOnTheSameLength([12,3,4],[7,8,4,5,1])).toEqual(false)
    })
})
describe("test for getSortedNumbersArray function", ()=>{
    it("Returns an array in which the numbers are arranged in ascending order",()=>{
        expect(getSortedNumbersArray([5,8,4,1,9])).toEqual([1,4,5,8,9])
    })
    it("return an error",()=>{
        expect(getSortedNumbersArray([a,d,s,w,w])).not.toBe([a,d,s,w,w])
    })
})
describe("test for getMaxNumInNumbersArr function", ()=>{
    it("return the maximum number in the array",()=>{
        expect(getMaxNumInNumbersArr([2,5])).toEqual(4)
    })
    it("return the maximum number in the array",()=>{
        expect(getMaxNumInNumbersArr([2,5,0,0,8,8])).toEqual(8)
    })
})
describe("test for getMinNumIndexInNumbersArr function", ()=>{
    it("returns the index of the minimum number in the array",()=>{
        expect(getMinNumIndexInNumbersArr([2,55,64,1])).toEqual(3)
    })
    it("returns the index of the first minimum number in the array",()=>{
        expect(getMinNumIndexInNumbersArr([5,5,4,1,4,2,0,0])).toEqual(7)
    })
})
describe("test for getNumsArrSum function", ()=>{
    it("returns the sum of the elements in the array",()=>{
        expect(getNumsArrSum([8,7,5,6,4])).toEqual(4)
    })
    it("returns an error",()=>{
        expect(getNumsArrSum([8,7,a,d,f,5,e,6])).not.toBe(a)
    })
})
describe("test for isNumInArray function", ()=>{
    it("returns a Boolean answer if the number exists in the array",()=>{
        expect(isNumInArray([124535],5)).toEqual(true)
    })
    it("returns false answer cuz of char param",()=>{
        expect(isNumInArray([124535],a)).toEqual(false)
    })
})