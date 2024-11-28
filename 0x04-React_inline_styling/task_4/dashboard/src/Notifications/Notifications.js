import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import closeIcon from './close-icon.png';

function Notifications({ displayDrawer }) {
  return (
    <div className={css(styles.notifications)}>
      <div className={css(styles.menuItem, displayDrawer && styles.hidden)}>Your notifications</div>
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
          <p className={css(styles.notificationText)}>Here is the list of notifications</p>
          <ul className={css(styles.notificationList)}>
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

const bounceKeyframes = {
  '0%, 100%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
};

const opacityKeyframes = {
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
};

const styles = StyleSheet.create({
  notifications: {
    padding: '10px',
    border: '1px dashed #e1484c',
    '@media (max-width: 900px)': {
      padding: '0',
    },
  },
  menuItem: {
    textAlign: 'right',
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  hidden: {
    display: 'none',
  },
  notificationPanel: {
    position: 'relative',
    '@media (max-width: 900px)': {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: 'white',
      zIndex: '100',
    },
  },
  closeIcon: {
    height: '15px',
    width: '15px',
  },
  notificationText: {
    fontSize: '20px',
    '@media (max-width: 900px)': {
      fontSize: '20px',
    },
  },
  notificationList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;

