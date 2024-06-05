import React from 'react';

import NavTop from 'components/NavTop';
import NavBottom from 'components/NavBottom';

import s from './Header.module.scss';


const Header = () => {
  return (
    <header>
      <nav className={s.root}>
        <div className={s.root2}>
          <NavTop />
          <NavBottom />
        </div>
      </nav>
    </header>
  );
};

export default Header;
