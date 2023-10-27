import { Component, createRef, MouseEvent } from 'react';

import colors from 'tailwindcss/colors';

import ReactLogo from '../../../assets/reactJS-logo.png';
import { NOT_EXIST } from '../../../shared/const/const.ts';
import { Movie as MovieData } from '../../../shared/types/types.ts';
import { getMovie } from '../api/apiMovie.ts';

interface IMovieProps {
  data: MovieData;
  delay: number;
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

  movieRef = createRef<HTMLDivElement>();

  containerRef = createRef<HTMLLIElement>();

  async componentDidMount() {
    if (this.containerRef.current) {
      this.containerRef.current.style.animationDelay = `0.${String(
        this.props.delay,
      )}s`;
    }

    const movieData = await getMovie(this.props.data.imdbID);
    const genre = movieData.Genre.split(', ').slice(0, 2).join('/');
    const description = `${movieData.Plot.slice(0, 38)}...`;

    this.setState({
      description,
      genre,
    });
  }

  handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = this.movieRef.current?.getBoundingClientRect();

    if (rect) {
      const pointerX = e.clientX - rect.left;
      const pointerY = e.clientY - rect.top;

      if (this.movieRef.current)
        this.movieRef.current.style.background = `radial-gradient(circle at ${pointerX}px ${pointerY}px, ${colors.pink['950']} 0%, ${colors.neutral['950']} 160px)`;
    }
  };

  handleMouseOut = () => {
    if (this.movieRef.current) this.movieRef.current.style.background = '';
  };

  render() {
    const { Poster, Title, Year } = this.props.data;
    const { description, genre } = this.state;

    const isPosterExist = Poster !== NOT_EXIST;
    const poster = isPosterExist ? Poster : ReactLogo;

    return (
      <li
        ref={this.containerRef}
        className="w-64 animate-springish cursor-pointer overflow-hidden rounded-[40px] bg-neutral-950 text-gray-100 transition-all duration-200">
        <div
          ref={this.movieRef}
          onMouseMove={this.handleMouseMove}
          onMouseOut={this.handleMouseOut}
          onBlur={this.handleMouseOut}
          className="h-full space-y-4 rounded-[32px] p-2">
          <img
            className="h-80 w-full rounded-[32px] object-cover"
            src={poster}
            alt={`The poster of ${Title} film`}
          />
          <article className="h-full p-4">
            <h2 className="truncate text-xl text-gray-100">{Title}</h2>
            <div className="mt-2 grid text-gray-400">
              <p className="mb-2">{description}</p>
              <span>{genre}</span>
              <span>{Year}</span>
            </div>
          </article>
        </div>
      </li>
    );
  }
}

export default Movie;
