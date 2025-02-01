import Carousel from './../Carousel/Carousel';
import Categories from './../Categories/Categories';
import Clothing from './../Clothing/Clothing';
import Foodies from './../Foodies/Foodies';
import Banner from './../Banner/Banner';
import CarouselReviews from './../CarouselReviews/CarouselReviews';
import Register from './../Register/Register';
import BannerInst from './../BannerInst/BannerInst';

const Home = () => {
    return ( 
        <>
        <Carousel/>
        <Categories/>
        <Clothing/>
        <Foodies/>
        <Banner/>
        <CarouselReviews/>
        <Register/>
        <BannerInst/>
        </>
     );
}
 
export default Home;