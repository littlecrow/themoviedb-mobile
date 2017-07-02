import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-animatable';
import DrawerHeader from '../Components/Drawer/Header';
import DrawerWrapper from '../Components/Drawer/Wrapper';

const TestScreen = () => (
  <DrawerWrapper>
    <DrawerHeader/>
    <View animation="fadeIn" duration={300} style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Test Screen
      </Text>
    </View>
  </DrawerWrapper>
);

export default TestScreen;
