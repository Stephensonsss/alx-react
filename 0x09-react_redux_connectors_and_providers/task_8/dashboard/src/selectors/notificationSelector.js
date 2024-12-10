// src/selectors/notificationSelector.js
import { createSelector } from 'reselect';

export const getFilter = (state) => state.notifications.get('filter');
export const getNotifications = (state) => state.notifications.get('entities');

export const getUnreadNotificationsByType = createSelector(
  [getFilter, getNotifications],
  (filter, notifications) => {
    return notifications
      .filter((notification) => !notification.isRead)
      .filter((notification) =>
        filter === 'URGENT' ? notification.type === 'urgent' : true
      )
      .valueSeq()
      .toList();
  }
);

