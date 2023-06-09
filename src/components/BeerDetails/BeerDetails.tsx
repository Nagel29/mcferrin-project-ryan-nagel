import "./BeerDetails.css"
import { Beer } from "../../utilities/interfaces"
import { useState, useEffect } from "react"
import sixPack from "../../assets/six-pack.gif"

const BeerDetails = ({
  beerDetails,
  updateCart,
}: {
  beerDetails: Beer | undefined
  updateCart: (addedBeer: Beer | undefined, quantity: number) => void
}) => {
  const [quantity, setQuantity] = useState<number>(1)
  const [showMessage, setShowMessage] = useState<boolean>(false)

  const handleQuantity = (event: any) => {
    if (event) {
      setQuantity(event.target.value)
    }
  }

  useEffect(() => {
    setQuantity(1)
    setShowMessage(false)
  }, [beerDetails])

  const pairings = beerDetails?.["food_pairing"].map((food) => {
    return (
      <li key={food} className="list-group-item">
        {food}
      </li>
    )
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

  let content

  if (beerDetails) {
    content = (
      <>
        <div className="d-flex">
          <img
            src={beerDetails?.["image_url"]}
            className="beerDetails-img img-fluid my-2 m-3"
          />
          <div className="container-fluid d-flex flex-column text-start m-4 w-75">
            <h1>{beerDetails?.name}</h1>
            <p className="card p-2">{beerDetails?.description}</p>
          </div>
        </div>
        <div className="d-flex flex-column text-start p-1">
          <p className="fw-bold">
            ABV: <span className="fw-normal">{beerDetails?.abv}</span>
          </p>
          <p className="fw-bold">
            IBU: <span className="fw-normal">{beerDetails?.ibu}</span>
          </p>
          <p className="mt-2 fw-bold">
            Malt used: <span className="fw-normal">{maltStrings}</span>
          </p>
          <p className="mt-2 fw-bold">
            Hops used: <span className="fw-normal">{hopsStrings}</span>
          </p>
          <h6 className="mt-4 fw-bold">Pairs well with:</h6>
          <div className="list-group text-start">{pairings}</div>
          <div className='dropdown'>
            <label className=" mt-4" htmlFor="quantity-dropdown">
              Select a quantity:
            </label>
            <select
              className="form-select form-select-sm w-50"
              aria-label=".form-select-sm"
              value={quantity}
              onChange={(event) => handleQuantity(event)}
              id="quantity-dropdown"
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
            </select>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-primary mt-1 w-50"
              onClick={() => {
                updateCart(beerDetails, quantity)
                setShowMessage(true)
              }}
            >
              Add to Cart
            </button>
            {showMessage && (
              <p className="m-2">
                {quantity} {beerDetails?.name} added to cart!
              </p>
            )}
          </div>
        </div>
      </>
    )
  } else {
    content = (
      <>
        <img src={sixPack} className="rounded" />
        <p className='fs-5 m-2'>Select a beer to see more details!</p>
      </>
    )
  }

  return (
    <div className="beerDetails-container overflow-auto d-flex flex-column bg-light p-3">
      {content}
    </div>
  )
}

export default BeerDetails
