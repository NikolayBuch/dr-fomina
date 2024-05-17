'use client';
import React, { useCallback, useContext } from 'react';

import Text from 'components/Text';
import Slider from './Slider';
import CardSlider from './CardSlider';
import { list } from 'stubs/reviews';
import useModal from 'hooks/useModal';

import s from './Reviews.module.scss';

const Reviews = () => {
  const { toggleModal } = useModal();

  const findReview = useCallback(
    (item) => {
      toggleModal({ content: item, type: 'review' });
    },
    [toggleModal]
  );

  return (
    <div className={s.root}>
      <Text as='h2' size='h2' className={s.title}>
        Отзывы наших клиентов
      </Text>
      <Slider list={list}>
        {list.map((item) => (
          <CardSlider onFindReview={findReview} item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
