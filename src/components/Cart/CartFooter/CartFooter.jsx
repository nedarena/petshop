import './CartFooter.style.css';

const CartFooter = ({ count, totalPrice }) => {
    return ( 
        <div className="cart__footer">
            <div className=""></div>
            <div className=""></div>
            <div className="cart__footer__">{count} pieces</div>
            <div className="cart__footer__">{totalPrice}.00 $</div>
        </div>
     );
}
 
export default CartFooter;