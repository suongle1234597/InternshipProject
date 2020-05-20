import React, { useState, useEffect, memo } from 'react';
import './ListProduct.scss'
import '../../reset.scss'
import Header from '../Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getListSearchProduct, setDataSearch } from '../../action/SearchAction'
import isEmpty from '../../isEmpty'
import Product from '../Product/Product'
import Button from '../Button/Button'
// import { getProduct } from '../../action/ProductAction';

const ListProduct = props => {
    // const product = useSelector(state => state.productReducer.product)
    // const listSearch = useSelector(state => state.searchReducer.listSearch)
    const dataSearch = useSelector(state => state.searchReducer.dataSearch)
    const sort = useSelector(state => state.productReducer.sort)
    const sort_key = useSelector(state => state.productReducer.sort_key)
    const dispatch = useDispatch()
    const [dataSort, setDataSort] = useState("1")
    const [toggle, setToggle] = useState(false)
    const type = props.match.path
    const listSearchForRent = useSelector(state => state.searchReducer.listSearchForRent)
    const listSearchForSale = useSelector(state => state.searchReducer.listSearchForSale)
    const productForRent = useSelector(state => state.productReducer.productForRent)
    const productForSale = useSelector(state => state.productReducer.productForSale)

    useEffect(() => {
        if (type.split('/')[1] === "productSearchList" || type.split('/')[1] === "search") {
            //lay data cua For Sale
            dispatch(getListSearchProduct({
                ...dataSearch,
                purpose: 0
            }, true))
            //lay data cau For Rent
            dispatch(getListSearchProduct({
                ...dataSearch,
                purpose: 1
            }, true))
        }
        else if (type.split('/')[1] === "listOfProduct") {
            dispatch(getListSearchProduct({
                ...dataSearch,
                purpose: 0
            }, false))
            // lay data cau For Rent
            dispatch(getListSearchProduct({
                ...dataSearch,
                purpose: 1
            }, false))
        }
        return () => {
            console.log("clean up")
        }
    }, [])

    //khi chon kieu sap xep
    useEffect(() => {
        handleSort()
        return () => {
            console.log("clean up")
        }
    }, [dataSort])

    const handleClickSale = () => {
        if (toggle) {
            setToggle(false)
        }
    }

    const handleClickRent = () => {
        if (!toggle) {
            setToggle(true)
        }
    }

    //lay du lieu sort
    const handleChange = e => {
        setDataSort(e.target.value)
    }

    const handleSort = () => {
        let purpose = 1
        if (toggle === false) purpose = 0
        if (dataSort === "1") {
            dispatch(setDataSearch({
                ...dataSearch,
                purpose,
                sort: sort.asc,
                sort_key: sort_key.created_at
            }))
        } else if (dataSort === "2") {
            dispatch(setDataSearch({
                ...dataSearch,
                purpose,
                sort: sort.desc,
                sort_key: sort_key.year_of_produce
            }))
        } else if (dataSort === "3") {
            dispatch(setDataSearch({
                ...dataSearch,
                purpose,
                sort: sort.asc,
                sort_key: sort_key.year_of_produce
            }))
        } else if (dataSort === "4") {
            dispatch(setDataSearch({
                ...dataSearch,
                purpose,
                sort: sort.desc,
                sort_key: sort_key.time_in_use
            }))
        }
        else if (dataSort === "5") {
            dispatch(setDataSearch({
                ...dataSearch,
                purpose,
                sort: sort.asc,
                sort_key: sort_key.time_in_use
            }))
        }
        if ((type.split('/')[1] === "productSearchList" || type.split('/')[1] === "search")) {
            dispatch(getListSearchProduct(dataSearch, true))
        }
        else if (type.split('/')[1] === "listOfProduct") {
            dispatch(getListSearchProduct(dataSearch, false))
        }
    }

    const handleClickBack = () => {
        if (type.split('/')[1] === "listOfProduct" || type.split('/')[1] === "search") {
            props.history.push('/')
        }
        else {
            props.history.push('/searchProduct')
        }
    }

    return (
        <div className="listProduct">
            <div className="head flex">
                <button className="done flex" onClick={handleClickBack}>
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>
            </div>
            <Header toggle={toggle} handleClickRent={handleClickRent} handleClickSale={handleClickSale} />
            <div className="listProduct-under flex">
                {type.split('/')[1] === "productSearchList" || type.split('/')[1] === "search" ?
                    <>
                        {!toggle ?
                            <p>{!isEmpty(listSearchForSale) && listSearchForSale.data.length} Results</p>
                            :
                            <p>{!isEmpty(listSearchForRent) && listSearchForRent.data.length} Results</p>}
                    </>
                    :
                    <>
                        {!toggle ?
                            <p>{!isEmpty(productForSale) && productForSale.data.length} Results</p>
                            :
                            <p>{!isEmpty(productForRent) && productForRent.data.length} Results</p>}
                    </>
                }

                <div className="sort">
                    <select name="sort" id="" value={dataSort} onChange={handleChange} className="select">
                        <option value="1">Latest</option>
                        <option value="2">Year ↓</option>
                        <option value="3">Year ↑</option>
                        <option value="4">Running Hours ↓</option>
                        <option value="5">Running Hours ↑</option>
                    </select>
                </div>
            </div>
            {type.split('/')[1] === "productSearchList" || type.split('/')[1] === "search" ?
                <>
                    {!toggle ?
                        <div className="showProduct flex">
                            {!isEmpty(listSearchForSale) ? listSearchForSale.data.map(item => <Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />) : "No equipment for sale"}
                        </div>
                        :
                        <div className="showProduct flex">
                            {!isEmpty(listSearchForRent) ? listSearchForRent.data.map(item => <Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />) : "No equipment for rent"}
                        </div>}
                </>
                :
                <>
                    {!toggle ?
                        <div className="showProduct flex">
                            {!isEmpty(productForSale) ? productForSale.data.map(item => <Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />) : "No equipment for sale"}
                        </div>
                        :
                        <div className="showProduct flex">
                            {!isEmpty(productForRent) ? productForRent.data.map(item => <Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />) : "No equipment for rent"}
                        </div>}
                </>
            }

            <div className="footer">
                <Link to="/">Hove more Questions?</Link>
                <Button className="view" link="/" name="Call us" />
            </div>
        </div>
    )
}

export default memo(ListProduct)
