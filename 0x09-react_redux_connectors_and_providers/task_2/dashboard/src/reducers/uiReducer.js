// src/reducers/uiReducer.js
import { fromJS, Map } from 'immutable';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';

const initialState = fromJS({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
  user: null,
});

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('isUserLoggedIn', true)
        .set('user', action.user);
    case LOGOUT:
      return state
        .set('isUserLoggedIn', false)
        .set('user', null);
    default:
      return state;
  }
}

export default uiReducer;

