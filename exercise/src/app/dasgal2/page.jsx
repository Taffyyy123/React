const Page = () => {
  const employees = [
    { name: "John", salary: 60000 },
    { name: "Jane", salary: 45000 },
    { name: "Alex", salary: 75000 },
    { name: "Linda", salary: 30000 },
  ];
  const higherSalary = [];

  employees.map((employee, index) => {
    return 50000 < employee.salary
      ? higherSalary.push(`${employee.name} `)
      : null;
  });

  return <h1>{higherSalary}</h1>;
};
export default Page;
