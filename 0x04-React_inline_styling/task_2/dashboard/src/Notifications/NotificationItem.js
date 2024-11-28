import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, value, html }) {
  return (
    <li
      className={css(
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

