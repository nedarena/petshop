import './BannerInst.style.css';
import camera from './../../assets/icon/camera.svg';

const instData = [
    '/inst/inst1.png',
    '/inst/inst2.png',
    '/inst/inst3.png',
    '/inst/inst4.png',
    '/inst/inst5.png',
    '/inst/inst6.png'
]

const BannerInst = () => {
    return ( 
        <div className='BannerInst'>
            {instData.map((item, index) => (
                <div key={index} className='bannerinst__block'>
                    <img src={camera} alt="" className='BannerInst__camera'/>
                    <img src={item} alt="" className='BannerInst__img'/>
                </div>
            ))}
            
        </div>
     );
}
 
export default BannerInst;