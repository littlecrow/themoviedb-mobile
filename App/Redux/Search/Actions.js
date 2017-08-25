import axios from 'axios';
import { THEMOVIEDB_API, API_KEY } from 'react-native-dotenv';
import ActionCreators from './ActionCreators';

const fetchSearching = (keyword) => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchSearchingRequested(keyword));
  try {
    const result = await axios.get(
      THEMOVIEDB_API + 'search/movie',
      {
        params: {
          api_key: API_KEY,
          query: getState().search.keyword,
          page: getState().search.page
        }
      }).then(response => response.data.results);

    return dispatch(ActionCreators.fetchSearchingFulfilled(result));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchSearchingRejected());
  }
};

export default {
  fetchSearching
};
