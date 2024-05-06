import React from 'react';

import Text from 'components/Text';

import s from './Cards.module.scss';

const Cards = ({ item }) => {
  return (
    <div className={s.root}>
      <div className={s.background}>
        <img src={`/images/${item.img}`} alt='' />
      </div>
      <div className={s.content}>
        <Text as='h3' size='h3' className={s.title}>
          {item.title}
        </Text>
        <Text as='p' size='normal' className={s.subtitle}>
          {item.subtitle}
        </Text>
      </div>
      <a href={item.link} className={s.button}> Подробнее</a>
    </div>
  );
};

export default Cards;
