import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Banner from '../Banner/Banner'
import BeerList from '../BeerList/BeerList'
import BeerDetails from '../BeerDetails/BeerDetails'
import Cart from '../Cart/Cart'

const App = () => {
  return (
    <div className="App">
      <Banner />
      <div className='d-flex'>
        <BeerList />
        <BeerDetails />
      </div>
      <Cart />
    </div>
  );
}

export default App;
