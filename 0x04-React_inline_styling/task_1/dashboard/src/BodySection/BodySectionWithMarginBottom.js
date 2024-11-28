import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.marginBottom)}>
      <BodySection {...props} />
    </div>
  );
}

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '20px',
  }
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;

