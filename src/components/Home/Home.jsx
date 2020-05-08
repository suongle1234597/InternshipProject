import React, { useState, useEffect } from 'react'
import './Home.scss'
import Search from '../Search/Search'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'
import Slide from '../Slide/Slide'
import { getProduct } from '../../action/ProductAction'
import { getTransportation } from '../../action/TransportationAction'
import { getRepairMaintenances } from '../../action/RepairMaintenancesAction'
import { useSelector, useDispatch } from 'react-redux'
import is_Empty from '../../isEmpty'
import GroupProduct from '../GroupProduct/GroupProduct'

const Home = props => {
    const product = useSelector(state => state.productReducer.product)
    const transportation = useSelector(state => state.transportationReducer.transportation)
    // const repairMaintenances = useSelector(state => state.repairMaintenancesReducer.repairMaintenances)
    const dispatch = useDispatch()
    const [productForSale, setProductForSale] = useState([])
    const [productForRent, setProductForRent] = useState([])
    const itemsForSale = [], items3 = [], items4 = [], items5 = []

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getTransportation())
        // dispatch(getRepairMaintenances())

        //neu product != rong

        // console.log(product)
        // if (!is_Empty(product)) {
        //     console.log("sssssssssssss")
        //  

        // setProductForRent(product.data.filter(item => item.purpose === "for_rent"))

        // if (productForRent.length != 0) {
        //     productForRent.map(item => items3.push(<Product img={item.images.url.original} name={item.model} price={item.serial_number} />))
        // }
        // }

        //neu transportation != rong
        // if (!is_Empty(transportation)) {
        //     transportation.map(item => items4.push(<Product img={item.images.url.original} name={item.transportation_type} price={item.weight} />))
        // }
        return () => {
            console.log("clean up")
        }
    }, [])

    useEffect(() => {
        if (!is_Empty(product)) {
            const arr = product.filter(item => item.purpose === "for_sale")
            arr.forEach(item => {
                itemsForSale.push(<Product img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
            });
        }
        return () => {
            console.log("clean up")
        }
    }, [product])

    const items = [
        <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--47b439f636b71f80b6d95e9023c8d70ec2f08b34/3.PNG" alt="" />,
        <img src="https://cdn.tgdd.vn/Files/2019/01/01/1142002/s8high_800x600.jpg" alt="" />,
        <img src="https://cdn.voh.com.vn/voh/Image/2019/06/10/thayloimuonnoibangnhunghinhanhbuonmangdaytamtrang8_20190610221410.jpg" alt="" />,
    ]

    // //neu transportation != rong

    // const items5 = [
    //     <Link to="/listimg" className="item flex">
    //         <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" />
    //         <p>Engine Overhaul</p>
    //     </Link>,
    //     <Link to="/listimg" className="item flex">
    //         <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" />
    //         <p>Engine Overhaul</p>
    //     </Link>, <Link to="/listimg" className="item flex">
    //         <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" alt="" />
    //         <p>Engine Overhaul</p>
    //     </Link>
    // ]

    // repairMaintenances.map(item => items5.push(
    //     <Link to="/listimg" className="item flex">
    //         <img src={item.images.url.original} alt="" />
    //         <p>{item.name}</p>
    //     </Link>))

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
                        {/* <div className="forsale">
                            <h3>FOR SALE</h3>
                            {!is_Empty(product) && product.filter(item => item.purpose === "for_sale").map(item => <Product key={item.id} img={item.images[0].url.original} name={item.model} serial_number={item.serial_number} />)}
                            <Product img="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" name="ABC" serial_number="AKB4" />

                            <Slide group={items2} items={2} dots={false} loop={true} autoplay={false} autoplayTimeout={5000} />
                            <Link to="/view"><button className="view">View Equipment for Sale</button></Link>
                        </div> */}

                        {/* {itemsForSale.length != 0 ? <GroupProduct title="FOR SALE" items={itemsForSale} link="/view" buttonName="View Equipment for Sale" /> : "fffffffffff"} */}
                        {itemsForSale.length !== 0 ? "aaaaaaaaaaaa" : "fffffffffff"}
                    </>
                    :
                    <>
                        <Search function="rental" />
                        <div className="forsale">
                            <h3>FOR RENT</h3>
                            {/* <Slide /> */}
                            <Product img="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" name="ABC" serial_number="AKB4" />
                            <Link to="/view"><button className="view" >View Equipment for Rent</button></Link>
                        </div>
                    </>
                }
            </div>


            <div className="transportation">
                <h3>TRANSPORTATION SERVICE</h3>
                <Product img="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" name="ABC" serial_number="AKB4" />

                {/* {!is_Empty(transportation) && transportation.map(item => <Product key={item.id} img={item.images[0].url.original} name={item.transportation_type} serial_number={item.weight} />)} */}
                <button className="view">View Transportation Service</button>
            </div>

            <div className="repair">
                <h3>REPAIR / MAINTENANCE</h3>
                <Product img="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec412ca63953529dec1b793e14b6c140dbcc95fe/Front%20Right.jpeg" name="ABC" serial_number="AKB4" />
                {/* <Slide group={items5} items={2} dots={false} loop={true} autoplay={true} autoplayTimeout={5000} /> */}
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
