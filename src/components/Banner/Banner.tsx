import sixPack from "../../assets/beer-box.png"
import cart from "../../assets/cart.png"
import './Banner.css'

const Banner = () => {
  return (
    <nav className="navbar bg-secondary fixed-top text-white">
      <div className="container-fluid d-flex justify-content-between align-items-end">
        <div className="d-flex align-items-center">
          <img
            src={sixPack}
            className='logo me-4'
          />
          <h1 className='display-1'>Pint Picker</h1>
        </div>
        <div className='mx-3'>
          <img src={cart} className='cart ' />
          Your Cart
        </div>
      </div>
    </nav>
  )
}

export default Banner
