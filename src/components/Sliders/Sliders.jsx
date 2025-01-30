import Btn from '../Btn/Btn';
import './Sliders.style.css';
import Slider from "react-slick";

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

const Sliders = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
    };

    return ( 
        <div className='slider'>
            <div className='slider-container'>
                <Slider {...settings}>
                {
                data.map((item,index)=>{
                return(
                    <div key={index} className='slide-item'>
                        <div>
                            <img src={item.image} className='slide-image'/>
                        </div>

                        <div className='slide-content'>
                            <p className='content__subtitle'>{item.subtitle}</p>
                            <p className='content__title'>{item.title}</p>
                            <Btn text={"SHOP NOW"}/>
                        </div>
                        
                    </div>
                )
                })
                }
                </Slider>
            </div>
        </div>
    );
}
 
export default Sliders;