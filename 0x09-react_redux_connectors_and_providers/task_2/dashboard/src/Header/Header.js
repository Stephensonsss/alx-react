// src/Header/Header.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';

function Header({ user, logout }) {
  return (
    <header>
      <h1>Header</h1>
      {user && <button onClick={logout}>Logout</button>}
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export default connect(mapStateToProps, { logout })(Header);

