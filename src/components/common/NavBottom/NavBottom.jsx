import React from 'react';

import Nav from 'components/NavBottom/Nav';
import Button from 'components/Button';

import s from './NavBottom.module.scss';
import Logo from './Logo';

const NavBottom = () => {
  return (
    <div className={s.root}>
      <Logo />
      <Nav />
      <Button className={s.sing} option='main'>ЗАПИСАТЬСЯ НА ПРИЕМ</Button>
      <Button option='user' className={s.user}><img src='/images/user.svg'></img><p className={s.line}>ЛИЧНЫЙ КАБИНЕТ</p> </Button>
    </div>
  );
};

export default NavBottom;
