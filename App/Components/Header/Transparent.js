import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles/TransparentStyles';
import { Ionicons } from '@expo/vector-icons';
import fonts from '../../Themes/Fonts';
import colors from '../../Themes/Colors';

const MAX_TITLE_LENGTH = 30;

class TransparentHeader extends Component {

  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.navigation.goBack();
  }

  shortenTitle (title) {
    if (title.length > MAX_TITLE_LENGTH) {
      return title.substr(0,MAX_TITLE_LENGTH) + '...';
    }
    return title;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={this.goBack}
          useForeground={true}
          background={TouchableNativeFeedback.Ripple(colors.darkenCloud, true)}>
          <View>
            <Text style={styles.back}>
              <Ionicons name="md-arrow-back" size={fonts.size.h4} color="white"></Ionicons>
            </Text>
          </View>
        </TouchableNativeFeedback>
        <View>
          <Text style={styles.title}>{this.shortenTitle(this.props.title)}</Text>
        </View>
      </View>
    );
  }
}

TransparentHeader.propTypes = {

};

export default TransparentHeader;
