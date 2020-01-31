import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ToolBtns from '../src/components/piskel-сlone/tool-btns/ToolBtns';

configure({adapter: new Adapter()});
describe('ToolBtns', () => {
  const output = shallow(<ToolBtns />);
  it('should render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should display 5 buttons', () => {
    expect(output.length).toBe(5);
  });
});