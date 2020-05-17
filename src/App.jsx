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
import SelectItem from './components/SelectItem/SelectItem'
import { getProduct } from './action/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import ListProduct from './components/ListProduct/ListProduct'

const App = () => {
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

  const [optionsModal, setOptionsModal] = useState([])

  // [
  //   <img src="https://i.pinimg.com/originals/0e/1e/8a/0e1e8ace2d78fe052f607aae724720e7.jpg" alt="" />,
  //   <img src="https://i.pinimg.com/originals/9a/7a/6f/9a7a6f2b9c7b8433e7c947fb38d4f067.jpg" alt="" />,
  //   <img src="https://hpconnect.vn/wp-content/uploads/2019/09/dich-vu-ghep-anh-chuyen-nghiep-hpconnect-2.jpg" alt="" />
  // ]

  const handleClickShowModal = () => {
    setModal(true)
  }

  const handleClickCloseModal = () => {
    setModal(false)
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
    <>
      <div className={modal === true ? "App modalActive" : "App"} >
        <div className="container">
          <Router>
            <Route path='/' render={() => <Home toggle={toggle} handleClickRent={handleClickRent} handleClickSale={handleClickSale} />} exact />
            <Route path='/listService' render={() => <ListImg handleClickShowModal={handleClickShowModal} setOptionsModal={setOptionsModal} />} />
            <Route path='/listRepair/:id' render={() => <ListImg handleClickShowModal={handleClickShowModal} setOptionsModal={setOptionsModal} />} />
            <Route path='/product/:id' render={(props) => <Detail {...props} handleClickShowModal={handleClickShowModal} setOptionsModal={setOptionsModal} />} />
            <Route path='/service/:id' render={(props) => <Detail {...props} handleClickShowModal={handleClickShowModal} setOptionsModal={setOptionsModal} />} />
            <Route path='/view' render={() => <ViewEquipment toggle={toggle} handleClickRent={handleClickRent} handleClickSale={handleClickSale} />} />
            <Route path='/requestproduct/:id' component={Request} />
            <Route path='/requestservice/:id' component={Request} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/aboutUs' render={() => <Info info={aboutUs} func="About Us" />} />
            <Route path='/termsAndConditions' render={() => <Info info={termsAndConditions} func="Terms And Conditions" />} />
            <Route path='/searchProduct' component={SearchProduct} />
            <Route path='/selectProduct' component={SelectItem} />
            <Route path='/selectBrand' component={SelectItem} />
            <Route path='/selectAvailability' component={SelectItem} />
            <Route path='/productSearchList' component={ListProduct} />
            <Route path='/search' component={ListProduct} />
            <Route path='/listOfProduct' component={ListProduct} />
          </Router>
        </div>
      </div>
      {modal === true ? <Modal handleClickCloseModal={handleClickCloseModal} optionsModal={optionsModal} /> : ""}
    </>
  );
}

export default App;
