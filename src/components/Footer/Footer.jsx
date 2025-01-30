import Logo from '../Logo/Logo';
import './Footer.style.css';
import send from './../../assets/icon/send-btn.svg';

// const socialData = [
//     '/social/social1.svg',
//     '/social/social2.svg',
//     '/social/social3.svg',
//     '/social/social4.svg',
//     '/social/social5.svg',
// ];

const socialData1 = [
    '/social-icon/social1.svg',
    '/social-icon/social2.svg',
    '/social-icon/social3.svg',
    '/social-icon/social4.svg',
    '/social-icon/social5.svg',
];

const Footer = () => {
    return ( 
        <div className='Footer container'>
            <div className="footer-top">
                <div className="footer-top__contact">
                    <Logo/>
                    <p className="contact__text">Subscribe to our newsletter to get updates about our grand offers.</p>
                    <div className="contact__social">
                        {
                        socialData1.map((item, index) => (
                            <div key={index} className="social__block">
                                <img src={item} alt="social-img" className='social-img '/>
                            </div>
                        ))
                    }
                    </div>
                    
                </div>
                <div className="footer-top__navmenu">
                    <p className="navmenu__title">ouick links</p>
                    <div className="navmenu__list">
                        <li className="navmenu__list-item">Home</li>
                        <li className="navmenu__list-item">About Us</li>
                        <li className="navmenu__list-item">Offers</li>
                        <li className="navmenu__list-item">Services</li>
                        <li className="navmenu__list-item">Contact Us</li>
                    </div>
                </div>
                <div className="footer-top__navmenu">
                    <p className="navmenu__title">Help Centre</p>
                    <div className="navmenu__list">
                        <li className="navmenu__list-item">Payments</li>
                        <li className="navmenu__list-item">Shipping</li>
                        <li className="navmenu__list-item">Product returns</li>
                        <li className="navmenu__list-item">FAQs</li>
                        <li className="navmenu__list-item">Checkout</li>
                    </div>
                </div>
                <div className="footer-top__send">
                    <p className="send__title">Our newsletter</p>
                    <p className="send__subtitle">Subscribe to our newsletter to get updates about our grand offers.</p>
                    <div className="send__input">
                        <input type="email" placeholder='Enter your email-address'/>
                        <img src={send} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©2025 Waggy. All rights reserved.</p>
                <p>Template design by: <span>EETK</span></p>
            </div>
        </div>
     );
}
 
export default Footer;