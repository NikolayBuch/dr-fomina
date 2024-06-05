import React from 'react';

import s from './Directions.module.scss'

import { card } from 'stubs/mainCard';
import Cards from 'components/Cards';
import Container from 'components/Container';

const Directions = () => {
  return (
    <Container size='big' className={s.cards}>
       {card.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
    </Container>
  );
};

export default Directions;