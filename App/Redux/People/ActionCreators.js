import ActionTypes from './ActionTypes';

export const getPopularPersonProfiles = (profiles) => ({
  type: ActionTypes.GET_POPULAR_PERSON_PROFILES,
  payload: profiles
});

export const getMovieBackdropsOfPerson = (backdrops) => ({
  type: ActionTypes.GET_MOVIE_BACKDROPS_OF_PERSON,
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
  getPopularPersonProfiles,
  getMovieBackdropsOfPerson,

  fetchPopularPeopleRequested,
  fetchPopularPeopleFulfilled,
  fetchPopularPeopleRejected,
};
