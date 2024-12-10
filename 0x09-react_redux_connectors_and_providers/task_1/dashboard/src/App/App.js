// src/App/App.js
import React from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

function App({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
      <button onClick={displayNotificationDrawer}>Show Notifications</button>
      {displayDrawer && <div>Notification Drawer</div>}
      {displayDrawer && <button onClick={hideNotificationDrawer}>Hide Notifications</button>}
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

