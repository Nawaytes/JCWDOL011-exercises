// find GCD of two numbers

function gcd(a, b) {
  let factorialA = [];
  let factorialB = [];

  let i = 1;
  while (i <= a) {
    if (a % i === 0) {
      factorialA.push(i);
    }
    i++;
  }

  i = 1;
  while (i <= b) {
    if (b % i === 0) {
      factorialB.push(i);
    }
    i++;
  }

  let commonFactor = [];
  let j = 0;
  while (j < factorialA.length) {
    let k = 0;
    while (k < factorialB.length) {
      if (factorialA[j] === factorialB[k]) {
        commonFactor.push(factorialA[j]);
      }
      k++;
    }
    j++;
  }

  return commonFactor[commonFactor.length - 1];
}

console.log(gcd(8, 12)); // => 4
console.log(gcd(15, 10)); // => 5
console.log(gcd(9, 2)); // => 1
console.log(gcd(7, 5)); // => 1
