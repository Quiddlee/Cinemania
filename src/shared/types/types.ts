export type Movie = Readonly<{
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}>;

export type MovieList = Readonly<Array<Movie>>;

export type ApiMovieListResponse = Readonly<{
  Response: 'True';
  Search: MovieList;
  totalResults: string;
}>;

export type ApiErrorResponse = Readonly<{
  Error: 'Incorrect IMDb ID.';
  Response: 'False';
}>;

export type ApiRating = Readonly<{
  Source: string;
  Value: string;
}>;

export type ApiMovieResponse = Readonly<{
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: ApiRating[];
  Released: string;
  Response: 'True';
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}>;
