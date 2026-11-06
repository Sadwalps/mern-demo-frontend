import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addDataAPI } from './service/allApi';

function Add() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        imgurl: "",
        title: "",
        description: ""
    })
    console.log(data);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCancel = () => {
        setData({
            imgurl: "",
            title: "",
            description: ""
        })
    }
    const handleAdd = async () => {
        const { imgurl, title, description } = data
        console.log(imgurl, title, description);
        if (!imgurl || !title || !description) {
            alert(`Fill the form completely`)
        } else {
            const reqBody = new FormData()
            reqBody.append("imgurl", imgurl)
            reqBody.append("title", title)
            reqBody.append("description", description)

            const result = await addDataAPI(reqBody)
            if (result.status == 200) {
                alert(`Image successfully added`)
            } else if (result.status == 406) {
                alert(result.response.data)
            } else {
                alert(`Something went wrong`)
            }
        }
    }

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
                    <input value={data.imgurl} onChange={(e) => setData({ ...data, imgurl: e.target.value })} type="text" className='form-control py-1 text-center bg-info' placeholder='Img Url' />
                    <input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} type="text" className='form-control py-1 text-center bg-info mt-2' placeholder='Title' />
                    <textarea value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} name="" id="" className='form-control py-1 text-center bg-info mt-2' placeholder='Description'></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add