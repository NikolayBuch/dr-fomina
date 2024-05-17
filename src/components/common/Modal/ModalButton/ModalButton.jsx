import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './ModalButton.module.scss';

const ModalButton = ({ className, onClick }) => {
  return (
    <button className={cx(s.root, className)} onClick={onClick}>
      <svg width='23' height='22' viewBox='0 0 23 22' fill='none'>
        <path
          d='M1.5 1.5L21.0064 21.0064M21.5 1.5L1.99359 21.0064'
          stroke='currentColor'
        />
      </svg>
    </button>
  );
};

export default ModalButton;

ModalButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}
