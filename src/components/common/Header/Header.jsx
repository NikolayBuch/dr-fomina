import React from 'react';

import NavTop from 'components/Header/NavTop';
import NavBottom from 'components/Header/NavBottom';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <nav className={s.root}>
        <div>
          <NavTop />
          <NavBottom />
        </div>
      </nav>
    </header>
  );
};

export default Header;
