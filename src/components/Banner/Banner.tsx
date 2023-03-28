import sixPack from "../../assets/beer-box.png"
import cart from "../../assets/cart.png"
import './Banner.css'

const Banner = () => {
  return (
    <nav className="navbar bg-secondary fixed-top text-white">
      <div className="container-fluid d-flex justify-content-between align-items-end">
        <div className="d-flex align-items-end">
          <img
            src={sixPack}
            className='logo me-2'
          />
          <h1>Pint Picker</h1>
        </div>
        <div className='mx-1'>
          <img src={cart} className='cart' />
          Your Cart
        </div>
      </div>
    </nav>
  )
}

export default Banner
