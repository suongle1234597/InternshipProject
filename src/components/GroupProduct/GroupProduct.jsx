import React from 'react'
import Slide from '../Slide/Slide'
import Button from '../Button/Button'
import './GroupProduct.scss'

const GroupProduct = props => {
    const { title, items, link, buttonName } = props

    return (
        <div className="groupProduct">
            <h3>{title}</h3>
            <Slide group={items} items={2.2} dots={false} loop={true} autoplay={false} autoplayTimeout={5000} />
            <Button link={link} name={buttonName} />
        </div>
    )
}

export default GroupProduct
