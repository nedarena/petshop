import CartHeader from './CartHeader/CartHeader';
import CartFooter from './CartFooter/CartFooter';
import Product from './Product/Product';
import './Cart.style.css';
// import { useEffect, useState } from "react";

const Cart = () => {
    // const [cart, setCart] = useState(data);

    // const data = [
    //     {
    //         image: '/cardProducts/Product5.png',
    //         title: 'fresh kisses',
    //         category: 'cat',
    //         price: 18,
    //         incart: false
    //     },
    //     {
    //         image: '/cardProducts/Product6.png',
    //         title: 'pate butcher`s',
    //         price: 18,
    //         category: 'dog'
    //     },
    //     {
    //         image: '/cardProducts/Product7.png',
    //         title: 'pulsitos',
    //         price: 18,
    //         category: 'bird'
    //     },
    //     {
    //         image: '/cardProducts/Product8.png',
    //         title: 'butcher`s pate',
    //         price: 18,
    //         category: 'dog'
    //     },
    //     {
    //         image: '/cardProducts/Product9.png',
    //         title: 'chicken treats',
    //         price: 18,
    //         category: 'cat'
    //     },
    //     {
    //         image: '/cardProducts/Product10.png',
    //         title: 'love corn',
    //         price: 18,
    //         category: 'cat'
    //     },
    //     {
    //         image: '/cardProducts/Product11.png',
    //         title: 'butcher`s dogs',
    //         price: 18,
    //         category: 'dog'
    //     },
    //     {
    //         image: '/cardProducts/Product12.png',
    //         title: 'winiary',
    //         price: 18,
    //         category: 'bird'
    //     },
    // ];

    // const products = cart.map((product) => {
    //     return
    // })
    return ( 
        <div className="cart">
            <p className="cart__title">Cart</p>
            <CartHeader/>
            <Product/>
            <Product/>
            <CartFooter/>
        </div>
     );
}
 
export default Cart;