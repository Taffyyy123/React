const Page = () => {
  const movies = [
    { title: "Movie A", rating: 6.8 },
    { title: "Movie B", rating: 7.5 },
    { title: "Movie C", rating: 8.2 },
    { title: "Movie D", rating: 5.5 },
  ];
  let avarageRating = 0;
  let time = 0;
  movies.map((movie, index) => {
    return movie.rating > 7 ? ((avarageRating += movie.rating), time++) : null;
  });
  return <h1>{avarageRating / time}</h1>;
};
export default Page;
