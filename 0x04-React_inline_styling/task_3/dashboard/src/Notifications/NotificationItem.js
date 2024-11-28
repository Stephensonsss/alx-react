import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, value, html }) {
  return (
    <li
      className={css(
        styles.notificationItem,
        type === 'urgent' ? styles.urgent : styles.default
      )}
      data-notification-type={type}
      dangerouslySetInnerHTML={html ? { __html: html.__html } : undefined}
    >
      {!html && value}
    </li>
  );
}

const styles = StyleSheet.create({
  notificationItem: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;

