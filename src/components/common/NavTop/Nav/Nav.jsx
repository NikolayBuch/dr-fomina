import React from 'react';

import NavElem from './NavElem';
import Contacts from './Contacts';
import { left } from './constants';
import { center } from './constants';
import { right } from './constants';

import s from './Nav.module.scss';


const Nav = () => {
  return (
    <div className={s.root}>
      <div>
        <ul className={s.root}>
          {left.map((item) => (
            <NavElem key={item.id} option='left' item={item} />
          ))}
        </ul>
      </div>
      <div>
        <ul className={s.root}>
          {center.map((item) => (
            <NavElem key={item.id} option='center' item={item} />
          ))}
        </ul>
      </div>
      {right.map((item) => (
        <Contacts key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Nav;
