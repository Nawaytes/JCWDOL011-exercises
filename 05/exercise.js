let testCount = 0
let passCount = 0
let failCount = 0

function isSame(message, actual, expected) {
    testCount++
    if (actual === expected) {
        passCount++
        console.log(`PASS: ${message}`)
    } else {
        failCount++
        console.log(`FAIL: ${message}`)
        console.log(`  actual: "${actual}" ;; type: ${typeof actual}`)
        console.log(`  expected: "${expected}" ;; type: ${typeof expected}`)
    }
}

// Write a function to get the lowest, highest and average value in the array (with and without sort function).

function getLowestNumber(listNumber) {
    let lowestNumber = null
    for (let index = 0; index < listNumber.length; index++) {
        if (index === 0)
            lowestNumber = listNumber[0]
        else if (lowestNumber > listNumber[index])
            lowestNumber = listNumber[index]
    }
    return lowestNumber || 0
}

function getHighestNumber(listNumber) {
    let highestNumber = null
    for (let index = 0; index < listNumber.length; index++) {
        if (index === 0)
            highestNumber = listNumber[0]
        else if (highestNumber < listNumber[index])
            highestNumber = listNumber[index]
    }
    return highestNumber || 0
}

function getAverage(listNumber) {
    let average = 0
    let sumNumber = 0
    for (let index = 0; index < listNumber.length; index++) {
        sumNumber += listNumber[index]
    }
    average = sumNumber / listNumber.length
    return average || 0
}

const arrayTest1 = [12, -2, 6, 3, 14, -3, 8, 7, 20, 19]

isSame('Get lowest number function should be -3', getLowestNumber(arrayTest1), -3)
isSame('Get highest number function should be 20', getHighestNumber(arrayTest1), 20)
isSame('Get average number function should be 8.4', getAverage(arrayTest1), 8.4)

// Write a function that takes an array of words and returns a string by concatenating the words in
// the array, separated by commas and - the last word - by an 'and'.

function convertArraytoString(listString) {
    let result = ''
    for (let index = 0; index < listString.length; index++) {
        if (index === 0)
            result += listString[index]
        else if (index === listString.length - 1)
            result += ` and ${listString[index]}`
        else
            result += `, ${listString[index]}`
    }
    return result
}

const fruits = ["apple", "banana", "orange", "grape"];
const fruits2 = ["apple"];
const fruits3 = ["apple", "grape"];

isSame('Convert array should be "apple, banana, orange and grape"', convertArraytoString(fruits), "apple, banana, orange and grape")
isSame('Convert array should be "apple"', convertArraytoString(fruits2), "apple")
isSame('Convert array should be "apple and grape"', convertArraytoString(fruits3), "apple and grape")

// Write a function to split a string and convert it into an array of words

function splitString(inputString) {
    let result = []

    const length = inputString.length
    let tempWord = ""
    for (let index = 0; index < length; index++) {

        if (index === length - 1) {
            tempWord += inputString[index]
            result.push(tempWord)
        }
        else if (inputString[index] === " ") {
            result.push(tempWord);
            tempWord = ""
        }
        else
            tempWord += inputString[index]
    }
    return result
}

const splitStringTest1 = "Hello World"
const actualSplitString = splitString(splitStringTest1)

isSame('Array string 0 should be Hello', actualSplitString[0], "Hello")
isSame('Array string 1 should be World', actualSplitString[1], "World")
isSame('Array string 2 should be undefined', actualSplitString[2], undefined)

// Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length.

function addMatrix(matrixA, matrixB) {
    const lengthMatrixA = matrixA.length
    const lengthMatrixB = matrixB.length

    if (lengthMatrixA !== lengthMatrixB) {
        console.log("[ERROR] Matrix length is not same")
        return
    }

    let result = []
    for (let index = 0; index < lengthMatrixA; index++) {
        result.push(matrixA[index] + matrixB[index])
    }

    return result
}

const listAddArray1 = [1, 2, 3]
const listAddArray2 = [3, 2, 1]
const resultAddArray = addMatrix(listAddArray1, listAddArray2)

isSame('Result add matrix 0 should be 4', resultAddArray[0], 4)
isSame('Result add matrix 1 should be 4', resultAddArray[0], 4)
isSame('Result add matrix 2 should be 4', resultAddArray[0], 4)


// Write a function that adds an element to the end of an array. However, the element should only
// be added if it is not already in the array.

function addUniqItem(inputArray, newItem) {
    const length = inputArray.length
    for (let index = 0; index < length; index++) {
        if (newItem === inputArray[index]) {
            return inputArray
        }
    }
    inputArray.push(newItem)
    const result = inputArray
    return result
}

const newNumber = 4
const failAddUniqItem = addUniqItem([1, 2, 3], 1)
const passAddUniqItem = addUniqItem([1, 2, 3], newNumber)
isSame('No. 5, if input is exist, max length should be same', failAddUniqItem.length, 3)
isSame('No. 5, if input is not exist, max length should be +1', passAddUniqItem.length, 4)
isSame('No. 5, if input not exist, last array should be input', passAddUniqItem[passAddUniqItem.length - 1], newNumber)

// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only


function removeOddNumberInArray(inputArray) {
    let result = []
    const length = inputArray.length
    for (let index = 0; index < length; index++) {
        if (inputArray[index] % 2 === 0) {
            result.push(inputArray[index])
        }
    }
    return result
}

const arrayTest2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const resultRemoveOddNumber = removeOddNumberInArray(arrayTest2)
isSame('Function remove odd, length should be 5', resultRemoveOddNumber.length, 5)
isSame('Function remove odd, index 0 should be 2', resultRemoveOddNumber[0], 2)
isSame('Function remove odd, index 1 should be 4', resultRemoveOddNumber[1], 4)
isSame('Function remove odd, index 2 should be 6', resultRemoveOddNumber[2], 6)
isSame('Function remove odd, index 3 should be 8', resultRemoveOddNumber[3], 8)
isSame('Function remove odd, index 4 should be 10', resultRemoveOddNumber[4], 10)


console.log('---')
console.log(`Total tests: ${testCount}`)
console.log(`Passed: ${passCount}`,)
console.log(`Failed: ${failCount}`)
