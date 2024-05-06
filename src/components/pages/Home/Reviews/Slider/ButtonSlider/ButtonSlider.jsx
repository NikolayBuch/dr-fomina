import React from 'react';
import PropTypes from 'prop-types'

import ArrowIcon from './ArrowIcon';

import s from './ButtonSlider.module.scss'

const ButtonSlider = ({onClick, side}) => {
  return (
    <button className={s.button} onClick={onClick}>
      <ArrowIcon side={side}/>
    </button>
  );
};

export default ButtonSlider;

ButtonSlider.propTypes = {
  onClick: PropTypes.func,
  side: PropTypes.string,
}
