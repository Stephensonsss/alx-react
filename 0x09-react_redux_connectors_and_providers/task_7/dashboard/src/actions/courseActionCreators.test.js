// src/actions/courseActionCreators.test.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchCourses, setCourses } from './courseActionCreators';
import { SET_COURSES, SET_LOADING_STATE } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Action Creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_COURSES when fetching courses has been done', () => {
    fetchMock.getOnce('/courses.json', {
      body: [{ id: '1', name: 'Course 1' }],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: SET_LOADING_STATE, data: true },
      { type: SET_COURSES, data: [{ id: '1', name: 'Course 1' }] },
      { type: SET_LOADING_STATE, data: false },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

