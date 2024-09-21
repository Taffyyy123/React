const Page = () => {
  const students = [
    { name: "Sarah", age: 18 },
    { name: "Mike", age: 21 },
    { name: "Jake", age: 20 },
    { name: "Emma", age: 19 },
  ];
  let avarageAge = 0;
  let time = 0;
  students.map((student, index) => {
    return (avarageAge += student.age), time++;
  });

  return <h1>{avarageAge / time}</h1>;
};
export default Page;
