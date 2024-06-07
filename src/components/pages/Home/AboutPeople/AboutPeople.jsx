import React from 'react';

import Container from 'components/Container';
import Text from 'components/Text';
import Button from 'components/Button';
import Animation from 'components/Animation';

import s from './AboutPeople.module.scss';

const AboutPeople = () => {
  return (
    <div className={s.root}>
      <Container className={s.container} size='normal'>
        <div className={s.wrapper}>
          <Animation>
            <Text as='h2' size='h2' className={s.title}>
              Все дело в людях
            </Text>
          </Animation>
          <Animation>
            <Text as='p' size='medium' className={s.subtitle}>
              Вы можете быть уверены, что доверяете своё здоровье в опытные и
              надежные руки.
            </Text>
          </Animation>
          <Animation>
            <Button option='main' className={s.button}>
              <a href='#'>НАЙТИ СВОЕГО ВРАЧА</a>
            </Button>
          </Animation>
        </div>
        <div>
          <Animation>
            <img src='/images/main/team 2.png' alt='' />
          </Animation>
        </div>
      </Container>
    </div>
  );
};

export default AboutPeople;
