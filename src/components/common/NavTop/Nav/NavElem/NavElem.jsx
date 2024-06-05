'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/Text';
import DropDown from 'components/DropDown';
import modsClasses from 'utils/modsClasses';
import { drop } from '../constants';
import Arrow from './Arrow';

import s from './NavElem.module.scss';

const NavElem = ({ item, option }) => {
  
  const [isOpen, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!isOpen);
  };

  const mods = modsClasses(s, {
    option,
  });

  if (item.icon) {
    return (
      <Text as='li' size='large' className={cx(s.root, mods)}>
        <button
          onClick={changeOpen}
          onBlur={changeOpen}
          className={cx(s.button, isOpen ? s.active : '')}>
          {item.title}
          <Arrow className={isOpen ? s.dropdown : s.static} />
        </button>
        <DropDown currentOpen={isOpen}>
          {drop.map((item) => (
            <NavElem option='drop' key={item.id} item={item} />
          ))}
        </DropDown>
      </Text>
    );
  }
  return (
    <Text as='li' size='large' key={item.id} className={cx(s.root, mods)}>
      <a href={item.link}>{item.title}</a>
    </Text>
  );
};

export default NavElem;

NavElem.propTypes = {
  item: PropTypes.any,
  option: PropTypes.oneOf(['left', 'center', 'drop']),
};
