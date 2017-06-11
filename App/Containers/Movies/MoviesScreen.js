import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, ListView, View, Text} from 'react-native';
import Movie from '../../Components/Movies/Movie';

class MoviesScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      movieDataSource: ds.cloneWithRows(this.props.movies)
    };
  }

  componentDidMount() {
    this.setState({
      movies: this.props.movies
    });
  }

  renderItem({item}) {
    return (
      <Movie
        title={item.title}
      />
    );
  }

  render() {
    const list = (
      <ListView
        dataSource={this.state.movieDataSource}
        renderRow={(rowData) => <Text>{rowData.title}</Text>}
      />
    );
    return (
      <View>
        { list }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.movies.list)
  return {
    movies: state.movies.list
  };
};

MoviesScreen.propTypes = {

};

export default connect(mapStateToProps, undefined)(MoviesScreen);
