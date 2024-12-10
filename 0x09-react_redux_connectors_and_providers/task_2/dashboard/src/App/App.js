// src/App/App.js
import React from 'react';
import { connect } from 'react-redux';
import { loginRequest, logout } from '../actions/uiActionCreators';

function App({ isLoggedIn, displayDrawer, login, logout }) {
  const handleLogin = (email, password) => {
    login(email, password);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in</h1>
          {/* Assuming you have a form and handling form submission */}
          <button onClick={() => handleLogin('email@example.com', 'password')}>Login</button>
        </div>
      )}
      {displayDrawer && <div>Notification Drawer</div>}
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

export const mapDispatchToProps = {
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

