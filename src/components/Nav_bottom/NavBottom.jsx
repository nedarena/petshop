import './NavBottom.style.css'
import person from '../../assets/icon/ion_person.svg';
import heart from '../../assets/icon/ion_heart.svg';
import basket from '../../assets/icon/basket.svg';
import { NavLink } from 'react-router-dom';

const NavBottom = () => {
    return ( 
        <div className="menu">
                <select name="category" id="categories" className="select__category">
                    <option value="title">Shop by categories</option>
                    <option value="1">All</option>
                    <option value="2">Accessories</option>
                    <option value="3">Bird Shop</option>
                    <option value="4">Dog Shop</option>
                    <option value="5">Fish Shop</option>
                    <option value="6">Cat Shop</option>
                </select>
                <nav className='menu__list'>
                    <NavLink to={'/'} className={({isActive}) => isActive ? 'menu__list-item-active' : ''}>
                        <li className="menu__list-item menu__list-item-active">Home</li>
                    </NavLink>
                    
                    <li className="menu__list-item">Page</li>
                    <li className="menu__list-item">Shop</li>
                    <li className="menu__list-item">Blog</li>
                    <li className="menu__list-item">Contact</li>
                    <li className="menu__list-item">Offers</li>
                </nav>
                <div className="menu__icons">
                    <img src={person} alt="person" />
                    <img src={heart} alt="heart" />
                    <NavLink to='/cart'>
                        <img src={basket} alt="basket" />
                    </NavLink>
                </div>
        </div>
    );
}
 
export default NavBottom;