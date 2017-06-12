import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Button } from 'react-native';
import { Images } from '../Themes';
import { connect } from 'react-redux';
import { usersFetch, usersFetchCancel } from '../Redux/Users/ActionCreator';
import { selectors } from '../Redux/Users/Reducer';
import PropTypes from 'prop-types';
import { API_KEY } from 'react-native-dotenv';

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
              { this.props.fetchStatus }
            </Text>

            <Text>{API_KEY}</Text>

            <Button title='Dispatch' onPress={() => {
              this.props.fetchUsers();
            }}/>
            <Button title='Cancel fetch' onPress={() => {
              this.props.cancelFetch();
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
