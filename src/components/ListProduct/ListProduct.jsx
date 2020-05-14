import React, { useState, useEffect } from 'react';
import './ListProduct.scss'
import Header from '../Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import isEmpty from '../../isEmpty'
import Product from '../Product/Product'

const ListProduct = () => {
    const listSearch = useSelector(state => state.searchReducer.listSearch)
    const [itemsForSale, setItemsForSale] = useState([])
    const [itemsForRent, setItemsForRent] = useState([])
    const [toggle, setToggle] = useState(false)

    console.log(listSearch)

    useEffect(() => {
        setItemsForSale(listSearch.filter(item => item.purpose === "for_sale"))
        setItemsForRent(listSearch.filter(item => item.purpose === "for_rent"))
        return () => {
            console.log("clean up")
        }
    }, [])

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
    return (
        <div className="listProduct">
            <Header toggle={toggle} handleClickRent={handleClickRent} handleClickSale={handleClickSale} />
            {!toggle ? <>
                Purchase
                {!isEmpty(itemsForSale) ? itemsForSale.map(item => <Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />) : "No equipment for sale"}

            </> :
                <>Rent
            {!isEmpty(itemsForRent) ? itemsForRent.map(item => <Product key={item.id} domain="product" id={item.id} img={item.images[0].url.original} name={item.model} price={item.serial_number} />) : "No equipment for rent"}
                </>}
        </div>
    )
}

export default ListProduct
