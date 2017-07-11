import ActionCreators from './ActionCreators';
import Constant from './Constant';
import Api from '../../Services/Api';

const API_DISCOVER_TVSHOW = 'discover/tv';

const fetchPopularTVShows = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchPopularTVShowsRequested());
  try {
    const data = await Api.get(API_DISCOVER_TVSHOW, {
      params: {
        sort_by: Constant.POPULARITY_DESC,
        page: getState().tvshows.filter.popular.page
      }
    }).then(response => response.data.results);
    console.log('data: ', data);
    return dispatch(ActionCreators.fetchPopularTVShowsFulfilled(data));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchPopularTVShowsRejected(err));
  }
};

const fetchTopVotedTVShows = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchTopVotedTVShowsRequested());
  try {
    const data = await Api.get(API_DISCOVER_TVSHOW, {
      params: {
        sort_by: Constant.VOTE_AVERAGE_DESC,
        page: getState().tvshows.filter.topVoted.page
      }
    }).then(response => response.data.results);

    return dispatch(ActionCreators.fetchTopVotedTVShowsFulfilled(data));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchTopVotedTVShowsRejected());
  }
};

const fetchLatestTVShows = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchLatestTVShowsRequested());
  try {
    const data = await Api.get(API_DISCOVER_TVSHOW, {
      params: {
        sort_by: Constant.REVENUE_DESC,
        page: getState().tvshows.filter.topRevenue.page
      }
    }).then(response => response.data.results);

    return dispatch(ActionCreators.fetchLatestTVShowsFulfilled(data));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchLatestTVShowsRejected());
  }
};

export default {
  fetchPopularTVShows,
  fetchTopVotedTVShows,
  fetchLatestTVShows
};
