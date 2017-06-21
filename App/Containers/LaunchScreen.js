import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Button } from 'react-native';
import { Images } from '../Themes';
import PropTypes from 'prop-types';
import { API_KEY } from 'react-native-dotenv';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Image source={Images.ready} />

            <Text>{API_KEY}</Text>
          </View>
          <View>
            <Button title='Go to Movies List'
              onPress={() => {
                navigate('MoviesScreen');
              }}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

LaunchScreen.propTypes = {
  fetchUsers: PropTypes.func,
  cancelFetch: PropTypes.func,
  fetchStatus: PropTypes.string
};

export default LaunchScreen;
