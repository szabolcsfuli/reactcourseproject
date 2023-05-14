import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Popup = props => {
  const { handleClose, handleOk } = props

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body ? props.body : 'Are you sure?'}</Modal.Body>
        <Modal.Footer>
          <Button variant='canel' size="sm" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='danger' size="sm" onClick={handleOk}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup
