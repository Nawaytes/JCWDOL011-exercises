// Write a code to display the multiplication table of a given integer.
console.log(
    "Write a code to display the multiplication table of a given integer"
);
const NUM_A = 9;

for (let i = 1; i <= 10; i++) {
    console.log(`${NUM_A} x ${i} = ${NUM_A * i}`);
}

// Write a code to check whether a string is a palindrome or not.
console.log("\nWrite a code to check whether a string is a palindrome or not");
const rightPalindrome = "kasur nababan rusak";
const wrongPaalidrome = "suka-suka";
const words = wrongPaalidrome;
let isPalindrome = true;

for (let i = 0; i < words.length; i++) {
    if (words[i] !== words[words.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) console.log(`kata/kalimat "${words}" adalah palindrome`);
else console.log(`kata/kalimat "${words}" adalah bukan palindrome`);

// Write a code to convert centimeter to kilometer.
console.log("\nWrite a code to convert centimeter to kilometer");
const lengthInCm = 100_000;
const lengthInKm = lengthInCm / 100000;

console.log(`Convert ${lengthInCm}cm = ${lengthInKm}Km`);

// Write a code to format number as currency (IDR)

console.log(`\nWrite a code to format number as currency (IDR)`);

const amount = "150000"; // Rp. 15.000,00
const splitAmount = amount.split("").reverse();
let result = "";
console.log(`input: ${amount}`);
for (let i = 0; i < splitAmount.length; i++) {
    if (i % 3 === 0 && i !== 0) {
        result += `.${splitAmount[i]}`;
    } else result += `${splitAmount[i]}`;
}
console.log(`Result = Rp. ${result.split("").reverse().join("")},00`);

// Write a code to remove the first occurrence of a given “search string” from a string
console.log(
    "\nWrite a code to remove the first occurrence of a given “search string” from a string"
);
const fullString = "Hello world";
const searchString = "ell";
const splitString = fullString.split(searchString).join("")
console.log(`full string: ${fullString}`)
console.log(`search string: ${searchString}`)
console.log(`result is: ${splitString}`);

// Write a code to capitalize the first letter of each word in a string
console.log("\nWrite a code to capitalize the first letter of each word in a string")
const someRandomWords = "Hari ini adalah hari rabu"
const splitSomeRandomWords = someRandomWords.split(" ")
let resultText = ''
for (let i = 0; i < splitSomeRandomWords.length; i++) {
    splitWord = splitSomeRandomWords[i].split("")
    let dumpLetters = ""
    for (let j = 0; j < splitWord.length; j++) {
        if (j !== 0)
            dumpLetters += splitWord[j]
        else
            dumpLetters += splitWord[j].toUpperCase()
    }
    resultText += `${dumpLetters} `
}
console.log(`input : ${someRandomWords}`)
console.log(`output: ${resultText}`)

// Write a code to reverse a string.
console.log("\nWrite a code to reverse a string")

const stringBeforeReverse = "Hello world!"
const reverseString = stringBeforeReverse.split("").reverse().join("")

console.log(`input : ${stringBeforeReverse}`)
console.log(`output: ${reverseString}`)

// Write a code to swap the case of each character from string
console.log("\nWrite a code to swap the case of each character from string");
const input1 = "The QuiCk BrOwN Fox";

const letters = input1.split("");
let dumpLetters = "";
for (i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
        dumpLetters += letters[i].toLowerCase();
    } else {
        dumpLetters += letters[i].toUpperCase();
    }
}
console.log(`raw string   : ${input1}`);
console.log(`result string: ${dumpLetters}`);

// Write a code to find the largest of two given integers
console.log("\nWrite a code to find the largest of two given integers");
const numberA = 10;
const numberB = 9;
const result3 = Math.max(numberA, numberB);

console.log(
    `The biggest number between ${numberA} and ${numberB} is ${result3}`
);

// Write a conditional statement to sort three numbers
console.log("\nWrite a conditional statement to sort three numbers");
const number3A = 100;
const number3B = 5;
const number3C = 10;

let index0 = null;
let index1 = null;
let index2 = null;

if (number3A < number3B) {
    index2 = number3B;
    index1 = number3A;
} else {
    index2 = number3A;
    index1 = number3B;
}

if (index2 > number3C) {
    if (index1 > number3C) {
        index0 = number3C;
    } else {
        index0 = number3B;
        index1 = number3C;
    }
} else {
    index2 = number3C;
    index1 = number3B;
    index0 = number3A;
}
console.log(`input : ${number3A},${number3B},${number3C}`);
console.log(`result: ${index0}, ${index1}, ${index2}`);

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.

console.log(
    "\nWrite a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type."
);

const inputAny = [];
console.log(`result of number 4 is`);
switch (typeof inputAny) {
    case "string":
        console.log("1");
        break;
    case "number":
        console.log("2");
        break;
    default:
        console.log("3");
        break;
}

// Write a code to change every letter a into * from a string of input

console.log(
    "\nWrite a code to change every letter a into * from a string of input"
);

const input5 = `An apple a day keeps the doctor away`;
const result5 = input5.replace(/a/gi, "*");

console.log(`String: "${input5}" -> "${result5}"`);
