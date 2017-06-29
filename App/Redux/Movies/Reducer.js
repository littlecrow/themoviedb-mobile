import ActionTypes from './ActionTypes';

export const KEY = 'movies';

export const INITIAL_STATE = {
  loading: false,
  filter: {
    popular: {
      page: 1,
      result: []
    },
    topVoted: {
      page: 1,
      result: []
    },
    topRevenue: {
      page: 1,
      result: []
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ActionTypes.FETCH_POPULAR_MOVIES_REQUESTED:
    return {
      ...state,
      loading: true
    };
  case ActionTypes.FETCH_POPULAR_MOVIES_FULFILLED:
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
      },
      loading: false
    };
  case ActionTypes.FETCH_POPULAR_MOVIES_REJECTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_TOP_VOTED_MOVIES_REQUESTED:
    return {
      ...state,
      loading: true
    };

  case ActionTypes.FETCH_TOP_VOTED_MOVIES_FULFILLED:
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
      },
      loading: false
    };
  case ActionTypes.FETCH_TOP_VOTED_MOVIES_REJECTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_TOP_REVENUE_MOVIES_REQUESTED:
    return {
      ...state,
      loading: true
    };

  case ActionTypes.FETCH_TOP_REVENUE_MOVIES_FULFILLED:
    return {
      ...state,
      filter: {
        ...state.filter,
        topRevenue: {
          page: state.filter.topRevenue.page + 1,
          result: [
            ...state.filter.topRevenue.result,
            ...action.payload
          ]
        }
      },
      loading: false
    };
  case ActionTypes.FETCH_TOP_REVENUE_MOVIES_REJECTED:
    return {
      ...state
    };
  default:
    return state;
  }
};
