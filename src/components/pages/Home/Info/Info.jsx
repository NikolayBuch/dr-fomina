import React from 'react';

import s from './Info.module.scss';
import VideoBlock from './VideoBlock';
import News from './News';

const Info = () => {
  return (
    <div className={s.root}>
      <VideoBlock />
      <News/>
    </div>
  );
};

export default Info;
