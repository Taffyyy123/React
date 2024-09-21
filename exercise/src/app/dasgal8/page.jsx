const Page = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sum = [];
  numbers.map((num, index) => {
    return num % 2 == 0 ? sum.push(`${num * num} `) : null;
  });
  return <h1>{sum}</h1>;
};
export default Page;
