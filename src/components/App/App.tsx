import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Banner from '../Banner/Banner'
import BeerList from '../BeerList/BeerList'
import BeerDetails from '../BeerDetails/BeerDetails'
import Cart from '../Cart/Cart'
import { Beer } from '../../utilities/interfaces';
import {useState} from 'react'

const App = () => {
  const [beerDetails, setBeerDetails] = useState<Beer>()

  const updateBeerDetails = (beer: Beer) => {
    setBeerDetails(beer)
  }

  return (
    <div className="App h-100">
      <Banner />
      <div className='d-flex mx-2' style={{height: '60rem'}}>
        <BeerList updateBeerDetails={updateBeerDetails}/>
        <BeerDetails />
      </div>
      {/* <Cart /> */}
    </div>
  );
}

export default App;
