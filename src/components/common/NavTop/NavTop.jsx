import React from 'react';

import s from './NavTop.module.scss';
import Nav from './Nav';


const HeaderTop = () => {
  return (
    <div className={s.root}>
      <Nav/>
    </div>
  );
};

export default HeaderTop;
