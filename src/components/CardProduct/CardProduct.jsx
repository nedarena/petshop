import './CardProduct.style.css';
import stars from './../../assets/icon/Ratings.svg';
import heart from './../../assets/icon/ion_heart.svg';

const CardProduct = ({image, title}) => {
    return ( 
        <div className="clothing__products__card">
            <img src={image} alt="" className='products__card-img'/>
                            
            <div className="products__card__info">
                <p className="products__card-title">{title}</p>
                <div className="products__card-rating">
                    <img src={stars} alt="" className="products__card-rating-stars" />
                    <p className="products__card-rating-number">5.0</p>
                </div>
                <p className="products__card-price">&#36; 18.00</p>
            </div>
                            
            <div className="products__card-btns">
                <button className="btn-products">Add to cart</button>
                <button className='btn-products btn-mini'><img src={heart} alt="" className='btn-img-heart'/></button>
            </div>
        </div>
     );
}
 
export default CardProduct;