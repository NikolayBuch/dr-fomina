

import { useContext } from 'react';

import { ModalContext } from 'context/ModalProvider/ModalContext';

const useModal = () => {
  const { isModalOpen, toggleModal, modalData } = useContext(ModalContext);

  return {
    isModalOpen,
    toggleModal,
    modalData,
  };
};

export default useModal;

