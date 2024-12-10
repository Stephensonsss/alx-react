// src/Notifications/Notifications.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { listNotifications, loading } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="Notifications">
        <ul>
          {listNotifications.valueSeq().map((notification) => (
            <li key={notification.id}>{notification.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listNotifications: state.notifications.get('notifications'),
  loading: state.notifications.get('loading'),
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

