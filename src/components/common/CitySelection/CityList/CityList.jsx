'use client';
import React, { useContext } from 'react';
import PropTypes from 'prop-types'

import Text from 'components/Text';
import { listCity } from '../constants';
import { Context } from 'context/Context';

import s from './CityList.module.scss';

const CityList = ({ closeModal }) => {
  const { setCity } = useContext(Context);

  const handleCity = (item) => {
    setCity({ city: item.name, answer: true });
    closeModal();
  };

  return (
    <div className={s.root}>
      <Text as='ul' size='h3'>
        {listCity.map((item) => (
          <li key={item.id}>
            <a href={item.link} onClick={() => handleCity(item)}>
              {item.name}
            </a>
          </li>
        ))}
      </Text>
    </div>
  );
};

export default CityList;

CityList.propTypes = {
  closeModal: PropTypes.func
}
