import React from 'react'
import './ViewEquipment.scss'
import Search from '../Search/Search'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'

const ViewEquipment = props => {
    return (
        <div>
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
                            {/* <Slide /> */}
                            <Product />
                            <div className="repair">
                                <p>Hove more Questions?</p>
                                <Link to="/view"><button className="view" >Call Us</button></Link>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <Search function="rental" />
                        <div className="forsale">
                            <h3>FOR RENT</h3>
                            {/* <Slide /> */}
                            <Product />
                            {/* <Link to="/cate"><button className="view" >View Equipment for Rent</button></Link> */}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ViewEquipment
