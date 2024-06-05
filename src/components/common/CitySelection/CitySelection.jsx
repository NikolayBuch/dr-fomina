'use client';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'

import Header from './Header';
import YourCity from './YourCity';
import CityList from './CityList';
import { Context } from 'context/Context';

import s from './CitySelection.module.scss';

const CitySelection = ({ item, closeModal }) => {

  const { setCity } = useContext(Context);
  const [isYourCity, setYourCity] = useState(true);

  const handleYourCity = () => {
    setYourCity(false);
  };

  const handleAnswer = () => {
    setCity({ city: item.city, answer: true });
    closeModal();
  };

  return (
    <div className={s.root}>
      <Header
        text={isYourCity ? `Ваш город — ${item.city}?` : 'Выберите ваш город'}
      />
      {isYourCity ? (
        <YourCity handleAnswer={handleAnswer} handleYourCity={handleYourCity} />
      ) : (
        <CityList closeModal={closeModal} />
      )}
    </div>
  );
};

export default CitySelection;

CitySelection.propTypes = {
  item: PropTypes.object,
  closeModal: PropTypes.func
}

