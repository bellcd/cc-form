import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app.jsx';

describe('App', () => {
  it('a thing', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});