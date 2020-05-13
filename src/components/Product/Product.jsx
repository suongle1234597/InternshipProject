import React from 'react'
import './Product.scss'
import { Link } from 'react-router-dom'

const Product = props => {
    return (
        <div className="product">
            <Link to={`/${props.domain}/${props.id}`}> <img src={props.img} alt="" /></Link>
            <p className="name">{props.name}</p>
            <p className="serial">{props.price}</p>
        </div>
    )
}

export default Product
