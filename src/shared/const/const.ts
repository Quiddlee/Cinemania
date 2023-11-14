import { urlParams } from '../types/enums.ts';

export const API_KEY = 'dbb72d83';
export const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
export const API_URL_NO_KEY = 'https://www.omdbapi.com/';
export const QUERY_FALLBACK = 'all';
export const NOT_EXIST = 'N/A';
export const LOCAL_STORAGE_SEARCH_QUERY = 'search-query';
export const DEFAULT_PAGE = 1;
export const DEFAULT_MOVIES_PER_PAGE = 10;
export const APP_TITLE = 'Cinemania | Dive into Movie Wonderland';
export const LOADING_STATE = 'loading';
export const SCROLL_TOP_DURATION = 300;
export const QUERY_PARAMS_INIT = {
  [urlParams.PAGE]: String(DEFAULT_PAGE),
  [urlParams.MOVIES_PER_PAGE]: String(DEFAULT_MOVIES_PER_PAGE),
};
