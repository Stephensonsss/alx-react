import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src="logo.jpg" className={css(styles.logo)} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e1484c',
  },
  logo: {
    height: '200px',
    width: '200px',
  }
});

export default Header;

