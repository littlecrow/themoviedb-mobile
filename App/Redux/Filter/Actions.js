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
  dispatch(ActionCreators.fetchPopularMoviesRequested());
  try {
    const movies = axios.get(
      API_POPULAR
    )
  } catch (err) {

  }
};
