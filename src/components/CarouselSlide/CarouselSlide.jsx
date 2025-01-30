import './CarouselSlide.style.css';
import Btn from '../Btn/Btn';

const CarouselSlide = ({image, subtitle, title}) => {
    return ( 
        <div className='carousel__block'>
            <img src={image} alt='slide-1' />
            <div className='slide-content'>
                <p className='content__subtitle'>{subtitle}</p>
                <p className='content__title'>{title}</p>
                <Btn text={"SHOP NOW \u2192"}/>
            </div>
        </div>
     );
}
 
export default CarouselSlide;