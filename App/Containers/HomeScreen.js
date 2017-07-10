import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { View as AnimatableView } from 'react-native-animatable';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Header from '../Components/Drawer/Header';
import Wrapper from '../Components/Drawer/Wrapper';
import { Colors, Images } from '../Themes';
import styles from './Styles/RootContainerStyles';

class HomeScreen extends Component {
  static propTypes = {
    navigateTo: PropTypes.func
  }

  render() {
    return (
      <Wrapper>
        <Header headerRight={<View/>}/>
        <Image
          style={styles.backgroundImage}
          source={Images.defaultBackground}
          resizeMode="cover">
          <View style={styles.container}>
            <AnimatableView animation="fadeInDown" style={styles.button}>
              <Button
                onPress={() => this.props.navigateTo('Discover')}
                title={'Discover'}
                color={Colors.secondary}
                backgroundColor={Colors.peterRiver}
                underlayColor={Colors.secondary}
                icon={{name: 'earth', type: 'material-community'}}
              />
            </AnimatableView>
            <AnimatableView animation="fadeInUp" style={styles.button}>
              <Button
                onPress={() => this.props.navigateTo('Login')}
                title={'Login'}
                color={Colors.secondary}
                backgroundColor={Colors.alizarin}
                underlayColor={Colors.secondary}
                icon={{name: 'user', type: 'font-awesome'}}
              />
            </AnimatableView>
          </View>
        </Image>
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
