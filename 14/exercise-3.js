//write LCM of two numbers use do while loop

function lcm(a, b) {
  const maxNumber = a * b * 2;
  const multipleA = [];
  const multipleB = [];
  let tempA = a;
  let tempB = b;
  do {
    multipleA.push(tempA);
    tempA += a;
  } while (tempA <= maxNumber);

  do {
    multipleB.push(tempB);
    tempB += b;
  } while (tempB <= maxNumber);
  let commonMultiple = [];
  let i = 0;
  do {
    let j = 0;
    do {
      if (multipleA[i] === multipleB[j]) {
        commonMultiple.push(multipleA[i]);
      }
      j++;
    } while (j < multipleB.length);
    i++;
  } while (i < multipleA.length);

  return commonMultiple[0];
}

console.log(lcm(8, 12)); // => 24
console.log(lcm(15, 10)); // => 30
console.log(lcm(9, 2)); // => 18
