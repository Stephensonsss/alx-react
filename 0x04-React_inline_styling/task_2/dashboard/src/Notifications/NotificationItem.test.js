import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct html when passed as props', () => {
    const wrapper = shallow(<NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<li data-notification-type="urgent"><u>test</u></li>');
  });

  it('applies the correct class based on type prop', () => {
    const wrapperDefault = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapperDefault.find('li').hasClass(css(styles.default))).toBe(true);

    const wrapperUrgent = shallow(<NotificationItem type="urgent" value="test" />);
    expect(wrapperUrgent.find('li').hasClass(css(styles.urgent))).toBe(true);
  });
});

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

