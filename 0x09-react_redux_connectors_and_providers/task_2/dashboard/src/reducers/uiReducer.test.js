// src/reducers/uiReducer.test.js
import uiReducer from './uiReducer';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';
import { fromJS } from 'immutable';

describe('uiReducer', () => {
  it('should handle LOGIN action', () => {
    const initialState = fromJS({
      isUserLoggedIn: false,
      user: null,
    });

    const action = {
      type: LOGIN,
      user: { email: 'test@example.com' },
    };

    const newState = uiReducer(initialState, action);
    expect(newState.get('isUserLoggedIn')).toBe(true);
    expect(newState.get('user').email).toBe('test@example.com');
  });

  it('should handle LOGOUT action', () => {
    const initialState = fromJS({
      isUserLoggedIn: true,
      user: { email: 'test@example.com' },
    });

    const action = { type: LOGOUT };

    const newState = uiReducer(initialState, action);
    expect(newState.get('isUserLoggedIn')).toBe(false);
    expect(newState.get('user')).toBe(null);
  });
});

