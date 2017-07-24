import ActionTypes from './ActionTypes';

export const getPopularTVShowBackdrops = (backdrops) => ({
  type: ActionTypes.GET_POPULAR_TVSHOW_BACKDROPS,
  payload: backdrops
});

export const fetchPopularTVShowsRequested = () => ({
  type: ActionTypes.FETCH_POPULAR_TVSHOWS_REQUESTED
});

export const fetchPopularTVShowsFulfilled = (data) => ({
  type: ActionTypes.FETCH_POPULAR_TVSHOWS_FULFILLED,
  payload: data
});

export const fetchPopularTVShowsRejected = (err) => ({
  type: ActionTypes.FETCH_POPULAR_TVSHOWS_REJECTED,
  payload: err,
  error: true
});

export const fetchTopVotedTVShowsRequested = () => ({
  type: ActionTypes.FETCH_TOP_VOTED_TVSHOWS_REQUESTED
});

export const fetchTopVotedTVShowsFulfilled = (data) => ({
  type: ActionTypes.FETCH_TOP_VOTED_TVSHOWS_FULFILLED,
  payload: data
});

export const fetchTopVotedTVShowsRejected = (err) => ({
  type: ActionTypes.FETCH_TOP_VOTED_TVSHOWS_REJECTED,
  payload: err,
  error: true
});

export const fetchLatestTVShowsRequested = () => ({
  type: ActionTypes.FETCH_LATEST_TVSHOWS_REQUESTED
});

export const fetchLatestTVShowsFulfilled = (data) => ({
  type: ActionTypes.FETCH_LATEST_TVSHOWS_FULFILLED,
  payload: data
});

export const fetchLatestTVShowsRejected = (err) => ({
  type: ActionTypes.FETCH_LATEST_TVSHOWS_REJECTED,
  payload: err,
  error: true
});

export default {
  getPopularTVShowBackdrops,

  fetchPopularTVShowsRequested,
  fetchPopularTVShowsFulfilled,
  fetchPopularTVShowsRejected,

  fetchTopVotedTVShowsRequested,
  fetchTopVotedTVShowsFulfilled,
  fetchTopVotedTVShowsRejected,

  fetchLatestTVShowsRequested,
  fetchLatestTVShowsFulfilled,
  fetchLatestTVShowsRejected
};
