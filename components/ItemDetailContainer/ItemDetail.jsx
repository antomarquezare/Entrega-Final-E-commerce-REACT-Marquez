import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./itemDetail.css"

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProductInCart } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
    setShowItemCount(false)
  }
    return (
      <div className="item-detail">
        <div className="images-detail-container">
          <div className="secondary-images">
          </div>
          <div classname="main-image">
            <img src={product.image} width={500} alt="" />
          </div>
        </div>

        <div classname="text-detail-container">
          <h2 className="title-detail">{product.name}</h2>
          <p className="text-detail">{product.description}</p>
          <p className="text-detail">Precio: ${product.price}</p>
          {
            showItemCount === true ? (
              <ItemCount stock={product.stock} addProduct={addProduct} />
            ) : (
              <Link to="/cart" className="button-end-buy">Finalizar mi compra</Link>
            )
          }
        </div>
      </div>
    )
  }
  export default ItemDetail