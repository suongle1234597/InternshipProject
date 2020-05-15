import React, { useState, useEffect } from 'react'
import './Home.scss'
import Search from '../Search/Search'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'
import Slide from '../Slide/Slide'
import Button from '../Button/Button'
import { getProduct } from '../../action/ProductAction'
import { getTransportation } from '../../action/TransportationAction'
import { getRepairMaintenances } from '../../action/RepairMaintenancesAction'
import { getListNameSearch, getNameSearch, getListSearchProduct, setDataSearch } from '../../action/SearchAction'
import { getBanner } from '../../action/BannerAction'
import { useSelector, useDispatch } from 'react-redux'
import is_Empty from '../../isEmpty'
import GroupProduct from '../GroupProduct/GroupProduct'

const Home = props => {
    const banners = useSelector(state => state.bannerReducer.banners)
    const product = useSelector(state => state.productReducer.product)
    const transportation = useSelector(state => state.transportationReducer.transportation)
    const repairMaintenances = useSelector(state => state.repairMaintenancesReducer.repairMaintenances)
    const listNameSearch = useSelector(state => state.searchReducer.listNameSearch)
    const dataSearch = useSelector(state => state.searchReducer.dataSearch)
    const dispatch = useDispatch()
    const [itemsForBanner, setItemsForBanner] = useState([])
    const [itemsForSale, setItemsForSale] = useState([])
    const [itemsForRent, setItemsForRent] = useState([])
    const [itemsForTransportation, setItemsForTransportation] = useState([])
    const [itemsForRepairMaintenances, setItemsForRepairMaintenances] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const data = [
        " All Terrain Crane & Hydraulic Truck Crane",
        "Crawler Tower Crane/Crawler Crane",
        "Crusher",
        "Compactor/Roller",
        "Excavator with Telescopic Dipper",
        "Excavator with Vibro/Breaker",
        "Long Arm Excavator & High Reach Boom",
        "Skid Loader & Boom Lift",
        "Wheel Loader & Bulldozer "
    ]

    useEffect(() => {
        dispatch(getBanner())
        dispatch(getProduct())
        dispatch(getTransportation())
        dispatch(getRepairMaintenances())

        return () => {
            console.log("clean up")
        }
    }, [])

    useEffect(() => {
        if (!is_Empty(banners)) {
            const array = []
            banners.forEach(item => {
                array.push(<img key={item.order} src={item.url.original} alt="" />, )
            });
            setItemsForBanner(array)
        }
        return () => {
            console.log("clean up")
        }
    }, [banners])

    useEffect(() => {
        if (!is_Empty(product)) {
            const arr = product.data.filter(item => item.purpose === "for_sale")
            const array = []
            arr.forEach(item => {
                array.push(<Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
            });
            setItemsForSale(array)

            const arr2 = product.data.filter(item => item.purpose === "for_rent")
            const array2 = []
            arr2.forEach(item => {
                array2.push(<Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
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
                array3.push(<Product key={item.id} domain="service" id={item.id} img={item.images[0].url.original} name={item.transportation_type} price={item.weight} />, )
            });
            setItemsForTransportation(array3)
        }
        return () => {
            console.log("clean up")
        }
    }, [transportation])

    useEffect(() => {
        if (!is_Empty(repairMaintenances)) {
            const array4 = []
            repairMaintenances.forEach(item => {
                array4.push(<Link to={`/listRepair/${item.id}`} key={item.id}><div className="item flex" ><img src={item.images[0].url.original} alt="" /><p>{item.name}</p> </div></Link>)
            });
            setItemsForRepairMaintenances(array4)
        }
        return () => {
            console.log("clean up")
        }
    }, [repairMaintenances])

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        dispatch(getNameSearch(searchTerm))
    }

    const handleSearchForKey = value => {
        dispatch(setDataSearch({
            ...dataSearch,
            search_key: value
        }))
        dispatch(getListSearchProduct(dataSearch))
    }

    console.log(dataSearch)


    return (
        <div className="home">
            <div className="home-under">
                <Slide group={itemsForBanner} items={1} dots={false} loop={true} autoplay={true} autoplayTimeout={5000} />
            </div>
            <div className="home-bottom">
                <ul className="flex">
                    <li><button onClick={props.handleClickSale} className={!props.toggle ? "active" : ""}>Purchase</button></li>
                    <li><button onClick={props.handleClickRent} className={!props.toggle ? "" : "active"}> Rental</button></li>
                </ul>
                {!props.toggle ?
                    <>
                        <Search function="sale" handleSearch={handleSearch} handleChange={handleChange} searchTerm={searchTerm} />
                        <div className="listSearch">
                            {listNameSearch.length != 0 ? listNameSearch.map(item =>
                                <>
                                    <Link to='/productSearchList'><button key={item} className="a" onClick={() => handleSearchForKey(item)}>{item}</button></Link>
                                    <br />
                                </>)
                                :
                                "No item matches your keyword"}
                        </div>

                        {itemsForSale.length != 0 ?
                            <GroupProduct title="FOR SALE" items={itemsForSale} link="/listOfProduct" buttonName="View Equipment for Sale" />
                            : "No equipment for sale"}
                    </>
                    :
                    <>
                        <Search function="rental" />
                        {itemsForSale.length != 0 ?
                            <GroupProduct title="FOR RENT" items={itemsForRent} link="/listOfProduct" buttonName="View Equipment for Rent" />
                            : "No equipment for rent"}
                    </>
                }
            </div>

            <div className="transportation">
                {itemsForTransportation.length != 0 ?
                    <GroupProduct title="TRANSPORTATION SERVICE" items={itemsForTransportation} link="/listService" buttonName="View Transportation Service" />
                    : ""}
            </div>

            <div className="repair">
                {itemsForRepairMaintenances.length != 0 ?
                    <GroupProduct title="REPAIR / MAINTENANCE" items={itemsForRepairMaintenances} />
                    : ""}
                <Link to="/">Hove more Questions?</Link>
                <Button className="view" link="/" name="Call us" />
            </div>
        </div>
    )
}

export default Home
