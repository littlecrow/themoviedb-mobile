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

import { Colors } from '../../Themes';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles, { backIconSize } from './Styles/SearchBarStyles';
import { SearchActionCreators, SearchActions } from '../../Redux/Search';
import { NavigationActions } from 'react-navigation';

const isAndroid = Platform.OS === 'android';
const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
const TouchableBackGround = isAndroid ? TouchableNativeFeedback.Ripple(Colors.secondary, true) : null;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.keyword,
      isChangedText: false
    };
    this._handleChange = this._handleChange.bind(this);
    this._removeText = this._removeText.bind(this);
  }

  _timeoutFunc;
  _handleChange(text) {
    this.setState({
      text: text
    }, () => {
      this.setState({ isChangedText: text !== '' });
    });
    const { fetchSearchMovie, resetMovies, resetPage, isSearching, keyword } = this.props;
    isSearching(true);
    clearTimeout(this._timeoutFunc);
    this._timeoutFunc = setTimeout(() => {
      if(text.length === 0) {
        resetMovies();
      } else {
        if(text != keyword) {
          resetPage();
        }
        fetchSearchMovie(text);
      }
    }, 600);
  }

  _removeText() {
    this.setState({ text: '' });
  }

  _renderHeaderLeft() {
    const { navigateBack } = this.props;
    return (
      <TouchableWrapper
        onPress={navigateBack}
        background={TouchableBackGround}
      >
        <View style={[styles.componentContainer, styles.back]}>
          <Ionicons name="md-arrow-back" size={backIconSize} color="white"/>
        </View>
      </TouchableWrapper>
    );
  }

  _renderCrossIcon() {
    if(this.state.isChangedText) {
      return (
        <TouchableOpacity style={styles.crossIcon} onPress={this._removeText}>
          <Entypo name='cross' size={24} color={Colors.secondary}/>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
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
          value={this.state.text}
          container
        />
        {this._renderCrossIcon()}
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
  resetMovies: PropTypes.func,
  resetPage: PropTypes.func,
  keyword: PropTypes.string,
  navigateBack: PropTypes.func
};

const mapStateToProps = (state) => ({
  keyword: state.search.keyword
});

const mapDispatchToProps = (dispatch) => ({
  isSearching: (bool) => SearchActionCreators.checkIsSearching(bool),
  fetchSearchMovie: (keyword) => dispatch(SearchActions.fetchSearchMovie(keyword)),
  resetMovies: () => dispatch(SearchActionCreators.resetMovies()),
  resetPage: () => dispatch(SearchActionCreators.resetPage()),
  navigateBack: () => dispatch(NavigationActions.back())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
