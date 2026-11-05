import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='px-2 py-2 btn btn-info m-4' onClick={handleShow}>
                Add Images
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-info'>Add </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className='form-control py-1 text-center bg-info' placeholder='Img Url' />
                    <input type="text" className='form-control py-1 text-center bg-info mt-2' placeholder='Title' />
                    <textarea name="" id="" className='form-control py-1 text-center bg-info mt-2' placeholder='Description'></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add