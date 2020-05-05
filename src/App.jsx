import React, { useState } from 'react';
import logo from './logo.svg';
import './reset.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ListImg from './components/ListImg/ListImg'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Modal from './components/Modal/Modal'
import Category from './components/Category/Category'

const App = () => {
  const [modal, setModal] = useState(false)

  const handleClickShowModal = () => {
    setModal(true)
  }

  return (
    <div className="App container">
      <Router>
        <Route path='/' component={Home} exact />
        <Route path='/listimg' render={() => <ListImg handleClickShowModal={handleClickShowModal} />} />
        <Route path='/detail' component={ProductDetail} />
        <Route path='/cate' component={Category} />
      </Router>
      {modal === true ? <Modal /> : ""}
    </div>
  );
}

export default App;
