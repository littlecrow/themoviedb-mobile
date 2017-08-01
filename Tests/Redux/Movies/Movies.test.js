import { MoviesReducer, MoviesActionCreators, MoviesActionTypes } from '../../../App/Redux/Movies';
import { INITIAL_STATE } from '../../../App/Redux/Movies/Reducer';

import { fetch as mockData } from '../../../config/jest/mockData';

describe('>> Testcase Reducer', () => {
  test('returns the same state on an unhandled action', () => {
    expect(MoviesReducer(INITIAL_STATE, { type: '_NULL' })).toMatchSnapshot();
  });
  test('handles EMPTY_MOVIES action', () => {

  });
  test('handles FETCH_POPULAR_MOVIES action', () => {

  });
  test('handles FETCH_TOP_VOTED_MOVIES action', () => {

  });
  test('handles FETCH_TOP_REVENUE_MOVIES action', () => {

  });
});

describe('>> Testcase ActionCreators', () => {
  test('creates a getPopularMovieBackdrops', () => {
    let movies = mockData.results;
    let backdrops = [];
    movies.forEach(movie => {
      backdrops.push(movie.backdrop_path);
    });

    expect(MoviesActionCreators.getPopularMovieBackdrops(backdrops)).toEqual(
      {
        type: 'GET_POPULAR_MOVIE_BACKDROPS',
        payload: backdrops
      }
    );
    expect(MoviesActionCreators.getPopularMovieBackdrops(backdrops)).toMatchSnapshot();
  });
  test('creates a fetchPopularMoviesRequested', () => {
    expect(MoviesActionCreators.fetchPopularMoviesRequested()).toEqual(
      {
        type: 'FETCH_POPULAR_MOVIES_REQUESTED'
      }
    );
    expect(MoviesActionCreators.fetchPopularMoviesRequested()).toMatchSnapshot();
  });
  test('creates a fetchPopularMoviesFulfilled', () => {
    let movies = mockData.results;

    expect(MoviesActionCreators.fetchPopularMoviesFulfilled(movies)).toEqual(
      {
        type: 'FETCH_POPULAR_MOVIES_FULFILLED',
        payload: movies
      }
    );
    expect(MoviesActionCreators.fetchPopularMoviesFulfilled(movies)).toMatchSnapshot();
  });
  test('creates a fetchPopularMoviesRejected', () => {
    expect(MoviesActionCreators.fetchPopularMoviesRejected('404')).toEqual(
      {
        type: 'FETCH_POPULAR_MOVIES_REJECTED',
        payload: '404',
        error: true
      }
    );
    expect(MoviesActionCreators.fetchPopularMoviesRejected('404')).toMatchSnapshot();
  });
  test('creates a fetchTopVotedMoviesRequested', () => {
    expect(MoviesActionCreators.fetchTopVotedMoviesRequested()).toEqual(
      {
        type: 'FETCH_TOP_VOTED_MOVIES_REQUESTED'
      }
    );
    expect(MoviesActionCreators.fetchTopVotedMoviesRequested()).toMatchSnapshot();
  });
  test('creates a fetchTopVotedMoviesFulfilled', () => {
    let movies = mockData.results;
    expect(MoviesActionCreators.fetchTopVotedMoviesFulfilled(movies)).toEqual(
      {
        type: 'FETCH_TOP_VOTED_MOVIES_FULFILLED',
        payload: movies
      }
    );
    expect(MoviesActionCreators.fetchTopVotedMoviesFulfilled(movies)).toMatchSnapshot();
  });
  test('creates a fetchTopVotedMoviesRejected', () => {
    expect(MoviesActionCreators.fetchTopVotedMoviesRejected('404')).toEqual(
      {
        type: 'FETCH_TOP_VOTED_MOVIES_REJECTED',
        payload: '404',
        error: true
      }
    );
    expect(MoviesActionCreators.fetchTopVotedMoviesRejected('404')).toMatchSnapshot();
  });
});

describe('>> Testcase ActionTypes', () => {
  const types = {
    "EMPTY_MOVIES": "EMPTY_MOVIES",
    "FETCH_POPULAR_MOVIES_FULFILLED": "FETCH_POPULAR_MOVIES_FULFILLED",
    "FETCH_POPULAR_MOVIES_REJECTED": "FETCH_POPULAR_MOVIES_REJECTED",
    "FETCH_POPULAR_MOVIES_REQUESTED": "FETCH_POPULAR_MOVIES_REQUESTED",
    "FETCH_TOP_REVENUE_MOVIES_FULFILLED": "FETCH_TOP_REVENUE_MOVIES_FULFILLED",
    "FETCH_TOP_REVENUE_MOVIES_REJECTED": "FETCH_TOP_REVENUE_MOVIES_REJECTED",
    "FETCH_TOP_REVENUE_MOVIES_REQUESTED": "FETCH_TOP_REVENUE_MOVIES_REQUESTED",
    "FETCH_TOP_VOTED_MOVIES_FULFILLED": "FETCH_TOP_VOTED_MOVIES_FULFILLED",
    "FETCH_TOP_VOTED_MOVIES_REJECTED": "FETCH_TOP_VOTED_MOVIES_REJECTED",
    "FETCH_TOP_VOTED_MOVIES_REQUESTED": "FETCH_TOP_VOTED_MOVIES_REQUESTED",
    "GET_POPULAR_MOVIE_BACKDROPS": "GET_POPULAR_MOVIE_BACKDROPS"
  };

  test('return the correct types', () => {
    expect(MoviesActionTypes).toEqual(types);
    expect(MoviesActionTypes).toMatchSnapshot();
  });
});
