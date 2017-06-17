import MoviesFragment from './MoviesFragment';
import { MoviesConstant } from '../../Redux/Movies';
import { connect } from 'react-redux';
import { MoviesActionCreators, MoviesActions } from '../../Redux/Movies';

class TopRatedMoviesFragment extends MoviesFragment {

  filter = MoviesConstant.POPULAR_MOVIES

}

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(MoviesActions.fetchMovies()),
  setFilter: (filter) => dispatch(MoviesActionCreators.setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(TopRatedMoviesFragment);
