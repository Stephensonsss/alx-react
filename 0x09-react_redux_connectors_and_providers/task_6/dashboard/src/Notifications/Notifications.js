// src/Notifications/Notifications.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { listNotifications, loading, markAsRead } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="Notifications">
        <ul>
          {listNotifications.valueSeq().map((notification) => (
            <li key={notification.id}>
              {notification.value}
              <button onClick={() => markAsRead(notification.id)}>Mark as read</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotifications(state),
  loading: state.notifications.get('loading'),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

