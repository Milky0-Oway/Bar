import React, {useContext} from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import {ShopContext} from "../../context/BarContext";

const Navbar = () => {
    const {getTotalItems} = useContext(ShopContext);

    return(
        <nav>
            <div className='nav-logo'>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <ul className='nav-menu main-text'>
                <li><Link style={{textDecoration: 'none'}} to='/about'>О нас</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/rolls'>Каталог</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/delivery'>Доставка и оплата</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/reviews'>Отзывы</Link></li>
            </ul>
            <div className='nav-login-cart'>
                <Link style={{background: 'none'}} to='/cart'><ion-icon name="cart-outline" style={{height: '30px', width: '30px', background: 'none'}}></ion-icon></Link>
                <div className='nav-cart-count'>{getTotalItems()}</div>
            </div>
        </nav>
    );
}

export default Navbar;