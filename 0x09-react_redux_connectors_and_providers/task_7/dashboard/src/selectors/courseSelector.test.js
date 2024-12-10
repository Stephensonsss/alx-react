// src/selectors/courseSelector.test.js
import { Map } from 'immutable';
import { getListCourses } from './courseSelector';

describe('Course Selectors', () => {
  it('should return a list of courses', () => {
    const state = {
      courses: Map({
        entities: Map({
          '1': { id: '1', name: 'Course 1' },
          '2': { id: '2', name: 'Course 2' },
        }),
      }),
    };

    const result = getListCourses(state);
    expect(result.toJS()).toEqual([
      { id: '1', name: 'Course 1' },
      { id: '2', name: 'Course 2' },
    ]);
  });

  it('should return an empty list when there are no courses', () => {
    const state = {
      courses: Map({
        entities: Map(),
      }),
    };

    const result = getListCourses(state);
    expect(result.toJS()).toEqual([]);
  });
});

