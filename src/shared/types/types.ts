export type Movie = Readonly<{
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}>;

export type MovieList = Readonly<Array<Movie>>;

export type ApiResponse = Readonly<{
  Response: 'True';
  Search: MovieList;
  totalResults: string;
}>;

export type ApiErrorResponse = Readonly<{
  Error: 'Incorrect IMDb ID.';
  Response: 'False';
}>;
