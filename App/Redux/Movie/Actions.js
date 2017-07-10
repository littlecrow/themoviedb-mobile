import ActionCreators from './ActionCreators';
import Api, { getLanguage } from '../../Services/Api';

const API_MOVIE = 'movie/';

export const fetchDetail = (movieId) => async (dispatch) => {
  dispatch(ActionCreators.fetchMovieDetailRequested());
  try {
    const detail = await Api.get(API_MOVIE + movieId, {
      params: {
        language: await getLanguage(),
      }
    }).then(response => response.data);
    return dispatch(ActionCreators.fetchMovieDetailFulfilled(detail));
  } catch (err) {
    return dispatch(ActionCreators.fetchMovieDetailRejected(err));
  }
};

export const fetchCredits = (movieId) => async (dispatch) => {
  dispatch(ActionCreators.fetchMovieCreditsRequested());
  try {
    const credits = await Api.get(API_MOVIE + movieId + '/credits', {
      params: {
        language: await getLanguage(),
      }
    }).then(response => response.data);
    return dispatch(ActionCreators.fetchMovieCreditsFulfilled(credits));
  } catch (err) {
    return dispatch(ActionCreators.fetchMovieCreditsRejected(err));
  }
};

export const fetchReviews = (movieId) => async (dispatch) => {
  dispatch(ActionCreators.fetchMovieReviewsRequested());
  try {
    const reviews = await Api.get(API_MOVIE + movieId + '/reviews', {
      params: {
        language: await getLanguage(),
      }
    }).then(response => response.data);
    return dispatch(ActionCreators.fetchMovieReviewsFulfilled(reviews));
  } catch (err) {
    return dispatch(ActionCreators.fetchMovieReviewsRejected(err));
  }
};

export default {
  fetchDetail,
  fetchCredits,
  fetchReviews
};
