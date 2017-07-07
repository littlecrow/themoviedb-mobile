import ActionTypes from './ActionTypes';

export const isSearching = (bool) => ({
  type: ActionTypes.SET_KEYWORD,
  payload: bool
});

export const fetchSearchMovieRequested = () => ({
  type: ActionTypes.FETCH_SEARCH_MOVIE_REQUESTED
});

export const fetchSearchMovieFulfilled = (movies) => ({
  type: ActionTypes.FETCH_SEARCH_MOVIE_FULFILLED,
  payload: movies
});

export const fetchSearchMovieRejected = (err) => ({
  type: ActionTypes.FETCH_SEARCH_MOVIE_REJECTED,
  payload: err
});

export const emptySearchMovies = () => ({
  type: ActionTypes.EMPTY_SEARCH_MOVIES
});

export default {
  isSearching,
  fetchSearchMovieRequested,
  fetchSearchMovieFulfilled,
  fetchSearchMovieRejected,
  emptySearchMovies
};
