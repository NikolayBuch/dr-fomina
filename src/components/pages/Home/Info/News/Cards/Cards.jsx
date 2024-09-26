import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames';
import modsClasses from 'utils/modsClasses';

import Text from 'components/Text';

import s from './Cards.module.scss';

const Cards = ({ item, size }) => {
  const mods = modsClasses(s, {
    size,
  });

  return (
    <div className={cx(s.root, mods)}>
      <div className={s.image}>
        <img src={`/images/${item.img}`} />
      </div>
      <div className={s.wrapper}>
        <Text as='div' size='small1' className={s.inner}>
          <p> {item.date}</p>
          <p>{item.type}</p>
        </Text>
        {size === 'big' ? (
          <Text as='h4' size='h4' className={s.title}>
            {item.title}
          </Text>
        ) : (
          <Text as='h5' size='h5' className={s.title}>
            {item.title}
          </Text>
        )}
        {item.subtitle ? (
          <Text as='p' size='normal' className={s.hidden}>
            {item.subtitle}
          </Text>
        ) : (
          ''
        )}
        <button />
      </div>
    </div>
  );
};

export default Cards;

Cards.propTypes = {
  item: PropTypes.object,
  size: PropTypes.any,
}
