import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteDataAPI } from './service/allApi';
function Delete({item}) {
    const [show, setShow] = useState(false);
        
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            const handleDelete =async(id)=>{
          const result = await deleteDataAPI(id)
          if(result.status == 200){
            alert(result.data)
            setTimeout(() => {
              handleClose()
            }, 1000);
          }else{
            alert(`Something went wrong`)
          }
            }
  return (
    <>
    <button className='btn btn-danger w-100' onClick={handleShow}>Delete</button>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                   <h2>Do you really want to delete the image of {item?.title}</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={()=>handleDelete(item?._id)}>
                        Yes
                    </Button>
                    
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default Delete