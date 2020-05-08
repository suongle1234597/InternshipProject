import React from 'react'
import './Product.scss'
import { Link } from 'react-router-dom'

const Product = props => {
    return (
        <div className="product">
            <Link to={`/product/${props.id}`}> <img src={props.img} alt="" /></Link>
            <p className="name">{props.name}</p>
            <p className="serial">{props.serial_number}</p>
        </div>
    )
}

export default Product
