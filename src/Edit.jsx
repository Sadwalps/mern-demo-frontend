import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editDataAPI } from './service/allApi';
import { editResponseContext } from './context/ContextShare';
function Edit({ item }) {
    const { setEditResponse } = useContext(editResponseContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editData, setEditData] = useState({
        imgurl: item?.imgurl,
        title: item?.title,
        description: item?.description
    })

    const handleCancel = () => {
        setEditData({
            imgurl: item?.imgurl,
            title: item?.title,
            description: item?.description
        })
    }

    const handleEdit = async (id) => {
        const result = await editDataAPI(id, editData)
        if (result.status == 200) {
            alert(`Image successfully edited`)
            setTimeout(() => {
                handleClose()
            }, 1000);
            setEditResponse(result)
        } else {
            alert(`Something went wrong`)
        }
    }

    return (
        <>
            <button className='btn btn-secondary w-100' onClick={handleShow}>Edit</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-info'>Edit </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={editData.imgurl} onChange={(e) => setEditData({ ...editData, imgurl: e.target.value })} type="text" className='form-control py-1 text-center bg-info' placeholder='Img Url' />
                    <input value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} type="text" className='form-control py-1 text-center bg-info mt-2' placeholder='Title' />
                    <textarea value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} name="" id="" className='form-control py-1 text-center bg-info mt-2' placeholder='Description'></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={() => handleEdit(item?._id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit