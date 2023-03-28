import "./BeerList.css"
import { useState, useEffect } from "react"
import { fetchBeers } from '../../utilities/apiCalls'

const BeerList = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async (searchParam: string) => {
    const beerList = await fetchBeers(searchParam)
    setBeers(beerList)
  }

  useEffect(() => {
   getBeers('')
  },[])

  return <div className="beerList-container border">beer list</div>
}

export default BeerList
