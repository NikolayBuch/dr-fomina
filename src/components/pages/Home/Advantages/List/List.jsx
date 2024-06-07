import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import Animation from 'components/Animation';

import s from './List.module.scss';

const List = ({ item }) => {
  return (
    <Animation>
      <li className={s.root}>
        <div className={s.icon}>
          <img src={`images/${item.image}`} alt='' />
        </div>
        <Text as='p' size='normal' className={s.text}>
          {item.text}
        </Text>
      </li>
    </Animation>
  );
};

export default List;

List.propTypes = {
  item: PropTypes.object,
};
