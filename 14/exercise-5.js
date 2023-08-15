function sortAlphabetically(str) {
  let indexChar = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i) - 97;
    indexChar[index]++;
  }

  let result = "";
  for (let i = 0; i < indexChar.length; i++) {
    if (indexChar[i] > 0) {
      result += String.fromCharCode(i + 97).repeat(indexChar[i]);
    }
  }
  return result;
}

console.log(sortAlphabetically("hello")); // => ehllo
console.log(sortAlphabetically("whiteboard")); // => abdehiortw
console.log(sortAlphabetically("one")); // => eno
console.log(sortAlphabetically("")); // => ""
console.log(sortAlphabetically("cba")); // => abc
