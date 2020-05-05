import React from 'react'
import './Home.scss'
import Search from '../Search/Search'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="home-under">
                <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--47b439f636b71f80b6d95e9023c8d70ec2f08b34/3.PNG" alt="" />
            </div>
            <div className="home-bottom">
                <ul className="flex">
                    <li><button>Purchase</button></li>
                    <li><button>Rental</button></li>
                </ul>
                <Search />
            </div>
            <div className="forsale">
                <h3>FOR SALE</h3>
                <Product />
                <Link to="/cate"><button className="view" >View Equipment for Sale</button></Link>
            </div>

            <div className="transportation">
                <h3>TRANSPORTATION SERVICE</h3>
                <Product />
                <button className="view">View Transportation Service</button>
            </div>

            <div className="repair">
                <h3>TRANSPORTATION SERVICE</h3>
                {/* <Product /> */}
                <Link to="/listimg" className="item flex">
                    <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" />
                    <p>Engine Overhaul</p>
                </Link>
                <p>Hove more Questions?</p>
                <button className="view">Call us</button>
            </div>
        </div>
    )
}

export default Home
