import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

class MoviesScreenFile extends Component {
  constructor(props) {
    super(props);

    this.handlePressOnTab = this.handlePressOnTab.bind(this);
  }

  handlePressOnTab() {
    console.log('You press me!');
  }

  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={2}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel='Tab #1'>My</Text>
        <Text tabLabel='Tab #2 word word'>favorite</Text>
        <Text tabLabel='Tab #3 word word word'>project</Text>
        <Text tabLabel='Tab #4 word word word word'>favorite</Text>
        <Text tabLabel='Tab #5'>project</Text>
      </ScrollableTabView>
    );
  }
}

MoviesScreenFile.propTypes = {

};

export default MoviesScreenFile;
