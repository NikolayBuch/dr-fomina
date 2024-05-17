// 'use client';

// import { useCallback, useState } from 'react';


// const useModal = () => {

//   const [isModalOpen, setModalOpen] = useState(false)
//   const [modalData, setModalData] = useState({
//     content: {},
//     type: '',
//   })
//   const toggleModal = useCallback(
//     (content = false) => {
//       setModalOpen(!isModalOpen);
//       if (content) {
//         setModalData(content)
//       }
//     }, [isModalOpen])

//   return { isModalOpen, toggleModal, modalData }
// };

// export default useModal;

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

