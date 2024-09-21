const Page = () => {
  const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Book", category: "Stationery", price: 15 },
    { name: "Phone", category: "Electronics", price: 800 },
    { name: "Pen", category: "Stationery", price: 5 },
  ];
  const electronicsCategory = [];
  products.map((product, index) => {
    return product.category == "Electronics"
      ? electronicsCategory.push(`${product.price}     `)
      : null;
  });
  return <h1>{electronicsCategory}</h1>;
};
export default Page;
