// src/selectors/courseSelector.js
import { createSelector } from 'reselect';

export const getCourses = (state) => state.courses.get('entities');

export const getListCourses = createSelector(
  getCourses,
  (courses) => courses.valueSeq().toList()
);

