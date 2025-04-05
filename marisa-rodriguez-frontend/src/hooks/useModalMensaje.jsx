// src/hooks/useModalMensaje.js
import { useState } from "react";
import ModalMensaje from "../components/ModalMensaje/ModalMensaje";
import { useNavigate } from "react-router-dom";

export default function useModalMensaje() {
  const [modalData, setModalData] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const openModal = ({ titulo, subtitulo }) => {
    setModalData({ titulo, subtitulo });
    setIsClosing(false);
  };

  const closeModal = ({ redirect = false, delay = 1000 } = {}) => {
    setIsClosing(true);
    setTimeout(() => {
      setModalData(null); // cierra el modal visualmente
      if (redirect) {
        navigate("/");
      }
    }, delay);
  };

  const Modal = modalData ? (
    <ModalMensaje
      titulo={modalData.titulo}
      subtitulo={modalData.subtitulo}
      onClose={() => closeModal()} // solo cierra sin redirigir
      isClosing={isClosing}
    />
  ) : null;

  return { Modal, openModal, closeModal, isOpen: !!modalData };
}
