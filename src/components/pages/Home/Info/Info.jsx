import React from 'react';

import VideoBlock from './VideoBlock';
import News from './News';
import Animation from 'components/Animation';

import s from './Info.module.scss';

const Info = () => {
  return (
    <div className={s.root}>
      <Animation>
        <VideoBlock />
      </Animation>
      <News />
    </div>
  );
};

export default Info;
