// src/reducers/rootReducer.test.js
import rootReducer from './rootReducer';
import { fromJS } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      courses: fromJS({}),
      notifications: fromJS({}),
      ui: fromJS({}),
    };
    const state = rootReducer(undefined, {});
    expect(state).toEqual(initialState);
  });
});

