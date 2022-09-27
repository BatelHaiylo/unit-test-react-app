export const getGreeting = () => {
    return "Hello, World"
}

export const getCustomUserGreeting = (userName) => {
    return typeof(userName) === "string" ?
    `Hello ${userName}` : alert("not valid name")
}

//1
export const getMaxNumOutOfTwo =(num1,num2)=>{
    return Math.max(num1,num2)
}
//2
export const getTwoNumbersDivision =(num1,num2)=>{
    return num1/num2
}
//3
export const getMinNumOutOfThree =(num1,num2,num3)=>{
    return Math.max(num1,num2,num3)
}

//4
export const getAverage =(...numbers)=>{
    const arr = [...numbers]
    return arr.reduce((a, b) => a + b, 0) / arr.length
}

//5
export const getTreeDigitsNumSum =(num)=>{
    let sum = 0;
    while(num){
        sum += num % 10;
        num = Math.floor(num / 10)
    }
    return sum
}

//6
export const isArraysOnTheSameLength=(numsArr1,numsArr2)=>{
    if(numsArr1.length === numsArr2.length){
        for(let i =0; i<numsArr1.length; i++){
            numsArr1[i] = numsArr2[i]
        }
        return true
    }
    return false
}

//7
export const getSortedNumbersArray =(numArr)=>{
    return numArr.sort((a, b) => a - b)
}

//8
export const getMaxNumInNumbersArr= (numsArr)=>{
    return Math.max(...numsArr)
}

//9
export const getMinNumIndexInNumbersArr=(numArr)=>{
    const min = Math.min(...numArr);
    const index = numArr.indexOf(min);
    return index

}

//10
export const getNumsArrSum =(numArr)=>{
    return numArr.reduce((a, b) => a + b, 0)
}

//11
export const isNumInArray =(numsArr,num)=>{
    return numsArr.includes(num) ? true : false
}