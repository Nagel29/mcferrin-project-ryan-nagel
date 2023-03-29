import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { CartBeer } from "../../utilities/interfaces"

const Cart = ({
  showCart,
  handleClose,
  cartContents,
}: {
  showCart: boolean
  handleClose: () => void
  cartContents: CartBeer[]
}) => {
  return (
    <>
      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart
