// __tests__/Intro-test.js
import React from 'react';
import Intro from '../Intro';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {StyleSheet, Text, View} from 'react-native';
//
Enzyme.configure({ adapter: new Adapter() });
// jest.mock('react-navigation/src/routers/KeyGenerator', () => ({
//   generateKey: jest.fn(() => 123),
// }));

describe('test-name',()=>{

  test('find text',()=>{
    const wrapper = shallow(<Intro/>);
    expect(wrapper.find(Text).at(0).props().children).toBe("Welcome to React Native!");
  })


  test('find text2',()=>{
      const wrapper = shallow(<Intro/>);
      expect(wrapper.find(Text).at(1).props().children).toBe("This is a React Native snapshot test.");
    })


  test('use shallow correctly',()=>{
    const wrapper = shallow(<Intro/>);
    expect(wrapper).toMatchSnapshot();
  })

  test('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
})
