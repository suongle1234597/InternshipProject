import React, { useState, useEffect } from 'react'
import './Modal.scss'
import Slide from '../Slide/Slide'

const Modal = props => {
    const [index, setIndex] = useState(1)
    useEffect(() => {
        if (index <= props.optionsModal.length) {
            setTimeout(() => {
                setIndex(index + 1)
            }, 3000)
        } else {
            setIndex(1)
        }
    }, [index])

    return (
        <div className="contentModal">
            <div className="modalpreview container flex">
                {props.optionsModal.length !== 0 ? <p>{index} of {props.optionsModal.length} photos</p> : ""}
                <button onClick={props.handleClickCloseModal}><i className="fas fa-times"></i></button>
                {props.optionsModal.length !== 0 && <Slide group={props.optionsModal} items={1} dots={false} loop={true} autoplay={false} autoplayTimeout={3000} startPosition={index} mouseDrag={false} />}
            </div>
        </div>
    )
}

export default Modal
