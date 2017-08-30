import React, { Component } from 'react';
import {
  View, Text, Image, Linking,
} from 'react-native';
import TouchableView from '../TouchableView';
import PropTypes from 'prop-types';
import Markdown from 'react-native-simple-markdown';
import { reduceByWords } from '../../Transforms/TextConverter';
import { Images } from '../../Themes';
import styles from './Styles/ListStyles';
import markdownStyles from './Styles/MarkdownStyles';

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

  _reduceByWords (data, wordsCount = WORDS_COUNT) {
    return reduceByWords(data, wordsCount) + ` [See more.]()`;
  }

  _markdownLinkRule () {
    const rule = {
      react: (node, output, state) => {
        const content = node.content[0];
        return (
          <Text onPress={node.target ? () => Linking.openURL(node.target) : null }
            style={markdownStyles.link} key={state.key}>
            {content.content}
          </Text>
        );
      }
    };
    return rule;
  }

  render () {
    const { data } = this.props;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemLine}>
          <Image source={Images.default_profile} style={styles.itemImage}/>
          <Text style={[styles.whiteText, styles.itemAuthorText]}>{data.author}</Text>
        </View>
        <TouchableView useForeground={true} rippleColor={'rgba(0,0,0,0.8)'} activeOpacity={TouchableActiveOpacity} onPress={this._handleItemPress}>
          <View style={styles.itemLine}>
            <Markdown rules={{link: this._markdownLinkRule()}}>
              {this.state.shortenContent ? this._reduceByWords(data.content) : data.content}
            </Markdown>
          </View>
        </TouchableView>
      </View>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.object
};

export default ListItem;
