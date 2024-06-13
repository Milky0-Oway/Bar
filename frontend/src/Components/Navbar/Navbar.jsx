import React, {useContext} from "react";
import './Navbar.css';
import logo from '../../Assets/logo.png';
import {Link, useNavigate} from "react-router-dom";
import {ShopContext} from "../../Context/BarContext";

const Navbar = () => {
    const {getTotalItems,token,setToken} = useContext(ShopContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        navigate('/');
    }

    return(
        <nav>
            <div className='nav-logo'>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <ul className='nav-menu'>
                <li><Link style={{textDecoration: 'none'}} to='/rolls'>Рок-н-роллы</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/pizza'>Пицца</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/burgers'>Бургеры</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/snacks'>Горячие закуски</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/soups'>Супы</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/salads'>Салаты</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/drinks'>Напитки</Link></li>
            </ul>
            {!token
                ? <div className='nav-login-cart'>
                    <Link style={{background: 'none'}} to='/login'><ion-icon name="person-outline" style={{height: '27px', width: '27px', background: 'none'}}></ion-icon></Link>
                    <Link style={{background: 'none'}} to='/cart'><ion-icon name="cart-outline" style={{height: '30px', width: '30px', background: 'none'}}></ion-icon></Link>
                    <div className='nav-cart-count'>{getTotalItems()}</div>
                </div>
                : <div className='nav-login-cart'>
                    <Link style={{background: 'none'}} to='/login'><ion-icon name="person-outline" style={{height: '27px', width: '27px', background: 'none'}}></ion-icon></Link>
                    <Link style={{background: 'none'}} to='/cart'><ion-icon name="cart-outline" style={{height: '30px', width: '30px', background: 'none'}}></ion-icon></Link>
                    <div className='nav-cart-count'>{getTotalItems()}</div>
                    <span onClick={logout}><ion-icon name="log-out-outline" style={{height: '27px', width: '27px', background: 'none', cursor: 'pointer'}}></ion-icon></span>
                </div>
            }
            </nav>
    );
}

export default Navbar;