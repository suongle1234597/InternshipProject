import React, { useState, useEffect } from 'react'
import './Home.scss'
import Search from '../Search/Search'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'
import Slide from '../Slide/Slide'
import { getProduct } from '../../action/ProductAction'
import { useSelector, useDispatch } from 'react-redux'

const Home = props => {
    const product = useSelector(state => state.productReducer.product)
    const dispatch = useDispatch()

    const items = [
        <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--47b439f636b71f80b6d95e9023c8d70ec2f08b34/3.PNG" alt="" />,
        <img src="https://cdn.tgdd.vn/Files/2019/01/01/1142002/s8high_800x600.jpg" alt="" />,
        <img src="https://cdn.voh.com.vn/voh/Image/2019/06/10/thayloimuonnoibangnhunghinhanhbuonmangdaytamtrang8_20190610221410.jpg" alt="" />,
    ]

    const items2 = [
        <Product />,
        <Product />,
        <Product />
    ]

    const items4 = [
        <Link to="/listimg" className="item flex">
            <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" />
            <p>Engine Overhaul</p>
        </Link>,
        <Link to="/listimg" className="item flex">
            <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" />
            <p>Engine Overhaul</p>
        </Link>, <Link to="/listimg" className="item flex">
            <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" />
            <p>Engine Overhaul</p>
        </Link>
    ]

    useEffect(() => {
        // dispatch(getProduct())
        console.log(product)
        return () => {
            console.log("clean up")
        }
    }, [])

    return (
        <div className="home">
            <div className="home-under">
                <Slide group={items} items={1} dots={false} loop={true} autoplay={true} autoplayTimeout={5000} />
            </div>
            <div className="home-bottom">
                <ul className="flex">
                    <li><button onClick={props.handleClickSale}>Purchase</button></li>
                    <li><button onClick={props.handleClickRent}>Rental</button></li>
                </ul>
                {!props.toggle ?
                    <>
                        <Search function="sale" />
                        <div className="forsale">
                            <h3>FOR SALE</h3>
                            {/* <Product /> */}

                            <Slide group={items2} items={2} dots={false} loop={true} autoplay={false} autoplayTimeout={5000} />
                            <Link to="/view"><button className="view">View Equipment for Sale</button></Link>
                        </div>
                    </>
                    :
                    <>
                        <Search function="rental" />
                        <div className="forsale">
                            <h3>FOR RENT</h3>
                            {/* <Slide /> */}
                            <Product />
                            <Link to="/view"><button className="view" >View Equipment for Rent</button></Link>
                        </div>
                    </>
                }
            </div>


            <div className="transportation">
                <h3>TRANSPORTATION SERVICE</h3>
                <Product />
                <button className="view">View Transportation Service</button>
            </div>

            <div className="repair">
                <h3>TRANSPORTATION SERVICE</h3>
                <Slide group={items4} items={2} dots={false} loop={true} autoplay={true} autoplayTimeout={5000} />

                {/* <Link to="/listimg" className="item flex">
                    <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" />
                    <p>Engine Overhaul</p>
                </Link> */}
                <p>Hove more Questions?</p>
                <button className="view">Call us</button>
            </div>
        </div>
    )
}

export default Home
