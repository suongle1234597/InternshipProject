import React, { useState } from 'react';
import logo from './logo.svg';
import './reset.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ListImg from './components/ListImg/ListImg'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Modal from './components/Modal/Modal'
import ViewEquipment from './components/ViewEquipment/ViewEquipment'
import Request from './components/Request/Request'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState(false)

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
          <Route path='/product/:slug' component={ProductDetail} />
          <Route path='/view' render={() => <ViewEquipment toggle={toggle} handleClickRent={handleClickRent} handleClickSale={handleClickSale} />} />
          <Route path='/request' render={() => <Request />} />
        </Router>
        {modal === true ? <Modal /> : ""}
      </div>
    </div>
  );
}

export default App;
