import React from 'react'
import Slide from '../Slide/Slide'
import Button from '../Button/Button'

const GroupProduct = props => {
    const { title, items, link, buttonName } = props
    return (
        <div className="transportation">
            <h3>{title}</h3>
            <Slide items={items} />
            <Button link={link} name={buttonName} />
        </div>
    )
}

export default GroupProduct
