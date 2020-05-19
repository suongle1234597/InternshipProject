import React, { useState } from 'react'
import './Modal.scss'
import isEmpty from '../../isEmpty'
import Slide from '../Slide/Slide'

const Modal = props => {
    const [index, setIndex] = useState(0)

    const onChanged = e => {
        console.log(e.page.index)
        // setIndex(e.item.index + 1)
    }

    return (
        <div className="modalpreview container flex">
            {props.optionsModal.length !== 0 ? <p>{index} of {props.optionsModal.length} photos</p> : ""}
            <button onClick={props.handleClickCloseModal}><i className="fas fa-times"></i></button>
            {props.optionsModal.length !== 0 && <Slide group={props.optionsModal} items={1} dots={false} loop={true} autoplay={true} autoplayTimeout={5000} onChanged={onChanged} />}

            {/* {!isEmpty(options) && options.map((index, item) =>
                <>
                    <p>{index + 1} of 3 photos</p>
                    <img src="https://i.pinimg.com/originals/0e/1e/8a/0e1e8ace2d78fe052f607aae724720e7.jpg" alt="" />
                </>
            )} */}
        </div>
    )
}

export default Modal
