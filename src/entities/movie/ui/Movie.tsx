import { Component } from 'react';

import ReactLogo from '../../../assets/reactJS-logo.png';
import { NOT_EXIST } from '../../../shared/const/const.ts';
import { Movie as MovieData } from '../../../shared/types/types.ts';
import { getMovie } from '../api/apiMovie.ts';

interface IMovieProps {
  data: MovieData;
}

interface IMovieState {
  description: string;
  genre: string;
}

class Movie extends Component<IMovieProps, IMovieState> {
  state = {
    description: '',
    genre: '',
  };

  async componentDidMount() {
    const movieData = await getMovie(this.props.data.imdbID);
    const genre = movieData.Genre.split(', ').slice(0, 2).join('/');
    const description = `${movieData.Plot.slice(0, 42)}...`;

    this.setState({
      description,
      genre,
    });
  }

  render() {
    const { Poster, Title, Year } = this.props.data;
    const { description, genre } = this.state;

    const isPosterExist = Poster !== NOT_EXIST;
    const poster = isPosterExist ? Poster : ReactLogo;

    return (
      <li className="shadow-pink-6100 w-64 cursor-pointer space-y-4 rounded-[40px] bg-neutral-950 p-2 text-gray-100 shadow-sm transition-all duration-200 hover:bg-neutral-900">
        <img
          className="h-80 w-full rounded-[32px] object-cover"
          src={poster}
          alt={`The poster of ${Title} film`}
        />
        <article className="h-full p-4">
          <h2 className="truncate text-xl text-gray-100">{Title}</h2>
          <div className="mt-1 text-gray-400">
            <p>{description}</p>
            <span>{genre}</span>
            <span>{Year}</span>
          </div>
        </article>
      </li>
    );
  }
}

export default Movie;
