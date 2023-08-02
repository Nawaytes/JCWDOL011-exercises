const summaryOfStudents = (students) => {
    let highestScore
    let lowestScore
    let averageScore
    let highestAge
    let lowestAge
    let averageAge
    let sumScore = 0
    let sumAge = 0
    students.forEach((student, index) => {
        if (index === 0) {
            highestScore = student.score
            lowestScore = student.score
            highestAge = student.age
            lowestAge = student.age
        }
        if (student.score > highestScore) {
            highestScore = student.score
        }
        if (student.score < lowestScore) {
            lowestScore = student.score
        }
        if (student.age > highestAge) {
            highestAge = student.age
        }
        if (student.age < lowestAge) {
            lowestAge = student.age
        }
        sumScore += student.score
        sumAge += student.age
    })
    averageScore = sumScore / studentList.length
    averageAge = sumAge / studentList.length
    return {
        score: {
            highest: highestScore,
            lowest: lowestScore,
            average: averageScore,
        },
        age: {
            highest: highestAge,
            lowest: lowestAge,
            average: averageAge,
        },
    };
};

const studentList = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 24,
        score: 85,
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 23,
        score: 92,
    },
    {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        age: 25,
        score: 78,
    },
    {
        name: "Emily Williams",
        email: "emily.williams@example.com",
        age: 20,
        score: 95,
    },
    {
        name: "Christopher Lee",
        email: "christopher.lee@example.com",
        age: 28,
        score: 88,
    },
];

const result = summaryOfStudents(studentList)
console.log(result)