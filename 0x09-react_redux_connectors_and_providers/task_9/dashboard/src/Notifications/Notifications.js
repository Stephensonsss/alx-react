// src/Notifications/Notifications.js
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications, setNotificationFilter, markAsRead }) => (
  <div className="Notifications">
    <p>Here is the list of notifications:</p>
    <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
    <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
    <ul>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} {...notification} onClick={() => markAsRead(notification.id)} />
      ))}
    </ul>
  </div>
);

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default Notifications;

