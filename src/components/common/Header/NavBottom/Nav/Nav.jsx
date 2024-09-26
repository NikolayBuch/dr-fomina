import React from 'react';

import { menu } from './constant';

import s from './Nav.module.scss';
import NavElem from 'components/NavElem';

const Nav = () => {
  return (
    <div className={s.tabletHidden}>
      <ul className={s.root}>
      {menu.map((item) => (
        <NavElem key={item.id} option='bottom' size='normal' item={item} />
      ))}
    </ul>
    </div>
    
  );
};

export default Nav;
