import "./BeerList.css"
import { useState, useEffect } from "react"
import { fetchBeers } from "../../utilities/apiCalls"
import BeerCard from "../BeerCard/BeerCard"

const BeerList = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async (searchParam: string) => {
    const beerList = await fetchBeers(searchParam)
    setBeers(beerList)
  }

  useEffect(() => {
    getBeers("")
  }, [])

  const beerCards = beers.map(beer => {
    return <BeerCard beer={beer} />
  })

  return (
    <div className="beerList-container border">
      beer list
      {beerCards}
    </div>
  )
}

export default BeerList
