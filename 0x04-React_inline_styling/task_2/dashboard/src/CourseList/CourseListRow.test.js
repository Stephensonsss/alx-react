import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('applies the correct class based on isHeader prop', () => {
    const wrapperHeader = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapperHeader.find('tr').hasClass(css(styles.headerRow))).toBe(true);

    const wrapperDefault = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
    expect(wrapperDefault.find('tr').hasClass(css(styles.defaultRow))).toBe(true);
  });
});

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
});

