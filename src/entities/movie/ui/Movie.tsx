import { Component } from 'react';

import ReactLogo from '../../../assets/reactJS-logo.png';
import { NOT_EXIST } from '../../../shared/const/const.ts';
import { Movie as MovieData } from '../../../shared/types/types.ts';
import { getMovie } from '../api/apiMovie.ts';

interface IProductCardProps {
  data: MovieData;
}

interface IProductCardState {
  description: string;
  genre: string;
}

class Movie extends Component<IProductCardProps, IProductCardState> {
  state = {
    description: '',
    genre: '',
  };

  async componentDidMount() {
    const movieData = await getMovie(this.props.data.imdbID);
    const genre = movieData.Genre.split(', ').slice(0, 2).join('/');
    const description = `${movieData.Plot.slice(0, 55)}...`;

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
      <li className="w-80 cursor-pointer space-y-4 rounded-[40px] bg-neutral-950 p-2 text-gray-100 transition-all hover:bg-neutral-900">
        <img
          className="h-[470px] w-full rounded-[32px] object-cover"
          src={poster}
          alt={`The poster of ${Title} film`}
        />
        <article className="h-full p-4">
          <h2 className="truncate text-xl text-gray-100">{Title}</h2>
          <div className="mt-1 text-gray-400">
            <p>{description}</p>
            <div className="mt-4 flex justify-between">
              <span>{genre}</span>
              <span>{Year}</span>
            </div>
          </div>
        </article>
      </li>
    );
  }
}

export default Movie;
