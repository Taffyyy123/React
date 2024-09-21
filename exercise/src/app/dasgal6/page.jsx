const Page = () => {
  const cart = [
    { name: "Apple", quantity: 5, price: 2 },
    { name: "Banana", quantity: 1, price: 1 },
    { name: "Orange", quantity: 3, price: 3 },
    { name: "Grapes", quantity: 1, price: 4 },
  ];
  let allPrice = 0;
  cart.map((value, index) => {
    return value.quantity > 2
      ? (allPrice += value.quantity * value.price)
      : null;
  });
  return <h1>{allPrice}</h1>;
};
export default Page;
