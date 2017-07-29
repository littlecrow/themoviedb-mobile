import 'react-native';
import React from 'react';
import RoundedButton from '../../App/Components/RoundedButton';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('RoundedButton component renders correctly', () => {
  const _getComponent = (props) => {
    return (
      renderer.create(
        <RoundedButton text={props.text} />
      ).toJSON()
    );
  };

  let component = _getComponent({ text: 'howdy' });
  expect(component).toMatchSnapshot();
});

test('RoundedButton component with children renders correctly', () => {
  const _getComponent = (props) => {
    return (
      renderer.create(
        <RoundedButton>{props.text}</RoundedButton>
      ).toJSON()
    );
  };

  let component = _getComponent({ text: 'Howdy' });
  expect(component).toMatchSnapshot();
});
