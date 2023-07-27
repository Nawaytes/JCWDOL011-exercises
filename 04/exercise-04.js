// Create a function that can create a triangle pattern according to the height
function printTriangle(height) {
    let currentNumber = 1;
    for (let level = 1; level <= height; level++) {
        let tempResult = "";
        for (let column = 0; column < level; column++) {
            tempResult += `${String(currentNumber).padStart(2, 0)} `;
            currentNumber++;
        }
        console.log(tempResult);
    }
}
const height = 5;
console.log(`Result triagle with heighth: ${height}`)
printTriangle(5)

//Create a function that can loop the number of times according to the input we provide, and will replace multiples of
//3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".

function fizzBuzz(n) {
    for (let index = 1; index <= n; index++) {
        let result = "";
        if (index % 3 === 0) {
            result += "Fizz";
        }
        if (index % 5 === 0) {
            result += "Buzz";
        }
        console.log(`${index} => ${result}`);
    }
}
const inputFizzBuzz = 15;
console.log(`\nInput FizzBuzz Function with input: ${inputFizzBuzz}`)
fizzBuzz(inputFizzBuzz)

// Create a function to calculate Body Mass Index (BMI)
function checkBMI(weight, height) {
    const indexBMI = weight / height ** 2;
    if (indexBMI < 18.5) return "less weight";
    if (indexBMI >= 18.5 && indexBMI <= 24.9) return "ideal";
    if (indexBMI >= 25 && indexBMI <= 29.9) return "overweight";
    if (indexBMI >= 30 && indexBMI <= 39.0) return "very overweight";
    if (indexBMI > 39.9) return "obesity";
}
const weight = 66.6; //kg
const bodyHeight = 1.65; //meter
const resultBMI = checkBMI(weight, bodyHeight);
console.log(`\nResult BMI when weight:${weight} and height:${bodyHeight} is ${resultBMI}`)

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function removeOddNumberInArray(inputArray) {
    return inputArray.filter((element) => element % 2 === 0);
}
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const resultExercise4 = removeOddNumberInArray(inputArray);
console.log("\nFilter array even", inputArray);
console.log("Result", resultExercise4);

// Write a function to split a string and convert it into an array of words

const splitSentence = (sentence) => {
    return sentence.split(" ")
}
const inputSentence = "Hello World"
const resultExercise5 = splitSentence(inputSentence)
console.log(`\ninput: ${inputSentence}`)
console.log('output:', resultExercise5)