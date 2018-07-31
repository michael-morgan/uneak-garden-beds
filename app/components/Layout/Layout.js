import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from '../Footer';

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
