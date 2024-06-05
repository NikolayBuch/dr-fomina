import React from 'react';

import { menu } from './constant';
import Text from 'components/Text';

import s from './Nav.module.scss';

const Nav = () => {
  return (
    <ul className={s.root}>
      {menu.map((item) => (
        <li  key={item.id} className={s.nav}>
          <div className={s.icon}>
            <img src={`images/svg/${item.icon}`} alt='story ' />
          </div>
          <Text as='a' size='normal' className={s.link} href={item.link}>{item.title}</Text>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
