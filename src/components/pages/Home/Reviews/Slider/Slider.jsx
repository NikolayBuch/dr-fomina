'use client';

import React, { useState } from 'react';
import cx from 'classnames';

import ButtonSlider from './ButtonSlider';
import Card from '../Card';
import { list } from 'stubs/reviews';

import s from './Slider.module.scss';

const Slider = () => {
  const [slideIndex, setSliderIndex] = useState(0);

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
            className={s.inner}
            style={{ transform: `translateX(${-793 * slideIndex}px)` }}>
            {list.map((item) => (
              <Card item={item} key={item.id} />
            ))}
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
