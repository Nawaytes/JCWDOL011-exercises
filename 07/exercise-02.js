const getIntersection = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const intersectionKeys = keys1.filter((key) => keys2.includes(key));
  const intersection = intersectionKeys.map((key) => {
    return {
      [key]: obj1[key],
    };
  });
  return intersection;
};

const object1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const object2 = {
  b: 2,
  d: 4,
  f: 6,
};

const intersection = getIntersection(object1, object2);
console.log(intersection);
