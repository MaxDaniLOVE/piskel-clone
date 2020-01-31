import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Preview from '../src/components/piskel-сlone/preview/Preview';

configure({adapter: new Adapter()});
describe('Preview', () => {
  const output = shallow(<Preview />);
  it('should set default 7 FPS', () => {
    expect(output.state().fps).toEqual(7);
  });
  it('should render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
