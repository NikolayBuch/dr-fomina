'use client';
import React, { useState } from 'react';

import Text from 'components/Text';
import Button from 'components/Button';
import Container from 'components/Container';

import s from './VideoBlock.module.scss';
import VideoStub from './VideoStub';
import Video from './Video/';

const VideoBlock = () => {
  const [isStubs, setStabs] = useState(true);

  const handleClick = () => {
    setStabs(false);
  };
  return (
    <Container size='normal' className={s.root}>
      {isStubs ? <VideoStub onClick={() => handleClick()} /> : <Video />}

      <div className={s.description}>
        <Text as='h2' size='h2' className={s.title}>
          Здоровье пациентов — наша основная задача, с которой мы успешно
          справляемся
        </Text>
        <Text as='p' size='medium' className={s.text}>
          Сеть клиник «Клиника Доктора Фомина» — это современные{' '}
          <a className={s.link} href='#'>
            медицинские центры
          </a>
          , оснащенные новейшим оборудованием, где работают только
          высококвалифицированные специалисты.
        </Text>
        <Button option='main' className={s.button}>
          <a href='#'>
            УЗНАТЬ БОЛЬШЕ
          </a>
        </Button>
      </div>
    </Container>
  );
};

export default VideoBlock;
