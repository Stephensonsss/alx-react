// task_0/dashboard/src/CourseList/CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('th').length).toEqual(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />);
    expect(wrapper.find('th').length).toEqual(2);
  });

  it('renders two td elements within a tr when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test1" textSecondCell="test2" />);
    expect(wrapper.find('tr').length).toEqual(1);
    expect(wrapper.find('td').length).toEqual(2);
  });

  it('applies the correct background color styles based on isHeader prop', () => {
    const wrapperHeader = shallow(<CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />);
    const wrapperRow = shallow(<CourseListRow isHeader={false} textFirstCell="test1" textSecondCell="test2" />);
    
    expect(wrapperHeader.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
    expect(wrapperRow.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});

