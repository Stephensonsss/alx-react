// src/selectors/notificationSelector.test.js
import { Map } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = {
    notifications: Map({
      filter: 'DEFAULT',
      entities: Map({
        '1': { id: '1', type: 'default', isRead: false },
        '2': { id: '2', type: 'urgent', isRead: false },
        '3': { id: '3', type: 'urgent', isRead: true },
      }),
    }),
  };

  it('should return all unread notifications when filter is DEFAULT', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result.toJS()).toEqual([
      { id: '1', type: 'default', isRead: false },
      { id: '2', type: 'urgent', isRead: false },
    ]);
  });

  it('should return only unread urgent notifications when filter is URGENT', () => {
    const urgentState = {
      ...state,
      notifications: state.notifications.set('filter', 'URGENT'),
    };
    const result = getUnreadNotificationsByType(urgentState);
    expect(result.toJS()).toEqual([{ id: '2', type: 'urgent', isRead: false }]);
  });
});

