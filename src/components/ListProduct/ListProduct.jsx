import React, { useState, useEffect } from 'react';
import './ListProduct.scss'
import '../../reset.scss'
import Header from '../Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getListSearchProduct } from '../../action/SearchAction'
import isEmpty from '../../isEmpty'
import Product from '../Product/Product'
import Button from '../Button/Button'
import { getProduct, sortProduct } from '../../action/ProductAction';

const ListProduct = props => {
    const product = useSelector(state => state.productReducer.product)
    const listSearch = useSelector(state => state.searchReducer.listSearch)
    const dataSearch = useSelector(state => state.searchReducer.dataSearch)
    const sort = useSelector(state => state.productReducer.sort)
    const sort_key = useSelector(state => state.productReducer.sort_key)
    const dispatch = useDispatch()
    const [itemsForSale, setItemsForSale] = useState([])
    const [itemsForRent, setItemsForRent] = useState([])
    const [dataSort, setDataSort] = useState(1)
    const [toggle, setToggle] = useState(false)
    const type = props.match.path

    // console.log(dataSearch)

    useEffect(() => {
        if (type.split('/')[1] === "productSearchList" || type.split('/')[1] === "search") {
            dispatch(getListSearchProduct(dataSearch))
        }
        else {
            dispatch(getProduct())
        }
        return () => {
            console.log("clean up")
        }
    }, [])

    useEffect(() => {
        if (!isEmpty(listSearch.data)) {
            setItemsForSale(listSearch.data.filter(item => item.purpose === "for_sale"))
            setItemsForRent(listSearch.data.filter(item => item.purpose === "for_rent"))
        }
        return () => {
            console.log("clean up")
        }
    }, [listSearch])

    useEffect(() => {
        if (!isEmpty(product.data)) {
            setItemsForSale(product.data.filter(item => item.purpose === "for_sale"))
            setItemsForRent(product.data.filter(item => item.purpose === "for_rent"))
        }
        return () => {
            console.log("clean up")
        }
    }, [product.data])

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

    const handleChange = e => {
        setDataSort(e.target.value)
    }

    const handleSort = () => {
        if (dataSort === "1") {
            dispatch(sortProduct(sort.asc, sort_key.created_at))
        } else if (dataSort === "2") {
            dispatch(sortProduct(sort.desc, sort_key.year_of_produce))
        } else if (dataSort === "3") {
            dispatch(sortProduct(sort.asc, sort_key.year_of_produce))
        } else if (dataSort === "4") {
            dispatch(sortProduct(sort.desc, sort_key.time_in_use))
        }
        else if (dataSort === "5") {
            dispatch(sortProduct(sort.asc, sort_key.time_in_use))
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
                {!toggle ?
                    <p>{itemsForSale.length !== 0 && itemsForSale.length} Results</p>
                    :
                    <p>{itemsForRent.length !== 0 && itemsForRent.length} Results</p>}
                <div className="sort">
                    <select name="sort" id="" value={dataSort} onChange={handleChange} className="select">
                        <option value="1">Latest ˅</option>
                        <option value="2">Year ↓</option>
                        <option value="3">Year ↑</option>
                        <option value="4">Running Hours ↓</option>
                        <option value="5">Running Hours ↑</option>
                    </select>
                </div>
            </div>
            {!toggle ?
                <div className="showProduct flex">
                    {!isEmpty(itemsForSale) ? itemsForSale.map(item => <Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />) : "No equipment for sale"}
                </div> :
                <div className="showProduct flex">
                    {!isEmpty(itemsForRent) ? itemsForRent.map(item => <Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />) : "No equipment for rent"}
                </div>}
            <div className="footer">
                <Link to="/">Hove more Questions?</Link>
                <Button className="view" link="/" name="Call us" />
            </div>
        </div>
    )
}

export default ListProduct
