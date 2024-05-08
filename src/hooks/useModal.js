import { useCallback, useState } from 'react';


const useModal = () => {

  const [isModalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    content: {},
    type: '',
  })
  const toggleModal = useCallback(
    (content = false) => {
      setModalOpen(!isModalOpen);
      if (content) {
        setModalData(content)
      }
    }, [isModalOpen])

  return { isModalOpen, toggleModal, modalData }
};

export default useModal;

