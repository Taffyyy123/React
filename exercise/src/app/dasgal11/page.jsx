const Page = () => {
  const students = [
    { name: "John", subject: "Math", grade: 85 },
    { name: "Jane", subject: "Math", grade: 92 },
    { name: "Peter", subject: "English", grade: 78 },
    { name: "Lucy", subject: "English", grade: 88 },
    { name: "Mike", subject: "Math", grade: 75 },
    { name: "Sophia", subject: "History", grade: 89 },
    { name: "Tom", subject: "History", grade: 82 },
  ];
  let object = { mathGrade: 0, englishGrade: 0, historyGrade: 0 };
  let peoples1 = 0;
  let peoples2 = 0;
  let peoples3 = 0;
  students.map((student, index) => {
    student.subject == "Math"
      ? ((object.mathGrade += student.grade), peoples1++)
      : null;
    student.subject == "English"
      ? ((object.englishGrade += student.grade), peoples2++)
      : null;
    student.subject == "History"
      ? ((object.historyGrade += student.grade), peoples3++)
      : null;
  });
  return (
    <div>
      <h1>Math:{object.mathGrade / peoples1}</h1>
      <h1>English:{object.englishGrade / peoples2}</h1>
      <h1>History:{object.historyGrade / peoples3}</h1>
    </div>
  );
};
export default Page;
