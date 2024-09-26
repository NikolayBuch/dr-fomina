import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';

import s from './DropDown.module.scss';

const DropDown = ({ children, currentOpen, option }) => {
  const mods = modsClasses(s, { option });


  return (
    <div className={cx(s.root, mods, { [s.active]: currentOpen })} >
      <ul className={cx( s.list)}>
        {children}
      </ul>
    </div>
  );
};

export default DropDown;

DropDown.propTypes = {
  children: PropTypes.array,
  currentOpen: PropTypes.bool,
};
