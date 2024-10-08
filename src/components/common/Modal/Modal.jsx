'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import useModal from 'hooks/useModal';
import ModalButton from 'components/Modal/ModalButton';
import CardModal from 'pages/Home/Reviews/CardModal';
import CitySelection from 'components/CitySelection';

import s from './Modal.module.scss';

const Modal = ({ isOpen }) => {
  const { toggleModal, modalData } = useModal();
  const [showModal, setShowModal] = useState(false);
  const ModalComponent = getModalContent(modalData.type);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      toggleModal();
    }, 600);
  };

  return isOpen ? (
    <div className={cx(s.root, { [s.active]: showModal })}>
      <div
        className={cx(s.background, showModal ? s.active : s.disable)}
        onClick={closeModal}></div>
      <div className={cx(s.content, showModal ? s.active : s.disable)}>
        <ModalButton onClick={closeModal} />
        <ModalComponent closeModal={closeModal} item={modalData.content} />
      </div>
    </div>
  ) : null;
};

export default Modal;

export const getModalContent = (type) => {
  switch (type) {
    case 'review':
      return CardModal;

    case 'city':
      return CitySelection;

    default:
      return null;
  }
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
};
