import React from 'react';

import Text from 'components/Text';
import Button from 'components/Button';
import Container from 'components/Container';

import s from './VideoBlock.module.scss';
import Video from './Video/Video';

const VideoBlock = () => {
  return (
    <Container size='normal' className={s.root}>
      <Video></Video>
      {/* <iframe
        width='530'
        height='370'
        src='https://www.youtube.com/embed/pBBihNye-yc?si=h7ubShgKmbUAXlBD'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen></iframe> */}
      <div className={s.description}>
        <Text as='h2' size='h2' className={s.title}>
          Здоровье пациентов — наша основная задача, с которой мы успешно
          справляемся
        </Text>
        <Text as='p' size='medium' className={s.text}>
          Сеть клиник «Клиника Доктора Фомина» — это современные медицинские
          центры, оснащенные новейшим оборудованием, где работают только
          высококвалифицированные специалисты.
        </Text>
        <Button option='main'>
          <a>Узнать больше</a>
        </Button>
      </div>
    </Container>
  );
};

export default VideoBlock;
