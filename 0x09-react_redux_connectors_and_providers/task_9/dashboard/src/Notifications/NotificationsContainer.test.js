// src/Notifications/NotificationsContainer.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('NotificationsContainer', () => {
  let props;

  beforeEach(() => {
    props = {
      fetchNotifications: jest.fn(),
      notifications: [],
      setNotificationFilter: jest.fn(),
      markAsRead: jest.fn(),
    };
  });

  it('fetches notifications on mount', () => {
    shallow(<NotificationsContainer {...props} />);
    expect(props.fetchNotifications).toHaveBeenCalled();
  });
});

