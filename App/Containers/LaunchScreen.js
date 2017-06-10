import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Button } from 'react-native';
import { Images } from '../Themes';
import { connect } from 'react-redux';
import { usersFetch } from '../Redux/Users/ActionCreator';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              Test Redux
            </Text>
            <Button title='Dispatch' onPress={() => {
              alert('Hello');
              this.props.fetchUsers();
            }}/>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchUsers: () => dispath(usersFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
