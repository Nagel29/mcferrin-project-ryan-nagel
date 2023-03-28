import "./BeerDetails.css"
import { Beer } from "../../utilities/interfaces"

const BeerDetails = ({ beerDetails }: { beerDetails: Beer | undefined }) => {
  const pairings = beerDetails?.["food_pairing"].map((food) => {
    return <li className="list-group-item">{food}</li>
  })

  const maltStrings = beerDetails?.ingredients.malt.map((malt, index) => {
    if (index === beerDetails?.ingredients.malt.length - 1) {
      return `${malt.name}.`
    } else {
      return `${malt.name}, `
    }
  })

  const hops = beerDetails?.ingredients.hops.reduce(
    (acc: string[], hop, index) => {
      if (!acc.includes(hop.name)) {
        acc.push(hop.name)
      }
      return acc
    },
    []
  )

  const hopsStrings = hops?.map((hop, index) => {
    if (index === hops.length - 1) {
      return `${hop}.`
    } else {
      return `${hop}, `
    }
  })

  return (
    <div className="beerDetails-container d-flex rounded overflow-auto bg-light p-3">
      <img
        src={beerDetails?.["image_url"]}
        className="beerDetails-img img-fluid my-2"
      />
      <div className="d-flex flex-column text-start m-4 w-75">
        <h1>{beerDetails?.name}</h1>
        <p className='card p-2'>{beerDetails?.description}</p>
        <p className='fw-bold'>ABV: <span className='fw-normal'>{beerDetails?.abv}</span></p>
        <p className='fw-bold'>IBU: <span className='fw-normal'>{beerDetails?.ibu}</span></p>
        <p className="mt-2 fw-bold">
          Malt used: <span className="fw-normal">{maltStrings}</span>
        </p>
        <p className="mt-2 fw-bold">
          Hops used: <span className="fw-normal">{hopsStrings}</span>
        </p>
        <h6 className="mt-4">Pairs well with:</h6>
        <div className="list-group text-start">{pairings}</div>
        <button className="btn btn-primary mt-5">Add to Cart</button>
      </div>
    </div>
  )
}

export default BeerDetails
