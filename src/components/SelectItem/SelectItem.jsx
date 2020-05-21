import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductType, selectProductTypes, getBrands, selectBrand, getAvailability, selectAvailability, resetSelectProductType, resetSelectBrands, resetSelectAvailability, getListSearchProduct } from '../../action/SearchAction'
import isEmpty from '../../isEmpty'
import './SelectItem.scss'

const SelectItem = props => {
  const productType = useSelector(state => state.searchReducer.productType)
  const brand = useSelector(state => state.searchReducer.brand)
  const availability = useSelector(state => state.searchReducer.availability)
  const dataSearch = useSelector(state => state.searchReducer.dataSearch)
  const dispatch = useDispatch()
  const type = props.match.path

  useEffect(() => {
    if (type.split('/')[1] === "selectProduct") {
      dispatch(getProductType())
    }
    else if (type.split('/')[1] === "selectBrand") {
      dispatch(getBrands())
    } else {
      dispatch(getAvailability())
    }
    return () => {
      console.log("clean up")
    }
  }, [])

  const handleType = id => {
    if (type.split('/')[1] === "selectProduct") {
      dispatch(selectProductTypes(dataSearch, id))
    }
    else if (type.split('/')[1] === "selectBrand") {
      dispatch(selectBrand(dataSearch, id))
    } else {
      dispatch(selectAvailability(dataSearch, id))
    }
  }

  const handleResetSelection = e => {
    if (type.split('/')[1] === "selectProduct") {
      dispatch(resetSelectProductType(dataSearch))
    }
    else if (type.split('/')[1] === "selectBrand") {
      dispatch(resetSelectBrands(dataSearch))
    } else {
      dispatch(resetSelectAvailability(dataSearch))
    }
  }

  const handleComeBack = () => {
    props.history.push('/searchProduct')
  }

  const handleSearch = () => {
    dispatch(getListSearchProduct(props.history, dataSearch))
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
            <Link to="/productSearchList"><button onClick={handleSearch}>Search</button></Link>
          </div>
          {!isEmpty(productType) && productType.map(item =>
            <div className="item flex" key={item.id} name={item.id} onClick={() => handleType(item.id)}>
              <label>{item.name} </label>
              {!isEmpty(dataSearch.product_type_ids) && dataSearch.product_type_ids.findIndex(element => element === item.id) !== -1 ? <i className="fas fa-check"></i> : ""}
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
            <Link to="/productSearchList"><button onClick={handleSearch}>Search</button></Link>
          </div>
          {!isEmpty(brand) && brand.map(item =>
            <div className="item flex" key={item.id} name={item.id} onClick={() => handleType(item.id)}>
              <label>{item.name} </label>
              {!isEmpty(dataSearch.brand_ids) && dataSearch.brand_ids.findIndex(element => element === item.id) !== -1 ? <i className="fas fa-check"></i> : ""}
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
            <Link to="/productSearchList"><button onClick={handleSearch}>Search</button></Link>
          </div>
          {!isEmpty(availability) && availability.map(item =>
            <div className="item flex" key={item.id} name={item.name} onClick={() => handleType(item.id)}>
              <label>{item.name} </label>
              {!isEmpty(dataSearch.status) && dataSearch.status.findIndex(element => element === item.id) !== -1 ? <i className="fas fa-check"></i> : ""}
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
