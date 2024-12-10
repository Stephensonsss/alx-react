// src/actions/courseActionCreators.js
import { SET_COURSES } from './actionTypes';

export const setCourses = (courses) => ({
  type: SET_COURSES,
  data: courses,
});

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data));
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        dispatch(setLoadingState(false));
        console.error('Error fetching courses:', error);
      });
  };
};

