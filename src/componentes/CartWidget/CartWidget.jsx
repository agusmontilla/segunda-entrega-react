import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito="https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div>
        <img className="imgCarro"src={imgCarrito} alt="Carrito" />
        <strong> 5 </strong>
    </div>
  )
}

export default CartWidget