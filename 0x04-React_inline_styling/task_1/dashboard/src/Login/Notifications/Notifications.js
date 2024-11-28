import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import closeIcon from './close-icon.png';

function Notifications({ displayDrawer }) {
  return (
    <div className={css(styles.notifications)}>
      <div className={css(styles.menuItem)}>Your notifications</div>
      {displayDrawer && (
        <div className={css(styles.notificationPanel)}>
          <button
            style={{
              color: '#3a3a3a',
              fontWeight: 'bold',
              background: 'none',
              border: 'none',
              fontSize: '15px',
              position: 'absolute',
              right: '2px',
              top: '2px',
              cursor: 'pointer',
              outline: 'none',
            }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="close icon" className={css(styles.closeIcon)} />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  notifications: {
    padding: '10px',
    border: '1px dashed #e1484c',
  },
  menuItem: {
    textAlign: 'right',
  },
  notificationPanel: {
    position: 'relative',
  },
  closeIcon: {
    height: '15px',
    width: '15px',
  }
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;

