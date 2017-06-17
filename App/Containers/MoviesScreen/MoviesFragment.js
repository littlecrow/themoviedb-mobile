import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Picker } from 'react-native';
import { MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/MovieList';

class MoviesFragment extends Component {
  filter;

  constructor(props) {
    super(props);

    this.state = {
      filterByTrend: MoviesConstant.POPULAR_MOVIES
    };

    // this._handleValueChange = this._handleValueChange.bind(this);

    this.onInitComponent = this.onInitComponent.bind(this);

    this.onInitComponent();
  }

  onInitComponent() {
    const { fetchMovies, setFilter } = this.props;

    console.log('Filter name: ', this.filter);

    setFilter(this.filter);
    fetchMovies();
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
    const { navigate } = this.props.navigation;
    // <Picker
    //       selectedValue={filterByTrend}
    //       onValueChange={(value) => { this._handleValueChange(value); }}
    //     >
    //       <Picker.Item label={'Popular'} value={MoviesConstant.POPULAR_MOVIES}/>
    //       <Picker.Item label={'Top Rated'} value={MoviesConstant.TOP_RATED_MOVIES}/>
    //     </Picker>

    return (
      <View>
        <MovieList
          navigate={ navigate }
        />
      </View>
    );
  }
}

MoviesFragment.propTypes = {

};

export default MoviesFragment;
