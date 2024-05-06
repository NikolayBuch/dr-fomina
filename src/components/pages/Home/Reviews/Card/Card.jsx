import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import s from './Card.module.scss';

const Card = ({ item }) => {
  return (
    <div className={s.root}>
      {item.userpic ? (
        <div className={s.userpic}>
          <img src={`images/${item.userpic}`} alt='user pic' />
        </div>
      ) : (
        ''
      )}
      <Text as='h4' size='h4' className={s.title}>
        {item.name}, {item.city}
      </Text>
      <Text as='p' size='small1' className={s.date}>
        {item.date}
      </Text>
      <Text as='p' size='normal' className={s.text}>
        {item.excerpt}
      </Text>
      <button className={s.button}>Читать отзыв</button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.any
}
