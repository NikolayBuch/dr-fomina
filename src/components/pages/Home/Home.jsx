'use client';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import Main from './Main';
import Directions from './Directions';
import Advantages from './Advantages';
import Reviews from './Reviews';
import Info from './Info';
import AboutPeople from './AboutPeople';
import useModal from 'hooks/useModal';
import { Context } from 'context/Context';

const Home = () => {
  const {city} = useContext(Context)
  const { toggleModal } = useModal();

  useEffect(() => {
    if (city.answer === false) {
      toggleModal({content: city, type:'city'})
    }
  },[city]);

  return (
    <div>
      <Main />
      <Directions />
      <Advantages />
      <Reviews />
      <Info />
      <AboutPeople />
    </div>
  );
};

export default Home;
