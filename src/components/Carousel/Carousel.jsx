import Slider from 'react-slick';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import './Carousel.style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        image: '/sliders/slider1.png',
        subtitle: 'Save 10 - 20 % off',
        title: 'Best destination for your pets'
    },
    {
        image: '/sliders/slider2.png',
        subtitle: 'Save 30 - 40 % off',
        title: 'Care and love for your pets'
    },
    {
        image: '/sliders/slider3.png',
        subtitle: 'Save 30 - 40 % off',
        title: 'Only quality products for your pets'
    }
]

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000 
    };
  
    return (
      <Slider {...settings} className='carousel'>
        {data.map(item => (
                <div key={item.title}>
                    <CarouselSlide 
                        image={item.image}
                        subtitle={item.subtitle}
                        title={item.title}
                    />
                </div>
            ))}
      </Slider>
    );
  };
   
  export default Carousel;