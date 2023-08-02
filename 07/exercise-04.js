function swapKeyValue(objArr) {
  return objArr.map((obj) => {
    const key = Object.keys(obj);
    const value = Object.values(obj);
    return key.map((k, i) => {
      return {
        [value[i]]: k,
      };
    });
  });
}

const input = [
  { name: "John", address: "St. Petersburg" },
  { name: "Jane", address: "Moscow" },
  { name: "Marcus", address: "Rome" },
];

const result = swapKeyValue(input);

console.log(result);
