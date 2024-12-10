// src/Notifications/Notifications.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { fetchNotifications, setNotificationFilter } from '../actions/notificationActionCreators';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { notifications, setNotificationFilter } = this.props;

    return (
      <div className="Notifications">
        <p>Here is the list of notifications:</p>
        <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
        <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
        <ul>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

