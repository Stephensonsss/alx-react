// src/selectors/notificationSelector.js

export const filterTypeSelected = (state) => state.notifications.filter;

export const getNotifications = (state) => state.notifications.notifications;

export const getUnreadNotifications = (state) =>
  state.notifications.notifications.filter(notification => !notification.isRead);

