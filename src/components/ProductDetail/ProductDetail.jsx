import React from 'react'
import './ProductDetail.scss'

const ProductDetail = () => {
    return (
        <div className="productdetail">
            <div className="slide">
                <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--47b439f636b71f80b6d95e9023c8d70ec2f08b34/3.PNG" alt="" />

            </div>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                    </tr>
                </tbody>
            </table>

            <div className="contact flex">
                <button>Call Us</button>
                <button>Request for Quote</button>
            </div>
        </div>
    )
}

export default ProductDetail
