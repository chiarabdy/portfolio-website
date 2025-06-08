// src/components/common/Modal.jsx
import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -20px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  border: 2px solid white;
`;

const Modal = ({ src, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalImage src={src} alt="Project full-size view" />
      </ModalContent>
    </Overlay>
  );
};

export default Modal;