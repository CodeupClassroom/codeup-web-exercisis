const calculateAverageGrade = (studentList) => {
    let sum = 0
    for (let student of studentList){
        sum += student.grade;
    }
    let classAverage = sum / studentList.length
}

const findTopStudent = (studentList) => {
    let topStudent = 


    return topStudent;
};


(() => {
    // Array of student objects
    const students = [
        { id: 1, name: "Alice", grade: 90 },
        { id: 2, name: "Bob", grade: 85 },
        { id: 3, name: "Charlie", grade: 78 },
        { id: 4, name: "David", grade: 92 },
        { id: 5, name: "Eva", grade: 88 },
    ];
    // Display the average grade and the top student
    const averageGrade = calculateAverageGrade(students);
    const topStudent = findTopStudent(students);

    console.log(`Average Grade: ${averageGrade}`);
    console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
})();