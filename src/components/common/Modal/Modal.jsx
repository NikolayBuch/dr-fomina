'use client';

import React, { useContext, useEffect, useState } from 'react';
import cx from 'classnames';

import { ModalContext } from 'context/modalContext';

import s from './Modal.module.scss';
import ModalButton from 'components/Modal/ModalButton';
import CardModal from 'pages/Home/Reviews/CardModal';

const Modal = ({ isOpen }) => {
  const { toggleModal, modalData } = useContext(ModalContext);
  const [showModal, setShowModal] = useState(false);
  const ModalComponent = getModalContent(modalData.type);

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
