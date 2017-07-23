import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Header from '../Components/Drawer/Header';
import Wrapper from '../Components/Drawer/Wrapper';
import { Colors } from '../Themes';
import styles from './Styles/RootContainerStyles';

const types = [
  {
    name: 'Movies',
    route: 'Movies',
    color: Colors.sunFlower
  },
  {
    name: 'TV Shows',
    route: 'TV Shows',
    color: Colors.peterRiver
  },
  {
    name: 'People',
    route: 'Login',
    color: Colors.alizarin
  }
];

class HomeScreen extends Component {
  static propTypes = {
    navigateTo: PropTypes.func
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem(item, index) {
    return (
      <AnimatableView animation="fadeInDown" key={index} style={{flex: 1}}>
        <TouchableNativeFeedback
          onPress={() => true || this.props.navigateTo(item.route)}
          background={TouchableNativeFeedback.Ripple(Colors.secondary, true)}>
          <View style={{ backgroundColor: item.color, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableNativeFeedback>
      </AnimatableView>
    );
  }

  render() {
    return (
      <Wrapper>
        <Header headerRight={<View/>}/>
        <View style={styles.container}>
          {
            types.map(this._renderItem)
          }
        </View>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch,) => {
  return {
    navigateTo: (routeName) => dispatch(NavigationActions.navigate({routeName}))
  };
};
export default connect(undefined, mapDispatchToProps)(HomeScreen);
