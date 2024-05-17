import React from 'react';

import Header from 'components/Header';
import Main from './Main';
import Directions from './Directions';
import Advantages from './Advantages';
import Reviews from './Reviews';
import Modal from 'components/Modal';
import Info from './Info';

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Directions/>
      <Advantages/>
      <Reviews/>
      <Modal/>
      <Info/>
    </div>
  );
};

export default Home;
