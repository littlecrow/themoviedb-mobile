import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Button } from 'react-native';
import { Images } from '../Themes';
import { connect } from 'react-redux';
import { usersFetch, usersFetchCancel } from '../Redux/Users/ActionCreator';
import { selectors } from '../Redux/Users/Reducer';
import PropTypes from 'prop-types';

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
              { this.props.fetchStatus }
            </Text>
            <Button title='Dispatch' onPress={() => {
              this.props.fetchUsers();
            }}/>
            <Button title='Cancel fetch' onPress={() => {
              this.props.cancelFetch();
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

LaunchScreen.propTypes = {
  fetchUsers: PropTypes.func,
  cancelFetch: PropTypes.func,
  fetchStatus: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    users: selectors.users(state),
    fetchStatus: selectors.fetchStatus(state)
  };
};

const mapDispatchToProps = (dispath) => ({
  fetchUsers: () => dispath(usersFetch()),
  cancelFetch: () => dispath(usersFetchCancel())
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
