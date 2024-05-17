'use client';

import { useCallback, useMemo, useState } from "react";
import { ModalContext } from "./ModalContext";
import Modal from 'components/common/Modal';


const ModalProvider = ({ children }) => {

  const [isModalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    content: {},
    type: '',
  })

  const toggleModal = useCallback(
    content  => {
      setModalOpen(!isModalOpen);
      if (content) {
        setModalData(content)
      }
    }, [isModalOpen])

  const modalValues = useMemo(() => {
    return {
      isModalOpen, toggleModal, modalData
    }
  }, [isModalOpen, toggleModal, modalData])

  return (
    <ModalContext.Provider value={modalValues}>
      {children}
      <Modal
        modalData={modalData}
        isOpen={isModalOpen}
      />
    </ModalContext.Provider>
  );
};

export { ModalProvider };