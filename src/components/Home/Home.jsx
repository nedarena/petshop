import Carousel from './../Carousel/Carousel';
import Categories from './../Categories/Categories';
import Clothing from './../Clothing/Clothing';
import Foodies from './../Foodies/Foodies';
import Banner from './../Banner/Banner';
import CarouselReviews from './../CarouselReviews/CarouselReviews';
import Register from './../Register/Register';
import BannerInst from './../BannerInst/BannerInst';

const Home = ({onAddToCart}) => {
    return ( 
        <>
        <Carousel/>
        <Categories/>
        <Clothing
            onAddToCart={onAddToCart}
        />
        <Foodies
            onAddToCart={onAddToCart}
        />
        <Banner/>
        <CarouselReviews/>
        <Register/>
        <BannerInst/>
        </>
     );
}
 
export default Home;