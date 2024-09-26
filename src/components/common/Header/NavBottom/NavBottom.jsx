'use client';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import Nav from 'components/Header/NavBottom/Nav';
import Button from 'components/Button';
import Logo from './Logo';
import Container from 'components/Container';
import Sidebar from 'components/Sidebar';

import s from './NavBottom.module.scss';
import BurgerMenu from './BurgerMenu';

const NavBottom = () => {
  const [isOpen, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!isOpen);
  };
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 75 ? setFixed(true) : setFixed(false);
    });
  });

  return (
    <div className={cx(s.root, { [s.fixed]: isFixed })}>
      <Container size='normal' className={s.container}>
        <div className={s.inner}>
          <Logo />
          <BurgerMenu onClick={() => changeOpen()} />
          {isOpen ? <Sidebar handleOpen={changeOpen} isOpen={isOpen} /> : null}
        </div>

        <Nav />
        <div className={s.wrapper}>
          <Button className={s.sing} option='main'>
            ЗАПИСАТЬСЯ НА ПРИЕМ
          </Button>
          <Button option='user' className={s.user}>
            <img src='/images/svg/user.svg'></img>
            <p className={s.line}>ЛИЧНЫЙ КАБИНЕТ</p>{' '}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NavBottom;
