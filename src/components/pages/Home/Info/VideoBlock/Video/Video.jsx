import React from 'react';

const Video = () => {
  return (
    <iframe
    width='530'
    height='370'
    src='https://www.youtube.com/embed/pBBihNye-yc?autoplay=1'
    title='YouTube video player'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    referrerpolicy='strict-origin-when-cross-origin'
    allowfullscreen></iframe>
  );
};

export default Video;