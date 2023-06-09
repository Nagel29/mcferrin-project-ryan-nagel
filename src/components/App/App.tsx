import React from "react"
import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import Banner from "../Banner/Banner"
import BeerList from "../BeerList/BeerList"
import BeerDetails from "../BeerDetails/BeerDetails"
import Cart from "../Cart/Cart"
import { Beer, CartBeer } from "../../utilities/interfaces"
import { useState } from "react"

const App = () => {
  const [beerDetails, setBeerDetails] = useState<Beer | undefined>()
  const [showCart, setShowCart] = useState<boolean>(false)
  const [cartContents, setCartContents] = useState<CartBeer>({})

  const handleClose = () => setShowCart(false)
  const handleShow = () => setShowCart(true)

  const updateBeerDetails = (beer: Beer) => {
    setBeerDetails(beer)
  }

  const updateCart = (addedBeer: Beer | undefined, quantity: number) => {
    if (addedBeer) {
      if (Object.keys(cartContents).includes(addedBeer.name)) {
        let oldQuantity = cartContents[addedBeer.name]
        setCartContents({
          ...cartContents,
          [addedBeer.name]: Number(oldQuantity) + Number(quantity),
        })
      } else {
        setCartContents({ ...cartContents, [addedBeer.name]: Number(quantity) })
      }
    }
  }

  const deleteFromCart = (deletedBeer: string) => {
    let updatedCart = {...cartContents}
    delete updatedCart[deletedBeer]
    setCartContents(updatedCart)
  }

  return (
    <div className="App">
      <Banner handleShow={handleShow} />
      <div className="list-details-container d-flex mx-1 h-100">
        <BeerList updateBeerDetails={updateBeerDetails} />
        <BeerDetails beerDetails={beerDetails} updateCart={updateCart} />
      </div>
      <Cart
        showCart={showCart}
        handleClose={handleClose}
        cartContents={cartContents}
        deleteFromCart={deleteFromCart}
      />

    </div>
  )
}

export default App
