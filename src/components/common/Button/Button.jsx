import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';

import s from './Button.module.scss';

const Button = ({ option, children, className }) => {
  const mods = modsClasses(s, {
    option,
  });
  return <button className={cx(s.root, mods, className)}>{children}</button>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  option: PropTypes.oneOf(['main', 'user']),
};

Button.defaultProps = {
  option: 'main',}

