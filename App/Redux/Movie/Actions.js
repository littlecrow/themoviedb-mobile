import axios from 'axios';
import ActionCreators from './ActionCreators';
import { API_KEY, LANGUAGE, API_MOVIE} from 'react-native-dotenv';

export const fetchDetail = (movieId) => async (dispatch) => {
  dispatch(ActionCreators.fetchMovieDetailRequested());
  try {
    const detail = await axios.get(API_MOVIE + movieId, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE
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
    const credits = await axios.get(API_MOVIE + movieId + '/credits', {
      params: {
        api_key: API_KEY
      }
    }).then(response => response.data);
    return dispatch(ActionCreators.fetchMovieCreditsFulfilled(credits));
  } catch (err) {
    return dispatch(ActionCreators.fetchMovieCreditsRejected(err));
  }
};

export default {
  fetchDetail,
  fetchCredits
};
