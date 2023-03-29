import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Banner from '../Banner/Banner'
import BeerList from '../BeerList/BeerList'
import BeerDetails from '../BeerDetails/BeerDetails'
import Cart from '../Cart/Cart'
import { Beer, CartBeer } from '../../utilities/interfaces';
import {useState} from 'react'
import bubbles from '../../assets/bubbles.mp4'

const App = () => {
  const [beerDetails, setBeerDetails] = useState<Beer | undefined>()
  const [showCart, setShowCart] = useState<boolean>(false)
  const [cartContents, setCartContents] = useState<CartBeer[]>([])

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const updateBeerDetails = (beer: Beer) => {
    setBeerDetails(beer)
  }

  return (
    <div className="App">
      <Banner handleShow={handleShow}/>
      <div className='main-container d-flex mx-2'>
        <BeerList updateBeerDetails={updateBeerDetails}/>
        <BeerDetails beerDetails={beerDetails}/>
      </div>
      <Cart showCart={showCart} handleClose={handleClose} cartContents={cartContents}/>
      <video autoPlay muted loop className='video-settings'>
        <source src={bubbles} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
