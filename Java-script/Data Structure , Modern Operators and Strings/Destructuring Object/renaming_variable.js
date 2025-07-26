const student = {
  id: 101,
  grade: 'A'
};
const { id: studentId, grade: studentGrade } = student;
console.log(studentId);   // 101
console.log(studentGrade); // 'A'