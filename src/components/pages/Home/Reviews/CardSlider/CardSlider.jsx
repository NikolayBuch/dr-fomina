import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import s from './CardSlider.module.scss';

const CardSlider = ({ item, onFindReview }) => {
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

      <button className={s.button} onClick={() => onFindReview(item)}>
        <p>Читать отзыв</p>

        <svg width='25' height='12' viewBox='0 0 25 12' fill='none'>
          <path
            d='M24.168 5.969H1M19.166 1L24.21 5.97L19.166 10.94'
            stroke='currentColor'
          />
        </svg>
      </button>
    </div>
  );
};

export default CardSlider;

CardSlider.propTypes = {
  item: PropTypes.any,
  onFindReview: PropTypes.func,
};
