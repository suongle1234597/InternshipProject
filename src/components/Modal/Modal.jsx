import React, { useState } from 'react'
import './Modal.scss'
import isEmpty from '../../isEmpty'
import Slide from '../Slide/Slide'

const Modal = props => {
    const [index, setIndex] = useState(0)

    const options = [
        <img src="https://i.pinimg.com/originals/0e/1e/8a/0e1e8ace2d78fe052f607aae724720e7.jpg" alt="" />,
        <img src="https://i.pinimg.com/originals/9a/7a/6f/9a7a6f2b9c7b8433e7c947fb38d4f067.jpg" alt="" />,
        <img src="https://hpconnect.vn/wp-content/uploads/2019/09/dich-vu-ghep-anh-chuyen-nghiep-hpconnect-2.jpg" alt="" />
    ]

    const onChanged = (e) => {
        console.log(e)
        // setIndex(e.item.index + 1)
    }
    return (
        <div className="modalpreview container flex">
            <p>{index} of 3 photos</p>
            <button onClick={props.handleClickCloseModal}><i className="fas fa-times"></i></button>
            {props.optionsModal.lenght !== 0 && <Slide group={props.optionsModal} items={1} dots={false} loop={true} autoplay={true} autoplayTimeout={5000} onChanged={onChanged} />}

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
