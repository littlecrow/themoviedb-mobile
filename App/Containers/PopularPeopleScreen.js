import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DrawerHeader from '../Components/Drawer/Header';
import DrawerWrapper from '../Components/Drawer/Wrapper';
import styles from './Styles/PopularPeopleScreenStyles';
import { ListConstant } from '../Redux/List';
import { PeopleActions } from '../Redux/People';
import List from '../Components/ListView';

class PopularPeopleScreen extends Component {
  componentDidMount() {
    const { fetchPopularPeople } = this.props;
    fetchPopularPeople();
  }
  

  render() {
    const { people, fetchPopularPeople } = this.props;
    return (
      <DrawerWrapper>
        <DrawerHeader disableListTypes={true}/>
        <View style={styles.container}>
          <List
            type={ListConstant.PEOPLE}
            data={people}
            onEndReached={fetchPopularPeople}
          />
        </View>
      </DrawerWrapper>
    );
  }
}

PopularPeopleScreen.propTypes = {
  people: PropTypes.array,
  fetchPopularPeople: PropTypes.func,
};

const mapStateToProps = (state) => ({
  people: state.people.filter.popular.result
});

const mapDispatchToProps = (dispatch) => ({
  fetchPopularPeople: () => dispatch(PeopleActions.fetchPopularPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularPeopleScreen);
