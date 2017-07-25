import ActionTypes from './ActionTypes';

export const getPopularPersonBackdrops = (backdrops) => ({
  type: ActionTypes.GET_POPULAR_PERSON_BACKDROPS,
  payload: backdrops
});

export const fetchPopularPeopleRequested = () => ({
  type: ActionTypes.FETCH_POPULAR_PEOPLE_REQUESTED
});

export const fetchPopularPeopleFulfilled = (people) => ({
  type: ActionTypes.FETCH_POPULAR_PEOPLE_FULFILLED,
  payload: people
});

export const fetchPopularPeopleRejected = (err) => ({
  type: ActionTypes.FETCH_POPULAR_PEOPLE_REJECTED,
  payload: err,
  error: true
});

export default {
  getPopularPersonBackdrops,

  fetchPopularPeopleRequested,
  fetchPopularPeopleFulfilled,
  fetchPopularPeopleRejected,
};
