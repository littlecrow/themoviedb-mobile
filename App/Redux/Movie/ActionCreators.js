import ActionTypes from './ActionTypes';

export const fetchMovieDetailRequested = () => ({
  type: ActionTypes.FETCH_MOVIE_DETAIL_REQUESTED
});

export const fetchMovieDetailFulfilled = (movie) => ({
  type: ActionTypes.FETCH_MOVIE_DETAIL_FULFILLED,
  payload: movie
});

export const fetchMovieDetailRejected = (err) => ({
  type: ActionTypes.FETCH_MOVIE_DETAIL_REJECTED,
  payload: err,
  error: true
});

export const fetchMovieCreditsRequested = () => ({
  type: ActionTypes.FETCH_MOVIE_CREDITS_REQUESTED
});

export const fetchMovieCreditsFulfilled = (credits) => ({
  type: ActionTypes.FETCH_MOVIE_CREDITS_FULFILLED,
  payload: credits
});

export const fetchMovieCreditsRejected = (err) => ({
  type: ActionTypes.FETCH_MOVIE_CREDITS_REJECTED,
  payload: err,
  error: true
});


export const fetchMovieReviewsRequested = () => ({
  type: ActionTypes.FETCH_MOVIE_REVIEWS_REQUESTED
});

export const fetchMovieReviewsFulfilled = (credits) => ({
  type: ActionTypes.FETCH_MOVIE_REVIEWS_FULFILLED,
  payload: credits
});

export const fetchMovieReviewsRejected = (err) => ({
  type: ActionTypes.FETCH_MOVIE_REVIEWS_REJECTED,
  payload: err,
  error: true
});


export default {
  fetchMovieDetailRequested,
  fetchMovieDetailFulfilled,
  fetchMovieDetailRejected,
  fetchMovieCreditsRequested,
  fetchMovieCreditsFulfilled,
  fetchMovieCreditsRejected,
  fetchMovieReviewsRequested,
  fetchMovieReviewsFulfilled,
  fetchMovieReviewsRejected,
};
