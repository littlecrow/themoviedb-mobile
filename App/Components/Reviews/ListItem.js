import React, { Component } from 'react';
import {
  View, Text, Image, Platform,
  TouchableOpacity, TouchableNativeFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import Markdown from 'react-native-simple-markdown';
import { reduceByWords } from '../../Transforms/TextConverter';
import { Images, Colors } from '../../Themes';
import styles from './Styles/ListStyles';
import markdownStyles from './Styles/MarkdownStyles';

const isAndroid = Platform.OS === 'android';
const TouchableWrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
const TouchableBackGround = isAndroid ? TouchableNativeFeedback.Ripple('rgba(0,0,0,0.8)', true) : null;
const TouchableActiveOpacity = .5;

const WORDS_COUNT = 35;

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shortenContent: true
    };

    this._handleItemPress = this._handleItemPress.bind(this);
  }

  _handleItemPress () {
    this.setState({
      shortenContent: !this.state.shortenContent,
    });
  }

  render () {
    const { data } = this.props;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemLine}>
          <Image source={Images.default_profile} style={styles.itemImage}/>
          <Text style={[styles.whiteText, styles.itemAuthorText]}>{data.author}</Text>
        </View>
        <TouchableWrapper useForeground={true} background={TouchableBackGround} activeOpacity={TouchableActiveOpacity} onPress={this._handleItemPress}>
          <View style={styles.itemLine}>
            <Markdown style={markdownStyles}>
              {this.state.shortenContent ? reduceByWords(data.content, WORDS_COUNT) : data.content}
            </Markdown>
          </View>
        </TouchableWrapper>
      </View>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.object
};

export default ListItem;
