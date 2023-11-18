import { urlParams } from '../types/enums.ts';

export const QUERY_FALLBACK = 'all';
export const NOT_EXIST = 'N/A';
export const LOCAL_STORAGE_SEARCH_QUERY = 'search-query';
export const DEFAULT_PAGE = 1;
export const MOVIES_PER_PAGE = 10;
export const APP_TITLE = 'Cinemania | Dive into Movie Wonderland';
export const LOADING_STATE = 'loading';
export const SCROLL_TOP_DURATION = 300;
export const QUERY_PARAMS_INIT = {
  [urlParams.PAGE]: String(DEFAULT_PAGE),
  [urlParams.MOVIES_PER_PAGE]: String(MOVIES_PER_PAGE),
};
