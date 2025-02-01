import './CartHeader.style.css';

const CartHeader = () => {
    return ( 
        <div className="cart__header">
                <div className="">image</div>
                <div className="cart__header__title">name</div>
                <div className="cart__header__count">quantity</div>
                <div className="cart__header__cost">price</div>
            </div>
     );
}
 
export default CartHeader;