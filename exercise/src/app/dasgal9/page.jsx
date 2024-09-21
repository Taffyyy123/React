const Page = () => {
  const cars = [
    { brand: "Toyota", model: "Corolla", price: 20000 },
    { brand: "Tesla", model: "Model S", price: 80000 },
    { brand: "Honda", model: "Civic", price: 25000 },
    { brand: "BMW", model: "X5", price: 60000 },
  ];
  const arr = [];
  cars.map((car, index) => {
    return car.price > 30000 ? arr.push(`(${car.brand} ${car.model}), `) : null;
  });
  return <h1>{arr}</h1>;
};
export default Page;
