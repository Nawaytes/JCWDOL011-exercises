const isObjectSame = (object1, object2) => {
  const keyValues1 = Object.entries(object1);
  const keyValues2 = Object.entries(object2);
  if (keyValues1.length !== keyValues2.length) {
    console.log("[0]Object 1 & Object 2 is not same");
    return null;
  }
  const summary = keyValues1.map((keyValue) => {
    let isExist = false;
    keyValues2.forEach((keyValue2) => {
      if (keyValue[0] === keyValue2[0] && keyValue[1] == keyValue2[1]) {
        isExist = true;
      }
    });
    if (!isExist) {
      return false;
    }
    return true;
  });
  const isSame = summary.reduce((a, b) => a & b);
  if (isSame) console.log("[1]Object 1 & Object 2 is same");
  else console.log("[2]Object 1 & Object 2 is not same");
};

const input1 = {
  a: 1,
  b: 2,
};

const input2 = {
  a: 1,
  b: 3,
};

isObjectSame(input1, input1);
