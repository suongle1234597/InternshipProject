import React, { useState, useEffect, useRef } from 'react'
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
    // const product = useSelector(state => state.productReducer.product)
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
    const productForRent = useSelector(state => state.productReducer.productForRent)
    const productForSale = useSelector(state => state.productReducer.productForSale)
    const [flag, setFlag] = useState(false)
    const typing = useRef(null);
    const showListNameSearch = useRef(null)

    useEffect(() => {
        dispatch(getBanner())
        // dispatch(getProduct())
        dispatch(getListSearchProduct({
            ...dataSearch,
            purpose: 0
        }, false))
        // lay data cau For Rent
        dispatch(getListSearchProduct({
            ...dataSearch,
            purpose: 1
        }, false))
        dispatch(getTransportation())
        dispatch(getRepairMaintenances())
        document.addEventListener('click', handleClickOutSide, true)
        return () => {
            document.removeEventListener('click', handleClickOutSide, true)

        }
    }, [])

    //moi khi input thay doi
    useEffect(() => {
        handleSearch()
        return () => {
            console.log("clean up")
        }
    }, [searchTerm])

    useEffect(() => {
        if (!is_Empty(banners)) {
            var array = []
            banners.forEach(item => {
                array.push(<img key={item.order} src={item.url.original} alt="" />, )
            });
            setItemsForBanner(array)
        }
        return () => {
            console.log("clean up")
        }
    }, [banners])

    // useEffect(() => {
    //     if (!is_Empty(product)) {
    //         var arr = product.data.filter(item => item.purpose === "for_sale" || item.purpose === "for_sale_and_rent")
    //         var array = []
    //         arr.forEach(item => {
    //             array.push(<Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
    //         });
    //         setItemsForSale(array)

    //         var arr2 = product.data.filter(item => item.purpose === "for_rent" || item.purpose === "for_sale_and_rent")
    //         var array2 = []
    //         arr2.forEach(item => {
    //             array2.push(<Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
    //         });
    //         setItemsForRent(array2)
    //     }
    //     return () => {
    //         console.log("clean up")
    //     }
    // }, [product])

    useEffect(() => {
        if (!is_Empty(productForSale.data)) {
            let array5 = []
            productForSale.data.forEach(item => {
                array5.push(<Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
            });
            setItemsForSale(array5)
        }
        return () => {
            console.log("clean up")
        }
    }, [productForSale])

    useEffect(() => {
        if (!is_Empty(productForRent.data)) {
            let array6 = []
            productForRent.data.forEach(item => {
                array6.push(<Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />, )
            });
            setItemsForRent(array6)
        }
        return () => {
            console.log("clean up")
        }
    }, [productForRent])

    useEffect(() => {
        if (!is_Empty(transportation)) {
            var array3 = []
            transportation.data.forEach(item => {
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

    //khi nhap tu khoa de search hoac nhan enter-> giup k call api nhieu lan
    const handleSearch = () => {
        if (typing.current) {
            clearTimeout(typing.current)
        };
        typing.current = setTimeout(() => {
            const valueSearch = {
                searchTerm: searchTerm,
            }
            dispatch(getNameSearch(valueSearch.searchTerm))
        }, 1000)
    }

    //khi click vao key chon
    const handleSearchForKey = value => {
        dispatch(setDataSearch({
            ...dataSearch,
            search_key: value
        }))
        // dispatch(getListSearchProduct(dataSearch))
    }

    //khi click vao ben ngoai thi xet cai currnet hien tai
    const handleClickOutSide = e => {
        if (showListNameSearch.current !== null) {
            //neu chua class listSearch thi
            if (showListNameSearch.current.classList.contains("listSearch")) {
                if (!showListNameSearch.current || !showListNameSearch.current.contains(e.target)) {
                    //xet laij no bang false
                    setFlag(false)
                    e.stopPropagation()
                }
            }
        }
    }

    //khi click vao search hien ra list
    const handleClickSearch = () => {
        if (searchTerm === "") {
            dispatch(getListNameSearch())
        }
        setFlag(true)
    }

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
                        <Search function="sale" handleSearch={handleSearch} handleChange={handleChange} searchTerm={searchTerm} handleClickSearch={handleClickSearch} />
                        <table ref={showListNameSearch} className={flag ? "listSearch table table-striped" : "table table-striped"}>
                            <tbody>
                                {listNameSearch.length !== 0 ? listNameSearch.map((item, index) =>
                                    <tr key={index}>
                                        <td>
                                            <Link to='/search'><button key={item} onClick={() => handleSearchForKey(item)}>{item}</button></Link>
                                            <br />
                                        </td>
                                    </tr>)
                                    :
                                    "No item matches your keyword"}
                            </tbody>
                        </table>
                        {itemsForSale.length != 0 ?
                            <GroupProduct title="FOR SALE" items={itemsForSale} link="/listOfProduct" buttonName="View Equipment for Sale" />
                            : "No equipment for sale"}
                    </>
                    :
                    <>
                        <Search function="rental" handleSearch={handleSearch} handleChange={handleChange} searchTerm={searchTerm} />
                        <table useRef={showListNameSearch} className={flag ? "listSearch table table-striped" : "table table-striped"}>
                            <tbody>
                                {listNameSearch.length !== 0 ? listNameSearch.map((item, index) =>
                                    <tr key={index}>
                                        <td>
                                            <Link to='/search'><button key={item} onClick={() => handleSearchForKey(item)}>{item}</button></Link>
                                            <br />
                                        </td>
                                    </tr>)
                                    :
                                    "No item matches your keyword"}
                            </tbody>
                        </table>
                        <div className="hide">{itemsForRent}</div>
                        {!is_Empty(itemsForRent) ?
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

                <div className="footer">
                    <Link to="/">Hove more Questions?</Link>
                    <Button className="view" link="/" name="Call us" />
                </div>
            </div>
        </div>
    )
}

export default Home
