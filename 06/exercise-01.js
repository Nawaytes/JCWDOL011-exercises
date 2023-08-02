const summaryOfStudents = (students) => {
  let highestScore;
  let lowestScore;
  let averageScore;
  let oldestAge;
  let youngestAge;
  let averageAge;
  let sumScore = 0;
  let sumAge = 0;
  const now = new Date();

  students.forEach((student, index) => {
    const studentAge = now - new Date(student.age);
    const studentYears = studentAge / (1000 * 3600 * 24 * 365);

    if (index === 0) {
      highestScore = student.score;
      lowestScore = student.score;
      oldestAge = studentYears;
      youngestAge = studentYears;
    }
    if (student.score > highestScore) {
      highestScore = student.score;
    }
    if (student.score < lowestScore) {
      lowestScore = student.score;
    }
    if (studentYears > oldestAge) {
      oldestAge = studentYears;
    }
    if (studentYears < youngestAge) {
      youngestAge = studentYears;
    }
    sumScore += student.score;
    sumAge += studentYears;
  });

  averageScore = sumScore / students.length;
  averageAge = sumAge / students.length;

  return {
    score: {
      highest: highestScore,
      lowest: lowestScore,
      average: averageScore,
    },
    age: {
      highest: oldestAge,
      lowest: youngestAge,
      average: averageAge,
    },
  };
};

const studentList = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    age: "1996-05-12",
    score: 85,
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: "1995-07-22",
    score: 92,
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    age: "1994-11-10",
    score: 78,
  },
  {
    name: "Emily Williams",
    email: "emily.williams@example.com",
    age: "1994-11-10",
    score: 95,
  },
  {
    name: "Christopher Lee",
    email: "christopher.lee@example.com",
    age: "1993-01-18",
    score: 88,
  },
];

const result = summaryOfStudents(studentList);
console.log(result);
  