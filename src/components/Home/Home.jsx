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
    ///?????????????????????
    // const repairMaintenances = useSelector(state => state.repairMaintenancesReducer.repairMaintenances)
    const dispatch = useDispatch()
    const [itemsForSale, setItemsForSale] = useState([])
    const [itemsForRent, setItemsForRent] = useState([])
    const [itemsForTransportation, setItemsForTransportation] = useState([])
    const [itemsForRepairMaintenances, setItemsForRepairMaintenances] = useState([])

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getTransportation())
        dispatch(getRepairMaintenances())

        return () => {
            console.log("clean up")
        }
    }, [])

    useEffect(() => {
        if (!is_Empty(product)) {
            const arr = product.filter(item => item.purpose === "for_sale")
            const array = []
            arr.forEach(item => {
                array.push(<Product domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
            });
            setItemsForSale(array)

            const arr2 = product.filter(item => item.purpose === "for_rent")
            const array2 = []
            arr2.forEach(item => {
                array2.push(<Product domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
            });
            setItemsForRent(array2)
        }
        return () => {
            console.log("clean up")
        }
    }, [product])

    useEffect(() => {
        if (!is_Empty(transportation)) {
            const array3 = []
            transportation.forEach(item => {
                array3.push(<Product domain="service" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
            });
            setItemsForTransportation(array3)
        }
        return () => {
            console.log("clean up")
        }
    }, [transportation])

    // useEffect(() => {
    //     if (!is_Empty(repairMaintenances)) {
    //         const array4 = []
    //         repairMaintenances.forEach(item => {
    //             array4.push(<Product img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
    //         });
    //         setItemsForTransportation(array4)
    //     }
    //     return () => {
    //         console.log("clean up")
    //     }
    // }, [repairMaintenances])
    // console.log(repairMaintenances)


    const items = [
        <img src="http://huasing.vinova.sg/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--47b439f636b71f80b6d95e9023c8d70ec2f08b34/3.PNG" alt="" />,
        <img src="https://cdn.tgdd.vn/Files/2019/01/01/1142002/s8high_800x600.jpg" alt="" />,
        <img src="https://cdn.voh.com.vn/voh/Image/2019/06/10/thayloimuonnoibangnhunghinhanhbuonmangdaytamtrang8_20190610221410.jpg" alt="" />,
    ]

    return (
        <div className="home">
            <div className="home-under">
                <Slide group={items} items={1} dots={false} loop={true} autoplay={true} autoplayTimeout={5000} />
            </div>
            <div className="home-bottom">
                <ul className="flex">
                    <li><button onClick={props.handleClickSale} className={!props.toggle ? "active" : ""}>Purchase</button></li>
                    <li><button onClick={props.handleClickRent} className={!props.toggle ? "" : "active"}> Rental</button></li>
                </ul>
                {!props.toggle ?
                    <>
                        <Search function="sale" />
                        {itemsForSale.length != 0 ?
                            <GroupProduct title="FOR SALE" items={itemsForSale} link="/view" buttonName="View Equipment for Sale" />
                            : "No equipment for sale"}
                    </>
                    :
                    <>
                        <Search function="rental" />
                        {itemsForSale.length != 0 ?
                            <GroupProduct title="FOR RENT" items={itemsForRent} link="/view" buttonName="View Equipment for Rent" />
                            : "No equipment for rent"}
                    </>
                }
            </div>

            <div className="transportation">
                {itemsForTransportation.length != 0 ?
                    <GroupProduct title="TRANSPORTATION SERVICE" items={itemsForTransportation} link="/view" buttonName="View Transportation Service" />
                    : ""}
            </div>

            <div className="repair">
                {itemsForRepairMaintenances.length != 0 ?
                    <GroupProduct title="REPAIR / MAINTENANCE" items={itemsForRepairMaintenances} link="/view" buttonName="Call us" />
                    : ""}
                {/* <p>Hove more Questions?</p>
                <button className="view">Call us</button> */}
            </div>
        </div>
    )
}

export default Home
