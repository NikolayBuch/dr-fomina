import React from 'react';

import Header from 'components/Header';

import s from './Home.module.scss';
import Main from './Main';
import Directions from './Directions';
import Advantages from './Advantages';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Directions/>
      <Advantages/>
      <Reviews/>
    </div>
  );
};

export default Home;
