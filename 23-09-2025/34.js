// 34. Given an array of movie objects, each with properties movieName, movieHero, movieGenre,
// and releaseDate, write a function to sort the array in ascending order of the releaseDate
// movies = [
// { movieName: 'Movie A', movieHero: 'Hero A', movieGenre: 'Action', releaseDate: '2020-01-15' },
// { movieName: 'Movie B', movieHero: 'Hero B', movieGenre: 'Drama', releaseDate: '2019-06-10' },
// { movieName: 'Movie C', movieHero: 'Hero C', movieGenre: 'Comedy', releaseDate: '2021-12-25'
// },
// { movieName: 'Movie D', movieHero: 'Hero D', movieGenre: 'Horror', releaseDate: '2018-04
// 05'},];

movies = [
  {
    movieName: "Movie A",
    movieHero: "Hero A",
    movieGenre: "Action",
    releaseDate: "2020-01-15",
  },
  {
    movieName: "Movie B",
    movieHero: "Hero B",
    movieGenre: "Drama",
    releaseDate: "2019-06-10",
  },
  {
    movieName: "Movie C",
    movieHero: "Hero C",
    movieGenre: "Comedy",
    releaseDate: "2021-12-25",
  },
  {
    movieName: "Movie D",
    movieHero: "Hero D",
    movieGenre: "Horror",
    releaseDate: "2018-04-05",
  },
];


console.log(movies.sort((a,b)=> new Date(a.releaseDate) - new Date(b.releaseDate)));