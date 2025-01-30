import "./Nav.Top.style.css";
import Logo from "../Logo/Logo";
import search from './../../assets/icon/ion_search.svg'

const NavTop = () => {
    return (
        <div className="header container">
            <Logo/>
            <div className="header__search__block">
                <input className="header__search" type="search" name="search-text" placeholder="Search for more than 10,000 products"/>
                <img src={search} alt="" />
            </div>
            
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