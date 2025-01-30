import './Logo.style.css';
import logo from "./../../assets/icon/logo.svg";

const Logo = () => {
    return ( 
        <div className="Logo">
            <img src={logo} className="logo-img"/>
            <div className="logo__text">
                <p className="logo-title">waggy</p>
                <p className="logo-subtitle">Pet Shop.</p>
            </div>     
        </div>
     );
}
 
export default Logo;