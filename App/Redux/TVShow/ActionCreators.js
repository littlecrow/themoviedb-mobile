import ActionTypes from './ActionTypes';

export const setTVShowDetail = (tvShow) => ({
  type: ActionTypes.SET_TV_SHOW_DETAIL,
  payload: tvShow
});

export const emptyCurrentTVShow = () => ({
  type: ActionTypes.EMPTY_CURRENT_TV_SHOW
});

export const fetchTVShowDetailRequested = () => ({
  type: ActionTypes.FETCH_TV_SHOW_DETAIL_REQUESTED
});

export const fetchTVShowDetailFulfilled = (tvShow) => ({
  type: ActionTypes.FETCH_TV_SHOW_DETAIL_FULFILLED,
  payload: tvShow
});

export const fetchTVShowDetailRejected = (err) => ({
  type: ActionTypes.FETCH_TV_SHOW_DETAIL_REJECTED,
  payload: err,
  error: true
});

export const fetchTVShowCreditsRequested = () => ({
  type: ActionTypes.FETCH_TV_SHOW_CREDITS_REQUESTED
});

export const fetchTVShowCreditsFulfilled = (credits) => ({
  type: ActionTypes.FETCH_TV_SHOW_CREDITS_FULFILLED,
  payload: credits
});

export const fetchTVShowCreditsRejected = (err) => ({
  type: ActionTypes.FETCH_TV_SHOW_CREDITS_REJECTED,
  payload: err,
  error: true
});

export default {
  setTVShowDetail,
  emptyCurrentTVShow,
  fetchTVShowDetailRequested,
  fetchTVShowDetailFulfilled,
  fetchTVShowDetailRejected,
  fetchTVShowCreditsRequested,
  fetchTVShowCreditsFulfilled,
  fetchTVShowCreditsRejected
};
