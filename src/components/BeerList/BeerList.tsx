import "./BeerList.css"
import { useState, useEffect } from "react"
import { fetchBeers } from "../../utilities/apiCalls"
import BeerCard from "../BeerCard/BeerCard"
import { Beer } from "../../utilities/interfaces"

const BeerList = ({
  updateBeerDetails,
}: {
  updateBeerDetails: (beer: Beer) => void
}) => {
  const [beers, setBeers] = useState([])

  const getBeers = async (searchParam: string) => {
    const beerList = await fetchBeers(searchParam)
    setBeers(beerList)
  }

  useEffect(() => {
    getBeers("")
  }, [])

  const beerCards = beers.map((beer: Beer) => {
    return <BeerCard key={beer.id} beer={beer} updateBeerDetails={updateBeerDetails} />
  })

  return (
      <div className="beerList-container border rounded d-grid bg-light overflow-auto">
        {beerCards}
      </div>
  )
}

export default BeerList
