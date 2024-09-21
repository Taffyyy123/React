const Page = () => {
  const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 16 },
  ];
  const lowerAgePersons = [];
  people.map((person, index) => {
    return 18 > person.age ? lowerAgePersons.push(`${person.name}   `) : null;
  });

  return <h1>{lowerAgePersons}</h1>;
};
export default Page;
