import 'react-native';
import React from 'react';
import FullButton from '../../App/Components/FullButton';

import renderer from 'react-test-renderer';

test('FullButton component renders correctly', () => {
  const tree = renderer.create(<FullButton onPress={() => {}} text='hi' />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('onPress', () => {

});
