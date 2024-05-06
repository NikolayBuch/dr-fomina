import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

const Arrow = ({className}) => {
  return (
    <svg
      className={className}
      width='8'
      height='4'
      viewBox='0 0 16 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 0.486328L7.911 7.39833L15.208 0.486328'
        stroke='currentColor'
      />
    </svg>
  );
};

export default Arrow;

Arrow.propTypes = {
  classNames: PropTypes.string
}
