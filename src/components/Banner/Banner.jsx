import './Banner.style.css';
import Btn from '../Btn/Btn';
import img from './../../assets/img/header-dog2.png'

const Banner = () => {
    return ( 
        <div className='bg'>
            <div className="banner container">
                <div className="banner__text">
                    <p className="banner__info-sale">Upto 40% off</p>
                    <p className="banner__title">Clearance sale !!!</p>
                    <Btn text={"shop all \u2192"} />
                </div>
                <img src={img} alt="" className='banner__img'/>
            </div>
        </div>
     );
}
 
export default Banner;