// src/App/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';  // Import stateless component for testing

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  // Additional tests...
});

