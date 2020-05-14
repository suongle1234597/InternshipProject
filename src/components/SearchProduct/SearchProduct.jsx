import React, { useEffect, useState } from 'react'
import './SearchProduct.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProductType, getBrands, getAvailability, getListAvailability, getListBrands, getListProductType } from '../../action/SearchAction'
import isEmpty from '../../isEmpty'

const SearchProduct = () => {
    const productType = useSelector(state => state.searchReducer.productType)
    const brand = useSelector(state => state.searchReducer.brand)
    const availability = useSelector(state => state.searchReducer.availability)
    const listProductType = useSelector(state => state.searchReducer.listProductType)
    const listBrand = useSelector(state => state.searchReducer.listBrand)
    const listAvailability = useSelector(state => state.searchReducer.listAvailability)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        productType: [],
        brand: [],
        availability: [],
        running: {
            from: "",
            to: ""
        },
        year: {
            from: "",
            to: ""
        }
    })

    useEffect(() => {
        dispatch(getListProductType())
        dispatch(getListBrands())
        dispatch(getListAvailability())
        dispatch(getProductType())
        dispatch(getBrands())
        dispatch(getAvailability())
        return () => {
            console.log("clean up")
        }
    }, [])

    useEffect(() => {
        if (!isEmpty(listProductType)) {
            productType.forEach(item => {
                if (listProductType[item.id] === true) {
                    setFormData({
                        ...formData,
                        productType: [...productType, item.name]
                    })
                }
            });

        }
        // if (!isEmpty(listBrand)) {

        // }
        // if (!isEmpty(listAvailability)) {

        // }

        return () => {
            console.log("clean up")
        }
    }, [listAvailability])

    console.log(formData)

    const handleChangeRunning = e => {
        setFormData({
            ...formData,
            running: {
                [e.target.name]: e.target.value
            }
        })
    }

    const handleChangeYear = e => {
        setFormData({
            ...formData,
            year: {
                [e.target.name]: e.target.value
            }
        })
    }

    const handleResetSelection = e => {
        dispatch(getProductType())
        dispatch(getBrands())
        dispatch(getAvailability())
    }

    return (
        <div className="settings searchproduct">
            <div className="head flex">
                <button className="done flex" >
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>
                <h6>Search Products</h6>
                <button>Search</button>
            </div>

            <Link to='/selectProduct'>
                <div className="item flex">
                    Product Type
                    <div className="any">
                        Any
                    <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </Link>
            <Link to='/selectBrand'>
                <div className="item flex">
                    Brand
            <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
            <Link to='/selectAvailability'>
                <div className="item flex">
                    Availability
            <i className="fas fa-chevron-right"></i>
                </div>
            </Link>
            <div className="item">
                Running
                <div className="running flex">
                    <div className="inputNumber">
                        <input type="number" value={formData.running.from} onChange={handleChangeRunning} name="from" />
                        <p>hrs</p>
                    </div>
                    <p className="to">-</p>
                    <div className="inputNumber">
                        <input type="number" value={formData.running.to} onChange={handleChangeRunning} name="to" />
                        <p>hrs</p>
                    </div>
                </div>
            </div>
            <div className="item year">
                Year
                <div className="running flex">
                    <div className="inputNumber">
                        <input type="number" value={formData.year.from} onChange={handleChangeYear} name="from" />
                    </div>
                    <p className="to">-</p>
                    <div className="inputNumber">
                        <input type="number" value={formData.year.to} onChange={handleChangeYear} name="to" />
                    </div>
                </div>
            </div>
            <div className="contact">
                <button className="view" onClick={handleResetSelection}>Reset Selection</button>
            </div>
        </div>
    )
}

export default SearchProduct
