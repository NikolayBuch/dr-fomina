import React from 'react';
import PropTypes from 'prop-types';


const ArrowIcon = ({ side }) => {

  const getIcon = (name) => {
    switch (name) {
      case 'right':
        return (
          <path
            d='M29.48 1L42.597 15.5L29.481 30M40.848 15.5H1H40.848Z'
            stroke='currentColor'
          />
        );
      case 'left':
        return (
          <path
            d='M16.1169 1L2.99992 15.5L16.1159 30M4.74892 15.5H44.5969H4.74892Z'
            stroke='currentColor'
          />
        );

      default:
        return '';
    }
  };

  return (
    <svg width='46' height='31' viewBox='0 0 46 31' fill='none'>
      {getIcon(side)}
    </svg>
  );
};

export default ArrowIcon;

ArrowIcon.propTypes = {
  side: PropTypes.string
}
