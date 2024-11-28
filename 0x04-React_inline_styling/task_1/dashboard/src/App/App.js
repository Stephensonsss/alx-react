import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection';

function App() {
  return (
    <div className={css(styles.app)}>
      <Header />
      <BodySection />
      <Footer />
    </div>
  );
}

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  body: {
    padding: '20px',
  },
  footer: {
    borderTop: '1px solid #eaeaea',
    padding: '20px',
    textAlign: 'center',
  }
});

export default App;

