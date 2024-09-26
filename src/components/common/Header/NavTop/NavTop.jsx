import React from 'react';

import Nav from './Nav';
import Container from 'components/Container';

import s from './NavTop.module.scss';

const HeaderTop = () => {
  return (
    <Container size='normal' className={s.root}>
      <Nav />
    </Container>
  );
};

export default HeaderTop;
