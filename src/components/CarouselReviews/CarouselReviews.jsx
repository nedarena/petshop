import './CarouselReviews.style.css';
import Slider from 'react-slick';
import CarouselReviewsSlide from '../CarouselReviewsSlide/CarouselReviewsSlide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewsData = [
    {
        text: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.',
        autor: '- Joshima Lin'
    },
    {
        text: 'Success is not the key to happiness. Happiness is the key to success.',
        autor: '- Herman Cain'
    },
    {
        text: 'No longer chasing butterflies, Camila and I planted our garden so they could come to us.',
        autor: '- Matthew Mcconaughey'
    }
]

const CarouselReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    return ( 
        <Slider {...settings} className='CarouselReviews'>
        {reviewsData.map(item => (
                <div key={item.text}>
                    <CarouselReviewsSlide 
                        text={item.text}
                        autor={item.autor}
                    />
                </div>
            ))}
      </Slider>
     );
}
 
export default CarouselReviews;