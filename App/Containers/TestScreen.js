import React from 'react';
import { Text, View } from 'react-native';
import DrawerHeader from '../Components/Drawer/Header';
import DrawerWrapper from '../Components/Drawer/Wrapper';
import { Colors } from '../Themes';

const TestScreen = () => (
  <DrawerWrapper>
    <DrawerHeader/>
    <View style={{flex: 1, backgroundColor: Colors.secondary, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Test Screen
      </Text>
    </View>
  </DrawerWrapper>
);

export default TestScreen;
