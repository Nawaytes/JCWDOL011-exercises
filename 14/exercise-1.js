// check date is weekend or not

function isWeekend(date) {
  const day = new Date(date).getDay();
  return day === 6 || day === 0;
}

console.log(isWeekend("2023-08-15")); // => true
console.log(isWeekend("2023-08-13")); // => false
