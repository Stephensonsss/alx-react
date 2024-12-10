// src/App/App.js
import React from 'react';
import { connect } from 'react-redux';

function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn')
  };
};

export default connect(mapStateToProps)(App);

