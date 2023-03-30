import sixPack from "../../assets/beer-box.png"
import cart from "../../assets/cart.png"
import "./Banner.css"

const Banner = ({ handleShow }: { handleShow: () => void }) => {
  return (
    <nav className="banner navbar bg-secondary fixed-top text-light">
      <div className="container-fluid d-flex justify-content-between align-items-end">
        <div className="d-flex align-items-end">
          <img src={sixPack} className="logo me-2" />
          <h1>Pint Picker</h1>
        </div>
        <button
          type='button'
          className="cart-button btn btn-outline-light mx-1 fs-4"
          onClick={handleShow}
          tabIndex={1}
        >
          <img src={cart} className="cart" />
          Your Cart
        </button>
      </div>
    </nav>
  )
}

export default Banner
