import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import TouchableView from '../TouchableView';
import { connect } from 'react-redux';

import { Colors } from '../../Themes';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles, { backIconSize } from './Styles/SearchBarStyles';
import { SearchActionCreators, SearchActions } from '../../Redux/Search';
import { NavigationActions } from 'react-navigation';

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
    const { fetchSearching, resetSearching, resetPage, isSearching, keyword } = this.props;
    isSearching(true);
    clearTimeout(this._timeoutFunc);
    this._timeoutFunc = setTimeout(() => {
      if(text.length === 0) {
        resetSearching();
      } else {
        if(text != keyword) {
          resetPage();
        }
        fetchSearching(text);
      }
    }, 600);
  }

  _removeText() {
    this.setState({
      text: '',
      isChangedText: false
    });
  }

  _renderHeaderLeft() {
    const { navigateBack } = this.props;
    return (
      <TouchableView
        onPress={navigateBack}
        rippleColor={Colors.secondary}
      >
        <View style={[styles.componentContainer, styles.back]}>
          <Ionicons name="md-arrow-back" size={backIconSize} color="white"/>
        </View>
      </TouchableView>
    );
  }

  _renderCrossIcon() {
    if(this.state.isChangedText || this.state.text !== '') {
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
          placeholder='Search movies...'
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
  fetchSearching: PropTypes.func,
  isSearching: PropTypes.func,
  resetSearching: PropTypes.func,
  resetPage: PropTypes.func,
  keyword: PropTypes.string,
  navigateBack: PropTypes.func
};

const mapStateToProps = (state) => ({
  keyword: state.search.keyword
});

const mapDispatchToProps = (dispatch) => ({
  isSearching: (bool) => SearchActionCreators.checkIsSearching(bool),
  fetchSearching: (keyword) => dispatch(SearchActions.fetchSearching(keyword)),
  resetSearching: () => dispatch(SearchActionCreators.resetSearching()),
  resetPage: () => dispatch(SearchActionCreators.resetPage()),
  navigateBack: () => dispatch(NavigationActions.back())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
