import { ApiMovieResponse } from '../../types/types';

/**
 * Converts the given runtime from seconds to hours and minutes format.
 *
 * @param {ApiMovieResponse['Runtime']} runtime - The runtime of the movie in seconds.
 * @return {string} - The converted runtime in the format: 'Xh Ym' or 'Ym' (if hours is 0).
 */
function convertSecsToHrsAndMins(runtime: ApiMovieResponse['Runtime']) {
  const timeSeconds = Number(runtime.slice(0, -4));
  const hrs = Math.floor(timeSeconds / 60);
  const min = Math.floor(timeSeconds % 60);
  const timeHorsMins = hrs !== 0 ? `${hrs}h ${min}m` : `${min}m`;

  return timeHorsMins;
}

export default convertSecsToHrsAndMins;
