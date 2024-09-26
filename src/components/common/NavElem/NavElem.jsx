import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/Text';
import modsClasses from 'utils/modsClasses';
import Arrow from './Arrow';

import s from './NavElem.module.scss';

const NavElem = ({
  item,
  option,
  size,
  onClick,
  onBlur,
  currentOpen,
  children,
}) => {
  const mods = modsClasses(s, {
    option,
  });

  if (item.arrow) {
    return (
      <Text as='li' size={size} className={cx(s.root, mods)}>
        <a
          onClick={onClick}
          onBlur={onBlur}
          className={cx(s.button, currentOpen ? s.active : '')}>
          {item.title}
          <Arrow className={currentOpen ? s.dropdown : s.static} />
        </a>
        
        {children}
      </Text>
    );
  }
  return (
    <Text as='li' size={size} key={item.id} className={cx(s.root, mods)}>
      {item.icon ? (
        <div className={s.icon}>
          <img src={`images/svg/${item.icon}`} alt='story ' />
        </div>
      ) : null}
      <a href={item.link}>{item.title}</a>
    </Text>
  );
};

export default NavElem;
