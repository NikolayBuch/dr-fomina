import React from 'react';

import Container from 'components/Container';
import Text from 'components/Text';
import { list } from 'stubs/advantages';
import List from './List';

import s from './Advantages.module.scss'

const Advantages = () => {
  return (
    <div className={s.root}>
      <Container>
        <Text as='h2' size='h2' className={s.title}>
          Наши преимущества
        </Text>
        <ul className={s.list}>
          {list.map((item) => (
            <List item={item} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Advantages;
