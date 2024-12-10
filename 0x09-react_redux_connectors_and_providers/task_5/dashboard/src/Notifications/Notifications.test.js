// src/Notifications/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Notifications, mapStateToProps } from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

describe('<Notifications />', () => {
  it('should call fetchNotifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<Notifications fetchNotifications={fetchNotificationsMock} listNotifications={[]} loading={false} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it('should display loading message when loading', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} loading={true} />);
    expect(wrapper.text()).toEqual('Loading...');
  });

  it('should display notifications when not loading', () => {
    const notifications = [{ id: 1, value: 'Notification 1' }];
    const wrapper = shallow(<Notifications listNotifications={notifications} loading={false} />);
    expect(wrapper.find('li')).toHaveLength(1);
  });
});

// Additional tests for action creators

