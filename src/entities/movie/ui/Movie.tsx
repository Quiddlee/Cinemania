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
    const description = `${movieData.Plot.slice(0, 70)}...`;

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
      <li className="grid w-80 cursor-pointer gap-4 rounded-[2.5rem] bg-neutral-950 p-4 text-gray-100 transition-all hover:bg-neutral-900">
        <img
          className="h-[430px] rounded-[2rem] object-cover"
          src={poster}
          alt={`The poster of ${Title} film`}
        />
        <article className="p-2">
          <h2 className="truncate text-xl">{Title}</h2>
          <p className="mt-1 text-gray-400">{description}</p>
          <div className="mt-4 flex justify-between">
            <span className="text-gray-400">{genre}</span>
            <span className="text-gray-400">{Year}</span>
          </div>
        </article>
      </li>
    );
  }
}

export default Movie;
