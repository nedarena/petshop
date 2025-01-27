import "./Nav.Top.style.css";
import logo from "./../../image/icon/logo.svg";

const NavTop = () => {
    return ( 
        <div className="header container">
            <div className="header__logo">
                <img src={logo} className="logo-img"/>
                <div className="header__text">
                    <p className="logo-title">waggy</p>
                    <p className="logo-subtitle">Pet Shop.</p>
                </div>
                
            </div>
            <input className="header__search" type="search" name="search-text" placeholder="Search for more than 10,000 products"/>
            <div className="header__contact">
                <p className="contact-title">Phone</p>
                <p className="contact-number">+980-34984089</p>
            </div>
            <div className="header__contact">
            <p className="contact-title">Email</p>
            <p className="contact-number">waggy@gmail.com</p>
            </div>
        </div>
     );
}
 
export default NavTop;