import sixPack from "../../assets/beer-box.png"
import cart from "../../assets/cart.png"
import "./Banner.css"

const Banner = ({handleShow}:{handleShow: () => void}) => {
  return (
    <nav className="navbar bg-light fixed-top text-dark">
      <div className="container-fluid d-flex justify-content-between align-items-end">
        <div className="d-flex align-items-end">
          <img src={sixPack} className="logo me-2" />
          <h1>Pint Picker</h1>
        </div>
        <div className="cart-button mx-1" onClick={handleShow}>
          <img src={cart} className="cart" />
          Your Cart
        </div>
      </div>
    </nav>
  )
}

export default Banner
