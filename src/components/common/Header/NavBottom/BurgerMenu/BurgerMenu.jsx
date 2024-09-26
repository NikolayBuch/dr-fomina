import React from 'react';

import s from './BurgerMenu.module.scss';


const BurgerMenu = ({onClick}) => {

  return (
    <button className={s.root} onClick={onClick}>
    </button>
  );
};

export default BurgerMenu;
