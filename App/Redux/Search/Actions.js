import axios from 'axios';
import { API_SEARCH, API_KEY, LANGUAGE } from 'react-native-dotenv';
import ActionCreators from './ActionCreators';

const fetchSearchMovie = (keyword) => async (dispatch) => {
  dispatch(ActionCreators.fetchSearchMovieRequested());
  try {
    const result = await axios.get(
      API_SEARCH + 'movie',
      {
        params: {
          api_key: API_KEY,
          language: LANGUAGE,
          query: keyword,
          page: 1,
          include_adult: false
        }
      }).then(response => response.data.results);

    return dispatch(ActionCreators.fetchSearchMovieFulfilled(result));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchSearchMovieRejected());
  }
};

export default {
  fetchSearchMovie
};
