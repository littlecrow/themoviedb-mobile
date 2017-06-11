import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Button } from 'react-native';
import { Images } from '../Themes';
import { connect } from 'react-redux';
import { usersFetch } from '../Redux/Users/ActionCreator';
import MoviesActionCreator from '../Redux/Movies/ActionCreator';

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
            <Text style={styles.sectionText}>
              Test Redux
            </Text>
            <Button title='Dispatch' onPress={() => {
              alert('Hello');
              this.props.fetchUsers();
            }}/>
          </View>
          <View>
            <Button title='Go to Movies List'
              onPress={() => {
                navigate('Movies');
                this.props.fetchMovies();
              }}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchUsers: () => dispath(usersFetch()),
  fetchMovies: () => dispath(MoviesActionCreator.moviesFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
