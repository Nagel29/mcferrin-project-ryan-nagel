import { Beer } from "../../utilities/interfaces"

const BeerCard = ({ beer }: { beer: Beer }) => {
  return <div>{beer.name}</div>
}

export default BeerCard
