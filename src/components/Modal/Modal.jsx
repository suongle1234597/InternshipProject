import React, { useState } from 'react'
import './Modal.scss'
import Slide from '../Slide/Slide'

const Modal = props => {
    const [index, setIndex] = useState(1)

    const onChanged = e => {
        console.log(e.item)
        if (e.item.index === 0) {
            setIndex(1)
        } else if (e.item.index !== 0) {
            console.log(e.item.index)
            setIndex(e.item.index - 1)
        }
    }

    return (
        <div className="contentModal">
            <div className="modalpreview container flex">
                {props.optionsModal.length !== 0 ? <p>{index} of {props.optionsModal.length} photos</p> : ""}
                <button onClick={props.handleClickCloseModal}><i className="fas fa-times"></i></button>
                {props.optionsModal.length !== 0 && <Slide group={props.optionsModal} items={1} dots={false} loop={true} autoplay={true} autoplayTimeout={2000} onChanged={onChanged} startPosition={0} />}
            </div>
        </div>
    )
}

export default Modal
