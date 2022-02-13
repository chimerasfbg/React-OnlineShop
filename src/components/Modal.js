import React from 'react'

const Modal = ({selectedImg,setSelectedImg}) => {
  return (
    <div className='opacity' onClick={()=>setSelectedImg(null)}>
        <img src={selectedImg} alt="pic" />
    </div>
  )
}

export default Modal