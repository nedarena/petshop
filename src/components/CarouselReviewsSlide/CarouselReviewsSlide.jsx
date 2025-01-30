import './CarouselReviewsSlide.style.css';

const CarouselReviewsSlide = ({text, autor}) => {
    return ( 
        <div className='CarouselReviewsSlide'>
            <div className="quote__block">
                <p className="quote">“</p>
            </div>
            
            <div className="rewiews__block">
                <p className="rewiews__text">{text}</p>
                <p className="rewiews__autor">{autor}</p>
            </div>
        </div>
     );
}
 
export default CarouselReviewsSlide;