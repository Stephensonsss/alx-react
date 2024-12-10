// src/reducers/notificationReducer.test.js
import notificationReducer from './notificationReducer';
import { Map } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/actionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = Map({
      notifications: Map(),
      loading: false,
    });
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = { type: SET_LOADING_STATE, isLoading: true };
    const expectedState = Map({
      notifications: Map(),
      loading: true,
    });
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: { 1: { id: 1, value: 'Notification 1' } },
    };
    const expectedState = Map({
      notifications: Map({ 1: { id: 1, value: 'Notification 1' } }),
      loading: false,
    });
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });
});

