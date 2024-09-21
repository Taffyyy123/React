const Page = () => {
  const names = ["John", "Rebecca", "Sam", "Alexander", "Kate"];
  const higherFiveLetters = [];
  names.map((name, index) => {
    return 5 < name.length ? higherFiveLetters.push(`${name} `) : null;
  });
  return <h1>{higherFiveLetters}</h1>;
};
export default Page;
