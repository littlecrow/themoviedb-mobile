import ActionTypes from './ActionTypes';

export const KEY = 'tvshows';

export const INITIAL_STATE = {
  filter: {
    popular: {
      page: 1,
      result: []
    },
    topVoted: {
      page: 1,
      result: []
    },
    latest: {
      page: 1,
      result: []
    }
  },
  backdrops: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ActionTypes.GET_POPULAR_TVSHOW_BACKDROPS:
    return {
      ...state,
      backdrops: action.payload
    };
  case ActionTypes.FETCH_POPULAR_TVSHOWS_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_POPULAR_TVSHOWS_FULFILLED:
    return {
      ...state,
      filter: {
        ...state.filter,
        popular: {
          page: state.filter.popular.page + 1,
          result: [
            ...state.filter.popular.result,
            ...action.payload
          ]
        }
      }
    };
  case ActionTypes.FETCH_POPULAR_TVSHOWS_REJECTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_TOP_VOTED_TVSHOWS_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_TOP_VOTED_TVSHOWS_FULFILLED:
    return {
      ...state,
      filter: {
        ...state.filter,
        topVoted: {
          page: state.filter.topVoted.page + 1,
          result: [
            ...state.filter.topVoted.result,
            ...action.payload
          ]
        }
      }
    };
  case ActionTypes.FETCH_TOP_VOTED_TVSHOWS_REJECTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_LATEST_TVSHOWS_REQUESTED:
    return {
      ...state
    };

  case ActionTypes.FETCH_LATEST_TVSHOWS_FULFILLED:
    return {
      ...state,
      filter: {
        ...state.filter,
        latest: {
          page: state.filter.latest.page + 1,
          result: [
            ...state.filter.latest.result,
            ...action.payload
          ]
        }
      }
    };
  case ActionTypes.FETCH_LATEST_TVSHOWS_REJECTED:
    return {
      ...state
    };
  default:
    return state;
  }
};
