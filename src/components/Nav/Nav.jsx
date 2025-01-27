import './Nav.style.css';
import NavTop from '../Nav_top/NavTop';
import NavBottom from '../Nav_bottom/NavBottom';

const Nav = () => {
    return ( 
        <div className='navbar'>
            <NavTop/>
            <div className='line'></div>
            <NavBottom/>
        </div>
     );
}
 
export default Nav;