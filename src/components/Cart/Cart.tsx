import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { CartBeer } from "../../utilities/interfaces"
import remove from "../../assets/remove.png"
import "./Cart.css"

const Cart = ({
  showCart,
  handleClose,
  cartContents,
  deleteFromCart,
}: {
  showCart: boolean
  handleClose: () => void
  cartContents: CartBeer
  deleteFromCart: (deletedBeer: string) => void
}) => {
  let cartBeers = Object.keys(cartContents).map((beer) => {
    return (
      <div
        key={beer}
        className="d-flex justify-content-between align-items-center"
      >
        <button className='btn btn-outline-danger' onClick={() => deleteFromCart(beer)}>
          {" "}
          <img src={remove} className="remove-img m-1"/>
        </button>
        <p className="m-1">{beer}</p>
        <p className="m-1">{cartContents[beer]}x</p>
      </div>
    )
  })

  return (
    <>
      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">{cartBeers}</div>
          {cartBeers.length === 0 && (
            <p>No beers currently in cart! Add some beers!</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart
