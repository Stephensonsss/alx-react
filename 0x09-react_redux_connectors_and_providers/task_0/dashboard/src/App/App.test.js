// src/App/App.test.js
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return { isLoggedIn: true } when state is { isUserLoggedIn: true }', () => {
    const state = fromJS({
      isUserLoggedIn: true
    });

    const expectedProps = {
      isLoggedIn: true
    };

    const props = mapStateToProps(state);
    expect(props).toEqual(expectedProps);
  });
});

