import React from 'react'
import './SearchProduct.scss'
import { Link } from 'react-router-dom'

const SearchProduct = () => {
    return (
        <div className="settings searchproduct">
            <h6>Search Products</h6>
            <Link to='/aboutUs'>
                <div className="item flex">
                    Product Type
            <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
            <Link to='/termsAndConditions'>
                <div className="item flex">
                    Brand
            <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
            <Link to='/'>
                <div className="item flex">
                    Availability
            <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
            <div className="item">
                Running
                <div className="running flex">
                    <div className="inputNumber">
                        <input type="number" value={334} />
                        <p>hrs</p>
                    </div>
                    <p className="to">-</p>
                    <div className="inputNumber">
                        <input type="number" value={334} />
                        <p>hrs</p>
                    </div>
                </div>
            </div>
            <div className="item year">
                Year
                <div className="running flex">
                    <div className="inputNumber">
                        <input type="number" value={334} />
                    </div>
                    <p className="to">-</p>
                    <div className="inputNumber">
                        <input type="number" value={334} />
                    </div>
                </div>
            </div>
            <div className="contact">
                <button className="view">Reset Selection</button>
            </div>
        </div>
    )
}

export default SearchProduct
