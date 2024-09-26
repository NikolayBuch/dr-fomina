import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Header from 'components/Header';
import UpButton from 'components/UpButton';
import Sidebar from 'components/Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <UpButton />
      {/* <Sidebar /> */}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
