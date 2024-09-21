const Page = () => {
  const users = [
    { id: 1, username: "john123", email: "john@gmail.com" },
    { id: 2, username: "alex456", email: "alex@yahoo.com" },
    { id: 3, username: "kate789", email: "kate@gmail.com" },
  ];
  const arr = [];
  users.map((user, index) => {
    user.email.includes("@gmail.com") ? arr.push(`${user.username} `) : null;
  });
  return <h1>{arr}</h1>;
};
export default Page;
