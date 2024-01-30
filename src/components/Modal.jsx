import React, { useState } from 'react'
import ShowModal from "./ShowModal"; 

function Modal() {
    const [showModal,setShowModal] = useState(false);
    const toggleModal = ()=>{
        setShowModal(!showModal);
    }
  return (
    <>
        <div className='modal-main'>
            <h1>User Details Modal</h1>
            <button onClick={toggleModal} className='modal-btn'>Open Form</button>
        </div>
        {showModal && <ShowModal handleToggle={toggleModal}/>}
        
    </>
  )
}

export default Modal