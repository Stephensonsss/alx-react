// src/Notifications/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let props;

  beforeEach(() => {
    props = {
      notifications: [],
      setNotificationFilter: jest.fn(),
      markAsRead: jest.fn(),
    };
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls setNotificationFilter with URGENT when the urgent button is clicked', () => {
    const wrapper = shallow(<Notifications {...props} />);
    wrapper.find('button').at(0).simulate('click');
    expect(props.setNotificationFilter).toHaveBeenCalledWith('URGENT');
  });

  it('calls setNotificationFilter with DEFAULT when the default button is clicked', () => {
    const wrapper = shallow(<Notifications {...props} />);
    wrapper.find('button').at(1).simulate('click');
    expect(props.setNotificationFilter).toHaveBeenCalledWith('DEFAULT');
  });

  it('calls markAsRead when a notification is clicked', () => {
    const notification = { id: '1', type: 'default', isRead: false };
    props.notifications = [notification];
    const wrapper = shallow(<Notifications {...props} />);
    wrapper.find('NotificationItem').simulate('click');
    expect(props.markAsRead).toHaveBeenCalledWith('1');
  });
});

