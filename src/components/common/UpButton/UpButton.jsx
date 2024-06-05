'use client';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import s from './UpButton.module.scss';

const UpButton = () => {
  
  const [isVisibleButton, setVisibleButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 800 ? setVisibleButton(true) : setVisibleButton(false);
    });
  });

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cx(s.root, { [s.active]: isVisibleButton })}>
      <button className={s.button} onClick={scrollToUp}>
        <svg
          width='24'
          height='14'
          viewBox='0 0 24 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.27295 12.6367L11.9635 1.94619L22.654 12.6367'
            stroke='currentColor'
            strokeWidth='2'
          />
        </svg>
      </button>
    </div>
  );
};

export default UpButton;
