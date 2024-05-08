import React from 'react';

import { menu } from './constant';

import s from './Nav.module.scss';
import Text from 'components/Text';

const Nav = () => {
  return (
    <ul className={s.root}>
      {menu.map((item) => (
        <li className={s.nav}>
          <div className={s.icon}>
            <img src={`images/svg/${item.icon}`} alt='story ' />
          </div>
          <Text as='a' size='' className={s.link} href={item.link}>{item.title}</Text>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
