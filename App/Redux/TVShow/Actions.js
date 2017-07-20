import ActionCreators from './ActionCreators';
import Api, { getLanguage } from '../../Services/Api';

const API_MOVIE = 'tv/';

export const fetchDetail = (tvshowID) => async (dispatch) => {
  dispatch(ActionCreators.fetchTVShowDetailRequested());
  try {
    const detail = await Api.get(API_MOVIE + tvshowID, {
      params: {
        language: await getLanguage(),
      }
    }).then(response => response.data);
    return dispatch(ActionCreators.fetchTVShowDetailFulfilled(detail));
  } catch (err) {
    return dispatch(ActionCreators.fetchTVShowDetailRejected(err));
  }
};

export const fetchCredits = (tvshowID) => async (dispatch) => {
  dispatch(ActionCreators.fetchTVShowCreditsRequested());
  try {
    const credits = await Api.get(API_MOVIE + tvshowID + '/credits', {
      params: {
        language: await getLanguage(),
      }
    }).then(response => response.data);
    return dispatch(ActionCreators.fetchTVShowCreditsFulfilled(credits));
  } catch (err) {
    return dispatch(ActionCreators.fetchTVShowCreditsRejected(err));
  }
};

export default {
  fetchDetail,
  fetchCredits
};
