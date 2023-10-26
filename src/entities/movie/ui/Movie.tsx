import { Component } from 'react';

import { Movie as MovieData } from '../../../shared/types/types.ts';

interface IProductCardProps {
  data: MovieData;
}

class Movie extends Component<IProductCardProps> {
  componentDidMount() {}

  render() {
    const { Poster, Title, Type, Year } = this.props.data;

    return (
      <li className="grid w-64 cursor-pointer gap-4 rounded-[2.5rem] bg-neutral-950 p-4 text-gray-100 transition-all hover:bg-neutral-900">
        <img
          className="rounded-[2rem]"
          src={Poster}
          alt={`The poster of ${Title} film`}
        />
        <article className="truncate p-2">
          <h2 className="truncate text-xl">{Title}</h2>
          <p className="truncate text-gray-400">{Year}</p>
          <p className="text-gray-400">{Type}</p>
        </article>
      </li>
    );
  }
}

export default Movie;
