import React from 'react';
import { Text, View } from 'react-native';
import DrawerHeader from '../Components/Drawer/Header';
import DrawerWrapper from '../Components/Drawer/Wrapper';

const TestScreen = () => (
  <DrawerWrapper>
    <DrawerHeader/>
    <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Test Screen
      </Text>
    </View>
  </DrawerWrapper>
);

export default TestScreen;
