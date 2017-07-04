import axios from 'axios';
import { API_KEY, LANGUAGE, THEMOVIEDB_API } from 'react-native-dotenv';

const config = {
  baseURL: THEMOVIEDB_API,
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
  timeout: 10000
};

export default axios.create(config);
