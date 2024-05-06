import React from 'react';

import Text from 'components/Text';
import Slider from './Slider';

import s from './Reviews.module.scss';

const Reviews = () => {
  return (
    <div className={s.root}>
      <Text as='h2' size='h2' className={s.title}>
        Отзывы наших клиентов
      </Text>
      <Slider/>
      
    </div>
  );
};

export default Reviews;
