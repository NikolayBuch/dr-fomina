'use client';

import React, { useState } from 'react';

import NavElem from 'components/NavElem';
import Contacts from './Contacts';
import DropDown from 'components/DropDown';
import { left, center, right, drop } from './constants';

import s from './Nav.module.scss';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={s.root}>
      <div className={s.tabletHidden}>
        <ul className={s.root}>
          {left.map((item) => (
            <NavElem
              currentOpen={isOpen}
              onClick={changeOpen}
              onBlur={changeOpen}
              key={item.id}
              size='large'
              option='left'
              item={item}>
              {' '}
              <DropDown option='main' currentOpen={isOpen}>
                {drop.map((item) => (
                  <NavElem option='drop' key={item.id} item={item} />
                ))}
              </DropDown>{' '}
            </NavElem>
          ))}
        </ul>
      </div>
      <div>
        <ul className={s.wrapper}>
          {center.map((item) => (
            <NavElem key={item.id} option='center' size='large' item={item} />
          ))}
        </ul>
      </div>
      <div className={s.wrapper}>
        {right.map((item) => (
          <Contacts key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
