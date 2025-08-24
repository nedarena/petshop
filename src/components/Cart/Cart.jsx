import CartHeader from './CartHeader/CartHeader';
import CartFooter from './CartFooter/CartFooter';
import Product from './Product/Product';
import './Cart.style.css';
import { useEffect, useState } from "react";

export const Cart = ({cart, onDelete, onUpdateQuantity}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const cartArray = Array.from(cart.values());

    useEffect(() => {
        if (cartArray.length === 0) {
            setTotalPrice(0);
        } else {
            setTotalPrice(cartArray.reduce((sum, item) => sum + (item.product.price * item.quantity), 0));
        }
    }, [cart]);

    return ( 
        <div className="cart">
            {
                cartArray.length === 0 ? 
                <div className="empty">
                    <p className="cart__title">Cart</p>
                    <p className='cart__message'>You haven't added anything to your cart yet</p>
                </div>
                : 
                <>
                    <p className="cart__title">Cart</p>
                    <CartHeader/>
                    {cartArray.map((item) => (
                        <Product 
                            key={item.product.id}
                            product={item.product}
                            quantity={item.quantity}
                            onDelete={onDelete}
                            onUpdateQuantity={onUpdateQuantity}
                        />
                    ))}
                    <CartFooter
                        count={cartArray.reduce((sum, item) => sum + item.quantity, 0)}
                        totalPrice={totalPrice}
                    />
                </>
            }
        </div>
     );
}