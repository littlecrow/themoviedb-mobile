import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_KEY, LANGUAGE, THEMOVIEDB_API } from 'react-native-dotenv';

export const getLanguage = async () => {
  try {
    const lang = await AsyncStorage.getItem("SEARCH_LANGUAGE");
    return lang;
  }
  catch (err) {
    return LANGUAGE;
  }
};

const config = {
  baseURL: THEMOVIEDB_API,
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
  timeout: 10000
};

export default axios.create(config);
