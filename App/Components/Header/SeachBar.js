import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { FormInput } from 'react-native-elements';
import { Colors } from '../../Themes';
import { Ionicons } from '@expo/vector-icons';
import styles, { backIconSize } from './Styles/SearchBarStyles';
import { SearchActionCreators, SearchActions } from '../../Redux/Search';

const isAndroid = Platform.OS === 'android';
const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
const TouchableBackGround = isAndroid ? TouchableNativeFeedback.Ripple(Colors.secondary, true) : null;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _timeoutFunc;
  _handleChange(text) {
    const { fetchSearchMovie, emptySearchMovies, isSearching } = this.props;
    isSearching(true);
    clearTimeout(this._timeoutFunc);
    this._timeoutFunc = setTimeout(() => {
      let characters = text.length;
      if(characters === 0) {
        emptySearchMovies();
      } else {
        fetchSearchMovie(text);
      }
    }, 600);
  }

  _renderHeaderLeft(onPress) {
    return (
      <TouchableWrapper
        onPress={onPress}
        background={TouchableBackGround}>
        <View style={[styles.componentContainer, styles.back]}>
          <Ionicons name="md-arrow-back" size={backIconSize} color="white"/>
        </View>
      </TouchableWrapper>
    );
  }

  _renderHeaderRight() {
    return (
      <View style={styles.headerRight}>
        <TextInput
          placeholder='Search...'
          placeholderTextColor={Colors.secondary}
          autoCorrect={false}
          selectionColor={Colors.secondary}
          underlineColorAndroid={Colors.secondary}
          style={styles.searchInput}
          autoFocus={true}
          onChangeText={this._handleChange}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.header}
        >
          {this._renderHeaderLeft()}
          {this._renderHeaderRight()}
        </View>
      </View>
    );
  }
}

SearchBar.propTypes = {
  fetchSearchMovie: PropTypes.func,
  isSearching: PropTypes.func,
  emptySearchMovies: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  isSearching: (bool) => SearchActionCreators.isSearching(bool),
  fetchSearchMovie: (keyword) => dispatch(SearchActions.fetchSearchMovie(keyword)),
  emptySearchMovies: () => dispatch(SearchActionCreators.emptySearchMovies())
});

export default connect(undefined, mapDispatchToProps)(SearchBar);
