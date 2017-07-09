import ActionTypes from './ActionTypes';

export const checkIsSearching = (bool) => ({
  type: ActionTypes.CHECK_IS_SEARCHING,
  payload: bool
});

export const fetchSearchMovieRequested = (keyword) => ({
  type: ActionTypes.FETCH_SEARCH_MOVIE_REQUESTED,
  payload: keyword
});

export const fetchSearchMovieFulfilled = (movies) => ({
  type: ActionTypes.FETCH_SEARCH_MOVIE_FULFILLED,
  payload: movies
});

export const fetchSearchMovieRejected = (err) => ({
  type: ActionTypes.FETCH_SEARCH_MOVIE_REJECTED,
  payload: err
});

export const resetMovies = () => ({
  type: ActionTypes.RESET_MOVIES
});

export const resetPage = () => ({
  type: ActionTypes.RESET_PAGE
});

export default {
  checkIsSearching,
  fetchSearchMovieRequested,
  fetchSearchMovieFulfilled,
  fetchSearchMovieRejected,
  resetMovies,
  resetPage
};
