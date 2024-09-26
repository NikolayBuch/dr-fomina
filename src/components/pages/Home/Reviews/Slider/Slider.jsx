'use client';

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ButtonSlider from './ButtonSlider';

import s from './Slider.module.scss';

const Slider = ({ children, list }) => {
  const [slideIndex, setSliderIndex] = useState(0);
  const innerElement = useRef(793);
  const widthInner = innerElement.current.offsetWidth;

  const length = list.length;

  const handleMoveRight = () => {
    slideIndex === length - 1
      ? setSliderIndex(0)
      : setSliderIndex(slideIndex + 1);
  };

  const handleMoveLeft = () => {
    slideIndex === 0
      ? setSliderIndex(length - 1)
      : setSliderIndex(slideIndex - 1);
  };

  const handleClick = (index) => {
    setSliderIndex(index);
  };

  return (
    <div className={s.root}>
      <div className={s.container}>
        <ButtonSlider side='left' onClick={handleMoveLeft} />
        <div className={s.wrapper}>
          <div
            ref={innerElement}
            className={s.inner}
            style={{ transform: `translateX(${-widthInner * slideIndex}px)` }}>
            {children}
          </div>
        </div>
        <ButtonSlider side='right' onClick={handleMoveRight} />
      </div>
      <div>
        {list.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={cx(s.button, { [s.active]: index === slideIndex })}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  children: PropTypes.any,
  list: PropTypes.array,
};
