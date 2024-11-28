import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 && <CourseListRow textFirstCell="No course available yet" />}
        {listCourses.map((course) => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        ))}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
    width: '100%',
    border: '1px solid black',
  }
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  })),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;

