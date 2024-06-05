import React from 'react';

import Container from 'components/Container';
import Text from 'components/Text';
import Button from 'components/Button';

import s from './AboutPeople.module.scss';

const AboutPeople = () => {
  return (
    <div className={s.root}>
      <Container className={s.container} size='normal'>
        <div className={s.wrapper}>
          <Text as='h2' size='h2' className={s.title}>
            Все дело в людях
          </Text>
          <Text as='p' size='medium' className={s.subtitle}>
            Вы можете быть уверены, что доверяете своё здоровье в опытные и
            надежные руки.
          </Text>
          <Button option='main' className={s.button}>
            <a href='#'>НАЙТИ СВОЕГО ВРАЧА</a>
          </Button>
        </div>
        <div>
          <img src='/images/main/team 2.png' alt='' />
        </div>
      </Container>
    </div>
  );
};

export default AboutPeople;
