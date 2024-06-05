import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import { NEWSNAV } from '../constants';

import s from './Nav.module.scss';

const Nav = ({ currentFilter, onRenderFilter }) => {
  const valueFilter = (value) => {
    onRenderFilter(value);
  };

  return (
    <nav className={s.root}>
      <Text as='ul' size='large' className={s.list}>
        {NEWSNAV.map((item) => (
          <li
            onClick={(e) => {
              valueFilter(item.title);
            }}
            className={cx(s.nav, { [s.active]: item.title === currentFilter })}
            key={item.id}>
            {item.title}
          </li>
        ))}
      </Text>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  currentFilter: PropTypes.string,
  onRenderFilter: PropTypes.func,
};
