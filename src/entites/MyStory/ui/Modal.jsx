import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
export default function Modal({isShowModal, setIsShowModal}) {
  return (
        <ReactModal 
            isOpen={isShowModal}
            onRequestClose={() => setIsShowModal(false)}
            style={StyledModal}
        >

        </ReactModal>
  )
}

const StyledModal = ReactModal.Styles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
    },
    content: {
      width: "46.625rem",
      height: "28.375rem",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      justifyContent: "center",
      overflow: "auto",
    },
  };
