// src/Notifications/NotificationsContainer.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, setNotificationFilter, markAsRead } from '../actions/notificationActionCreators';
import Notifications from './Notifications';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <Notifications {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

