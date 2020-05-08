import React from 'react'
import './Product.scss'
import { Link } from 'react-router-dom'

const Product = props => {
    return (
        <div className="product">
            {/* <Link to={`/product/${props.id}`}> <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" /></Link> */}
            <Link to="/product/123"> <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" /></Link>
            <p className="name">Lorry Crane</p>
            <p className="serial">NK002</p>
        </div>
    )
}

export default Product
