import React from 'react';
import PropTypes from 'prop-types'

import Button from 'components/Button';

import s from './YourCity.module.scss'


const YourCity = ({handleYourCity, handleAnswer}) => {
  return (
      <div className={s.agreement}>
        <Button option='main' className={s.yes} onClick={handleAnswer}> ДА</Button>
        <Button className={s.no} onClick={handleYourCity} > Нет, другой город</Button>
      </div>
  );
};

export default YourCity;

YourCity.propTypes = {
  handleYourCity: PropTypes.func,
  handleAnswer: PropTypes.func
}