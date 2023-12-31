import { NOT_EXIST } from '../../shared/const/const';
import {
  ApiMovieResponse,
  MovieList as TMovieList,
} from '../../shared/types/types';

export const mockMovieItem = {
  Year: '2023',
  imdbID: 'tt1016150',
  Title: 'test',
  Poster: '/test',
  Type: 'test',
};

export const mockMovies: TMovieList = [
  {
    Year: '2023',
    imdbID: 'tt1016150',
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
  {
    Year: '2023',
    imdbID: crypto.randomUUID(),
    Title: 'test',
    Poster: '/test',
    Type: 'test',
  },
];

export const mockMovieDetails: ApiMovieResponse = {
  Year: '2023',
  Type: 'test',
  Poster: '/test',
  Title: 'test',
  imdbID: 'test',
  Response: 'True',
  Director: 'test',
  imdbVotes: 'test',
  imdbRating: 'test',
  Actors: 'test',
  Released: 'test',
  Genre: 'test',
  Plot: 'test',
  Language: 'test',
  Country: 'test',
  Awards: 'test',
  Metascore: 'test',
  Writer: 'test',
  Production: 'test',
  Website: 'test',
  BoxOffice: 'test',
  DVD: 'test',
  Runtime: '101 min',
  Rated: 'test',
  Ratings: [],
};

export const mockMovieDetailsNoPoster = {
  ...mockMovieDetails,
  Poster: NOT_EXIST,
};
