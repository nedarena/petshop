import './Product.style.css';
import img from './../../../assets/Product1.png'
import ButtonDelete from '../ButtonDelete/ButtonDelete';

const Product = () => {
    return ( 
        <section className="product">
            <div className="product__img">
                <img src={img} alt="dghg" className=""/>
            </div>
            <div className="product__title">dfgdfg</div>
            <div className="product__count">5 шт</div>
            <div className="product__price">50 руб.</div>
            <div className="product__controls">
                <ButtonDelete/>
            </div>
        </section>
     );
}
 
export default Product;