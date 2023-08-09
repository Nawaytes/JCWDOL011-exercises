const mergeObj = (obj1, obj2) => {
  const keys2 = Object.keys(obj2);
  return [...obj1, ...obj2];
};

const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const arr2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

const result = mergeObj(arr1, arr2);
console.log(result);
