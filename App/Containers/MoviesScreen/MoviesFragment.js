import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Picker, Text } from 'react-native';
import { MoviesConstant, MoviesActionCreators, MoviesActions } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/MovieList';
import { connect } from 'react-redux';

class MoviesFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterByTrend: MoviesConstant.POPULAR_MOVIES
    };

    // this._handleValueChange = this._handleValueChange.bind(this);
  }


  // _handleValueChange(value) {
  //   this.setState({
  //     filterByTrend: value
  //   }, () => {
  //     const { fetchMovies, setFilter } = this.props,
  //       { filterByTrend } = this.state;
  //     setFilter(filterByTrend);
  //     fetchMovies();
  //   });
  // }

  render() {
    // const { filterByTrend } = this.state;
    //const { navigate } = this.props.navigation;
    // <Picker
    //       selectedValue={filterByTrend}
    //       onValueChange={(value) => { this._handleValueChange(value); }}
    //     >
    //       <Picker.Item label={'Popular'} value={MoviesConstant.POPULAR_MOVIES}/>
    //       <Picker.Item label={'Top Rated'} value={MoviesConstant.TOP_RATED_MOVIES}/>
    //     </Picker>

    return (
      <View>
      </View>
    );
  }
}

MoviesFragment.propTypes = {

};

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(MoviesActions.fetchMovies()),
  setFilter: (filter) => dispatch(MoviesActionCreators.setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(MoviesFragment);
