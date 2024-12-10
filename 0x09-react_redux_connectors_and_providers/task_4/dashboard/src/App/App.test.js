// src/App/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';  // Import mapStateToProps for testing

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should map state to props correctly', () => {
    const state = {
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      },
    };
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  // Additional tests...
});

