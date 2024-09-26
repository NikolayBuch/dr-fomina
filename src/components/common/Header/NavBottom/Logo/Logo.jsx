import React from 'react';

import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.root}>
      <a href=''>
        <img src='images/svg/logo.svg' alt='logo' />
      </a>
    </div>
  );
};

export default Logo;
