import React from 'react'
import './Modal.scss'

const Modal = () => {
    return (
        <div className="modalpreview container flex">
            <p>1 of 3 photos</p>
            <i className="fas fa-times"></i>
            <img src="https://i.pinimg.com/originals/0e/1e/8a/0e1e8ace2d78fe052f607aae724720e7.jpg" alt="" />
        </div>
    )
}

export default Modal
