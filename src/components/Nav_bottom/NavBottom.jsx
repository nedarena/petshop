import './NavBottom.style.css'
import person from '../../image/icon/ion_person.svg';
import heart from '../../image/icon/ion_heart.svg';
import basket from '../../image/icon/basket.svg';

const NavBottom = () => {
    return ( 
        <div className="menu container">
                <select name="category" id="categories" className="select__category">
                    <option value="title">Shop by categories</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <nav className='menu__list'>
                    <li className="menu__list-item">Home</li>
                    <li className="menu__list-item">Page</li>
                    <li className="menu__list-item">Shop</li>
                    <li className="menu__list-item">Blog</li>
                    <li className="menu__list-item">Contact</li>
                    <li className="menu__list-item">Offers</li>
                </nav>
                <div className="menu__icons">
                    <img src={person} alt="person" />
                    <img src={heart} alt="heart" />
                    <img src={basket} alt="basket" />
                </div>
        </div>
    );
}
 
export default NavBottom;