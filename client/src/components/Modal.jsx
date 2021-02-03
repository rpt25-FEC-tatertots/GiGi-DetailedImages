import React from 'react';
import ReactDom from 'react-dom';
import { CgClose } from 'react-icons/cg';

const MODAL_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  top: '25%',
  left: '25%',
  transform: 'translate(-25%, -33%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: '1000'
}

const OVERLAY_STYLES = {
  // position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: '#fff',
  zIndex: '1000'
}

export default function Modal(props) {
  const { isOpen, images, handleClose } = props;
  if (!isOpen) {
    return null
  }
  let display = images.map((image, index) => {
    if (index < 4) {
      return <img src={`https://${image}`} alt="" key={index}></img>
    } else {
      return <video width="100%" height="100%" autoPlay={true} loop={true} muted="" src={`https://${image}`} type="video/mp4" />
    }
  })

  return ReactDom.createPortal(
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <div onClick={handleClose}><CgClose size='1.25rem'></CgClose></div>
          {display}
        </div>
      </div>,
    document.getElementById('portal')
  )
}