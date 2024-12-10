// src/Notifications/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('Notifications Component', () => {
  let props;

  beforeEach(() => {
    props = {
      fetchNotifications: jest.fn(),
      setNotificationFilter: jest.fn(),
      notifications: [],
    };
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
});

