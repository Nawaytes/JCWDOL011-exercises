// find most common character in a string

function mostCommonChar(str) {
  let indexChar = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i) - 97;
    indexChar[index]++;
  }
  Math.max(...indexChar);
  let maxIndex = indexChar.indexOf(Math.max(...indexChar));
  return String.fromCharCode(maxIndex + 97);
}

console.log(mostCommonChar("abca")); // => a
console.log(mostCommonChar("abbab")); // => b
console.log(mostCommonChar("ababcccc")); // => c
