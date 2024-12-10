// src/App/App.test.js
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return { isLoggedIn: true, displayDrawer: false } when state is { isUserLoggedIn: true, isNotificationDrawerVisible: false }', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false
    };

    const props = mapStateToProps(state);
    expect(props).toEqual(expectedProps);
  });
});

