import ActionCreators from './ActionCreators';
import Api from '../../Services/Api';

const API_POPULAR_PEOPLE = 'person/popular';

const fetchPopularPeople = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchPopularPeopleRequested());
  try {
    let people = [],
      profiles = [];
    await Api.get(API_POPULAR_PEOPLE, {
      params: {
        page: getState().people.filter.popular.page,
      }
    }).then(response => {
      people = response.data.results;
      if(getState().people.filter.popular.page === 1) {
        people.forEach(person => {
          profiles.push(person.profile_path);
        });
        dispatch(ActionCreators.getPopularPersonProfiles(profiles));
      }
    });
    return dispatch(ActionCreators.fetchPopularPeopleFulfilled(people));
  } catch (err) {
    console.log('Error: ', err);
    dispatch(ActionCreators.fetchPopularPeopleRejected(err));
  }
};

export default {
  fetchPopularPeople,
};
