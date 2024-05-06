import React from 'react';

import s from './Header.module.scss'

import Container from 'components/Container';
import NavTop from 'components/NavTop';
import NavBottom from 'components/NavBottom';

const Header = () => {
  return (
    <header >
      <nav className={s.root}>
      <Container size='normal' className={s.root2}>
        <NavTop />
        <NavBottom/>
      </Container>
      </nav>
      
    </header>
  );
};

export default Header;
