import axios from 'axios';
import {
  API_KEY,
  LANGUAGE,
  API_POPULAR,
  API_TOP_RATED
} from 'react-native-dotenv';
import ActionCreators from './ActionCreators';
import Constant from './Constant';

const handleAPI = () => async (dispatch, getState) => {
  dispatch(ActionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(
      getState().movies.filter === Constant.POPULAR_MOVIES ? API_POPULAR : API_TOP_RATED,
      {
        params: {
          api_key: API_KEY,
          language: LANGUAGE,
          page: getState().movies.page
        }
      }).then(response => response.data.results);

    return dispatch(ActionCreators.moviesFetchFulfilled(movies));
  } catch (err) {
    console.log('Error: ', err);
    return dispatch(ActionCreators.moviesFetchRejected(err));
  }
};

export const fetchMovies = () => {
  return handleAPI();
};

export default {
  fetchMovies
};
