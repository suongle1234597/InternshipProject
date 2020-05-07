import React from 'react'
import './ProductDetail.scss'
import { Link } from 'react-router-dom'
import Slide from '../Slide/Slide'

const ProductDetail = () => {
    const items = [
        <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--47b439f636b71f80b6d95e9023c8d70ec2f08b34/3.PNG" alt="" />,
        <img src="https://cdn.tgdd.vn/Files/2019/01/01/1142002/s8high_800x600.jpg" alt="" />,
        <img src="https://cdn.voh.com.vn/voh/Image/2019/06/10/thayloimuonnoibangnhunghinhanhbuonmangdaytamtrang8_20190610221410.jpg" alt="" />,
    ]
    return (
        <div className="productdetail">
            <div className="slide">
                {/* <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--47b439f636b71f80b6d95e9023c8d70ec2f08b34/3.PNG" alt="" /> */}
                {/* <Slide items={items} /> */}
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
                    <tr>
                        <th>Remarks</th>
                    </tr>

                </tbody>

            </table>
            <p>dfdfd</p>




            <div className="contact flex">
                <button>Call Us</button>
                <Link to='/request'><button>Request for Quote</button></Link>

            </div>
        </div>
    )
}

export default ProductDetail
