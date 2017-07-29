import 'react-native';
import React from 'react';
import FullButton from '../../App/Components/FullButton';

import renderer from 'react-test-renderer';

test('FullButton component renders correctly', () => {
  const _getComponent = (props) => {
    return (
      renderer.create(
        <FullButton text={props.text} />
      ).toJSON()
    );
  };

  let component = _getComponent({ text: 'Hi' });
  expect(component).toMatchSnapshot();
});
