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

  const beerCards = beers.map((beer) => {
    return <BeerCard beer={beer} />
  })

  // const beerRows = beerCards.reduce((acc, beer, index) => {
  //   let row = `<div class="row"></div>`
  //   return acc
  // }, [])

  return (
    <div className="beerList-container border rounded d-grid overflow-auto" style={{gridTemplateColumns: 'auto auto auto auto'}}>
      {beerCards}
    </div>
  )
}

export default BeerList
