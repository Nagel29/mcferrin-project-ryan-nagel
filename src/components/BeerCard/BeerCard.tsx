import { Beer } from "../../utilities/interfaces"
import "./BeerCard.css"

const BeerCard = ({
  beer,
  updateBeerDetails,
}: {
  beer: Beer
  updateBeerDetails: (beer: Beer) => void
}) => {



  return (
    <button
      className="beerCard-container card d-flex flex-column align-items-center m-3 border-success" 
      onClick={() => updateBeerDetails(beer)} 
      tabIndex={1}>
      <div className="card-body p-1">
        <h5 className="card-title">{beer.name}</h5>
        <div>{beer.tagline}</div>
      </div>
      <img src={beer["image_url"]} className="beer-img img-fluid my-2" />
      <div className="border-top my-2">ABV: {beer.abv}</div>
    </button>
  )
}

export default BeerCard
