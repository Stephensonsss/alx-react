// src/reducers/notificationReducer.js
import { Map } from 'immutable';
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/actionTypes';

const initialState = Map({
  notifications: Map(),
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: action.data,
      });
    default:
      return state;
  }
};

export default notificationReducer;

