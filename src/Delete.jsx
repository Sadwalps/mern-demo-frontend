import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Delete() {
    const [show, setShow] = useState(false);
        
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn btn-danger w-100' onClick={handleShow}>Delete</button>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                   <h2>Do you really want to delete this image</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Yes
                    </Button>
                    
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default Delete