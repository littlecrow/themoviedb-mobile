import ActionTypes from './ActionTypes';

export const KEY = 'people';

export const INITIAL_STATE = {
  filter: {
    popular: {
      page: 1,
      result: []
    }
  },
  backdrops: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ActionTypes.GET_POPULAR_PERSON_BACKDROPS:
    return {
      ...state,
      backdrops: action.payload
    };
  case ActionTypes.FETCH_POPULAR_PEOPLE_REQUESTED:
    return {
      ...state
    };
  case ActionTypes.FETCH_POPULAR_PEOPLE_FULFILLED:
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
  case ActionTypes.FETCH_POPULAR_PEOPLE_REJECTED:
    return {
      ...state
    };
  default:
    return state;
  }
};
