'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import useModal from 'hooks/useModal';

import s from './Modal.module.scss';
import ModalButton from 'components/Modal/ModalButton';
import CardModal from 'pages/Home/Reviews/CardModal';

const Modal = ({ isOpen, modalData}) => {
  const { toggleModal } = useModal();
  const [showModal, setShowModal] = useState(false);
  // const ModalComponent = getModalContent(modalData.type);
  console.log(modalData);

  useEffect(() => {
    isOpen ? setShowModal(true) : setShowModal(false);
  }, [isOpen]);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      toggleModal();
    }, 300);
  };

  return isOpen ? (
    <div
      className={cx(s.root, { [s.active]: showModal })}
      onClick={() => closeModal()}>
      <div className={cx(s.content, { [s.active]: showModal })}>
        <ModalButton onClick={() => closeModal()} />
        <ModalComponent item={modalData.content} />
      </div>
    </div>
  ) : null;
};

export default Modal;

export const getModalContent = (type) => {
  switch (type) {
    case 'review':
      return CardModal;

    default:
      return null;
  }
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
};
