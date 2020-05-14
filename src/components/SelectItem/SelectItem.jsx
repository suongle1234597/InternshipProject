import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductType, getListProductType, selectProductTypes, getBrands, getListBrands, selectBrand, getAvailability, getListAvailability, selectAvailability } from '../../action/SearchAction'
import isEmpty from '../../isEmpty'
import './SelectItem.scss'

const SelectItem = props => {
  const productType = useSelector(state => state.searchReducer.productType)
  const listProductType = useSelector(state => state.searchReducer.listProductType)
  const brand = useSelector(state => state.searchReducer.brand)
  const listBrand = useSelector(state => state.searchReducer.listBrand)
  const availability = useSelector(state => state.searchReducer.availability)
  const listAvailability = useSelector(state => state.searchReducer.listAvailability)
  const dispatch = useDispatch()
  const type = props.match.path

  useEffect(() => {
    if (type.split('/')[1] === "selectProduct") {
      dispatch(getProductType())
      // dispatch(getListProductType())
    }
    else if (type.split('/')[1] === "selectBrand") {
      dispatch(getBrands())
      // dispatch(getListBrands())
    } else {
      dispatch(getAvailability())
      // dispatch(getListAvailability())
    }
    return () => {
      console.log("clean up")
    }
  }, [])

  const handleType = id => {
    if (type.split('/')[1] === "selectProduct") {
      if (!isEmpty(listProductType)) {
        dispatch(selectProductTypes(listProductType, id))
      }
    }
    else if (type.split('/')[1] === "selectBrand") {
      if (!isEmpty(listBrand)) {
        dispatch(selectBrand(listBrand, id))
      }
    } else {
      if (!isEmpty(availability)) {
        dispatch(selectAvailability(listAvailability, id))
      }
    }
  }

  console.log(listProductType)

  const handleResetSelection = e => {
    if (type.split('/')[1] === "selectProduct") {
      if (!isEmpty(productType)) {
        dispatch(getListProductType())
      }
    }
    else if (type.split('/')[1] === "selectBrand") {
      if (!isEmpty(brand)) {
        dispatch(getListBrands())
      }
    } else {
      if (!isEmpty(availability)) {
        dispatch(getListAvailability())
      }
    }
  }

  const handleComeBack = () => {
    props.history.push('/searchProduct')
  }

  return (
    <>
      {type.split('/')[1] === "selectProduct" &&
        <div className="settings selectProduct">
          <div className="head flex">
            <button className="done flex" onClick={handleComeBack}>
              <i className="fas fa-chevron-left"></i>
              Done
     </button>
            <h6>Select Products</h6>
            <button>Search</button>
          </div>
          {!isEmpty(productType) && productType.map(item =>
            <div className="item flex" key={item.id} name={item.id} onClick={() => handleType(item.id)}>
              <label>{item.name} </label>
              {!isEmpty(listProductType) && listProductType[item.id] === true ? <i className="fas fa-check"></i> : ""}
            </div>)}
          <div className="contact">
            <button className="view" onClick={handleResetSelection}>Reset Selection</button>
          </div>
        </div>
      }
      {type.split('/')[1] === "selectBrand" &&
        <div className="settings selectProduct">
          <div className="head flex">
            <button className="done flex" onClick={handleComeBack}>
              <i className="fas fa-chevron-left"></i>
              Done
     </button>
            <h6>Select Brand</h6>
            <button>Search</button>
          </div>
          {!isEmpty(brand) && brand.map(item =>
            <div className="item flex" key={item.id} name={item.id} onClick={() => handleType(item.id)}>
              <label>{item.name} </label>
              {!isEmpty(listBrand) && listBrand[item.id] === true ? <i className="fas fa-check"></i> : ""}
            </div>)}
          <div className="contact">
            <button className="view" onClick={handleResetSelection}>Reset Selection</button>
          </div>
        </div>
      }
      {type.split('/')[1] === "selectAvailability" &&
        <div className="settings selectProduct">
          <div className="head flex">
            <button className="done flex" onClick={handleComeBack}>
              <i className="fas fa-chevron-left"></i>
              Done
     </button>
            <h6>Select Availability</h6>
            <button>Search</button>
          </div>
          {!isEmpty(availability) && availability.map(item =>
            <div className="item flex" key={item} name={item} onClick={() => handleType(item)}>
              <label>{item} </label>
              {!isEmpty(availability) && listAvailability[item] === true ? <i className="fas fa-check"></i> : ""}
            </div>)}
          <div className="contact">
            <button className="view" onClick={handleResetSelection}>Reset Selection</button>
          </div>
        </div>
      }
    </>
  )
}

export default SelectItem
