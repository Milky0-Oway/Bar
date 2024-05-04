import React from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import {Link} from "react-router-dom";
import LoginSignup from "../../Pages/LoginSingup";
const Navbar = () => {
    return(
        <nav>
            <div className='nav-logo'>
                <img src={logo} alt="" />
            </div>
            <ul className='nav-menu'>
                <li><Link style={{textDecoration: 'none'}} to='/'>Главная</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/rolls'>Рок-н-роллы</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/pizza'>Пицца</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/burgers'>Бургеры</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/drinks'>Напитки</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/other'>Прочее</Link></li>
            </ul>
            <div className='nav-login-cart'>
                <Link style={{background: 'none'}} to='/login'><ion-icon name="person-outline" style={{height: '27px', width: '27px', background: 'none'}}></ion-icon></Link>
                <Link style={{background: 'none'}} to='/cart'><ion-icon name="cart-outline" style={{height: '30px', width: '30px', background: 'none'}}></ion-icon></Link>
                <div className='nav-cart-count'>0</div>
            </div>
            </nav>
    );
}

export default Navbar;