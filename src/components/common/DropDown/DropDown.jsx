import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'

import s from './DropDown.module.scss';

const DropDown = ({children, currentOpen}) => {
  return (
    <ul className={cx(s.root, { [s.active]: currentOpen})}>
     {children}
    </ul>
  );
};

export default DropDown;

DropDown.propTypes = {
  children: PropTypes.array,
  currentOpen: PropTypes.bool

}
