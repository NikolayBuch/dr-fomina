import React from 'react';
import PropTypes from 'prop-types'

import Footer from 'components/Footer';
import Header from 'components/Header';
import UpButton from 'components/UpButton';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    <UpButton/>
      
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any
}