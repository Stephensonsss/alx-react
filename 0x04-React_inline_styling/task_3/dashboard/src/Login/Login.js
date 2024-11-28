import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputContainer)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className={css(styles.input)} />
      </div>
      <div className={css(styles.inputContainer)}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className={css(styles.input)} />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    margin: '20px',
    '@media (max-width: 900px)': {
      textAlign: 'left',
    },
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20px',
    },
  },
  input: {
    marginTop: '5px',
    '@media (min-width: 900px)': {
      marginLeft: '10px',
      marginTop: '0',
    },
  },
  button: {
    display: 'block',
    marginTop: '20px',
    '@media (min-width: 900px)': {
      marginTop: '0',
    },
  },
});

export default Login;

