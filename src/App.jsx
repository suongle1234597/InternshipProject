import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './reset.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ListImg from './components/ListImg/ListImg'
import Detail from './components/Detail/Detail'
import Modal from './components/Modal/Modal'
import ViewEquipment from './components/ViewEquipment/ViewEquipment'
import Request from './components/Request/Request'
import Info from './components/Info/Info'
import Settings from './components/Settings/Settings'
import SearchProduct from './components/SearchProduct/SearchProduct'
import { getProduct } from './action/ProductAction'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const product = useSelector(state => state.productReducer.product)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState(false)
  const aboutUs = ["This mobile application is developed by Huasing Construction & Trading Pte Ltd. We are the authorised dealer for Doosan, Powerscreen and Ammann. We also supply a range of used heavy machinery to our customers."]
  const termsAndConditions = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota"
  ]
  useEffect(() => {
    // dispatch(getProduct())
    // console.log(product)
    return () => {
      console.log("clean up")
    }
  }, [])

  const handleClickShowModal = () => {
    setModal(true)
  }

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
    <div className="App">
      <div className="container">
        <Router>
          <Route path='/' render={() => <Home toggle={toggle} handleClickRent={handleClickRent} handleClickSale={handleClickSale} />} exact />
          <Route path='/listimg' render={() => <ListImg handleClickShowModal={handleClickShowModal} />} />
          <Route path='/product/:slug' component={Detail} />
          <Route path='/service/:slug' component={Detail} />
          <Route path='/view' render={() => <ViewEquipment toggle={toggle} handleClickRent={handleClickRent} handleClickSale={handleClickSale} />} />
          <Route path='/requestproduct' render={() => <Request />} />
          <Route path='/requestservice' render={() => <Request />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/aboutUs' render={() => <Info info={aboutUs} func="About Us" />} />
          <Route path='/termsAndConditions' render={() => <Info info={termsAndConditions} func="Terms And Conditions" />} />
          <Route path='/searchProduct' render={() => <SearchProduct />} />
        </Router>
        {modal === true ? <Modal /> : ""}
      </div>
    </div>
  );
}

export default App;
