import React, { useState } from 'react'
import './Modal.scss'
import Slide from '../Slide/Slide'

const Modal = props => {
    const [index, setIndex] = useState(1)

    const onChanged = e => {
        // console.log(e)
    }

    return (
        <div className="contentModal">
            <div className="modalpreview container flex">
                {props.optionsModal.length !== 0 ? <p>{index} of {props.optionsModal.length} photos</p> : ""}
                <button onClick={props.handleClickCloseModal}><i className="fas fa-times"></i></button>
                {props.optionsModal.length !== 0 && <Slide group={props.optionsModal} items={1} dots={false} loop={true} autoplay={true} autoplayTimeout={5000} onChanged={onChanged} />}
            </div>
        </div>
    )
}

export default Modal
