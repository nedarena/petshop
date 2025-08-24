import "./Product.style.css"
import ButtonDelete from "../ButtonDelete/ButtonDelete"
import QuantityControl from "./QuantityControl/QuantityControl"

const Product = ({ product, quantity, onDelete, onUpdateQuantity }) => {
  return (
    <section className="product">
      <div className="product__img">
        <img src={product.image || "/placeholder.svg"} alt={product.title} />
      </div>
      <div className="product__title">{product.title}</div>
      <div className="product__count">
        <QuantityControl
          quantity={quantity}
          onIncrease={() => onUpdateQuantity(product.id, quantity + 1)}
          onDecrease={() => onUpdateQuantity(product.id, quantity - 1)}
        />
      </div>
      <div className="product__price">{product.price * quantity}.00 $</div>
      <div className="product__controls">
        <ButtonDelete onDelete={onDelete} id={product.id} />
      </div>
    </section>
  )
}

export default Product