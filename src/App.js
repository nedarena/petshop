import './App.css';
import Nav from './components/Nav/Nav';
import Categories from './components/Categories/Categories';
import Banner from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel';
import Clothing from './components/Clothing/Clothing';
import Foodies from './components/Foodies/Foodies';
import Register from './components/Register/Register';
import BannerInst from './components/BannerInst/BannerInst';
import Footer from './components/Footer/Footer';
import CarouselReviews from './components/CarouselReviews/CarouselReviews';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Carousel/>
      <Categories/>
      <Clothing/>
      <Foodies/>
      <Banner/>
      <CarouselReviews/>
      <Register/>
      <BannerInst/>
      <Footer/>
    </div>
  );
}

export default App;