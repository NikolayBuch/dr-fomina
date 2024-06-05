'use client';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import Nav from 'components/NavBottom/Nav';
import Button from 'components/Button';
import Logo from './Logo';
import Container from 'components/Container';

import s from './NavBottom.module.scss';

const NavBottom = () => {

  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 75 ? setFixed(true) : setFixed(false);
    });
  });
  
  return (
    <div className={cx(s.root, { [s.fixed]: isFixed })}>
      <Container size='normal' className={s.container}>
        <Logo />
        <Nav />
        <Button className={s.sing} option='main'>
          ЗАПИСАТЬСЯ НА ПРИЕМ
        </Button>
        <Button option='user' className={s.user}>
          <img src='/images/svg/user.svg'></img>
          <p className={s.line}>ЛИЧНЫЙ КАБИНЕТ</p>{' '}
        </Button>
      </Container>
    </div>
  );
};

export default NavBottom;
