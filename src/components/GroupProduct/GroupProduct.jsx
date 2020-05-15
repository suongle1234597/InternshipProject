import React from 'react'
import Slide from '../Slide/Slide'
import Button from '../Button/Button'
import './GroupProduct.scss'
import isEmpty from '../../isEmpty'

const GroupProduct = props => {

    return (
        <div className="groupProduct">
            <h3>{props.title}</h3>
            <Slide group={props.items} items={2.2} dots={false} loop={true} autoplay={false} autoplayTimeout={5000} />
            {!isEmpty(props.buttonName) && <Button link={props.link} name={props.buttonName} />}
        </div>
    )
}

export default GroupProduct
