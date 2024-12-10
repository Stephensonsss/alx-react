// src/Footer/Footer.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Footer({ user }) {
  return (
    <footer>
      {user ? <p>Logged in as {user.email}</p> : <p>Not logged in</p>}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export default connect(mapStateToProps)(Footer);

