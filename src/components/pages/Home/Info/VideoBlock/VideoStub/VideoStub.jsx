import React from 'react';
import PropTypes from 'prop-types';

import s from './VideoStub.module.scss';

const VideoStub = ({onClick}) => {
  return (
      <div onClick={onClick} className={s.root}>
        <img src='images/video_stub.png'></img>
        <button className={s.button}>
          <svg width='15' height='21' viewBox='0 0 15 21' fill='none'>
            <path
              d='M15 10.3923L-9.08524e-07 20.7846L0 -6.55671e-07L15 10.3923Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
  );
};

export default VideoStub;


VideoStub.propTypes ={ 
  onClick: PropTypes.func
}