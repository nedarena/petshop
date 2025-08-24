import "./QuantityControl.css"

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="quantity-control">
      <div className="quantity-value">{quantity}</div>
      <div className="quantity-buttons">
        <button className="quantity-button" onClick={onIncrease}>
          <svg className="quantity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
        <button className="quantity-button" onClick={onDecrease} disabled={quantity <= 1}>
          <svg className="quantity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default QuantityControl