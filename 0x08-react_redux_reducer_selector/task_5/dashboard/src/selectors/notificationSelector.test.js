// src/selectors/notificationSelector.test.js

import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
  const state = {
    notifications: {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ]
    }
  };

  it('filterTypeSelected should return the filter type', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications', () => {
    const notifications = getNotifications(state);
    expect(notifications).toEqual(state.notifications.notifications);
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    const expectedUnreadNotifications = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ];
    expect(unreadNotifications).toEqual(expectedUnreadNotifications);
  });
});

