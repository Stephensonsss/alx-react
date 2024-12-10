// src/selectors/notificationSelector.js
import { createSelector } from 'reselect';

export const getUnreadNotifications = createSelector(
  (state) => state.notifications.get('notifications'),
  (notifications) => notifications.filter((notification) => !notification.isRead)
);

