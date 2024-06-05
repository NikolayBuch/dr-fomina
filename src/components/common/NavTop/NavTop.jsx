import React from 'react';

import s from './NavTop.module.scss';
import Nav from './Nav';
import Container from 'components/Container';


const HeaderTop = () => {
  return (
      <Container size='normal' className={s.root}>
      <Nav/>

      </Container>
  );
};

export default HeaderTop;
