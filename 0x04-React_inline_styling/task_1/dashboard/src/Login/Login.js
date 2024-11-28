import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" className={css(styles.input)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" className={css(styles.input)} />
      <button>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    margin: '20px',
  },
  input: {
    margin: '10px',
  }
});

export default Login;

