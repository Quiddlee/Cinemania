import { MouseEvent, useRef } from 'react';

import ReactLogo from '../../../assets/reactJS-logo.png';
import { NOT_EXIST } from '../../../shared/const/const.ts';
import createRadialHover from '../../../shared/lib/helpers/animateRadialHover.ts';
import { Movie as MovieData } from '../../../shared/types/types.ts';

interface IMovieProps {
  data: MovieData;
  delay: number;
}

// TODO - divide the component into smaller ones

function Movie({ data, delay }: IMovieProps) {
  // const [description, setDescription] = useState('');
  // const [genre, setGenre] = useState('');

  const movieRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLLIElement>(null);

  const { Poster, Title, Year } = data;

  const isPosterExist = Poster !== NOT_EXIST;
  const poster = isPosterExist ? Poster : ReactLogo;
  const animationDelay = `0.${String(delay)}s`;

  const [radialHover, cleanUp] = createRadialHover();

  const handleMouseMove = (e: MouseEvent) => {
    if (movieRef.current) radialHover(movieRef.current, e);
  };

  const handleMouseOut = () => {
    if (movieRef.current) cleanUp(movieRef.current as HTMLDivElement);
  };

  // useEffect(() => {
  //   async function fetchMovies() {
  //     const movieData = await getMovie(data.imdbID);
  //     const slicedGenre = movieData.Genre.split(', ').slice(0, 2).join('/');
  //     const slicedDescription = `${movieData.Plot.slice(0, 38)}...`;
  //
  //     setDescription(slicedDescription);
  //     setGenre(slicedGenre);
  //   }
  //
  //   void fetchMovies();
  // }, [data.imdbID]);

  return (
    <li
      style={{
        animationDelay,
      }}
      ref={containerRef}
      className="w-64 animate-springish cursor-pointer overflow-hidden rounded-[40px] bg-neutral-950 text-gray-100 transition-all duration-200">
      <div
        ref={movieRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
        className="h-full space-y-4 rounded-[32px] p-2">
        <img
          className="h-80 w-full rounded-[32px] object-cover"
          src={poster}
          alt={`The poster of ${Title} film`}
        />
        <article className="h-full p-4">
          <h2 className="truncate text-xl text-gray-100">{Title}</h2>
          <div className="mt-2 grid text-gray-400">
            {/* <p className="mb-2">{description}</p> */}
            {/* <span>{genre}</span> */}
            <span>{Year}</span>
          </div>
        </article>
      </div>
    </li>
  );
}
export default Movie;
