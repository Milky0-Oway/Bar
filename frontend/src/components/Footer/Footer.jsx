import React from "react";
import './Footer.css';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

const Footer=()=>{
    return(
        <div className='footer'>
            <div className='footer-main'>
                <div className='footer-left'>
                    <img src={logo} alt=''/>
                </div>
                <div className='footer-center'>
                    <h2>Навигация</h2>
                    <ul>
                        <li><Link style={{textDecoration: 'none'}} to='/about'>О нас</Link></li>
                        <li><Link style={{textDecoration: 'none'}} to='/rolls'>Каталог</Link></li>
                        <li><Link style={{textDecoration: 'none'}} to='/delivery'>Доставка и оплата</Link></li>
                        <li><Link style={{textDecoration: 'none'}} to='/reviews'>Отзывы</Link></li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <div>
                        <h2>Контакты</h2>
                        <div className='contact-wrapper'>
                            <p className='label-text'>Наш адрес:</p>
                            <p className='text'>Москва, Луговой пр., 5, корп. 1</p>
                            <h2>+7 (985) 455-00-10</h2>
                        </div>
                    </div>
                    <div className='info-wrapper'>
                        <h2>Расписание</h2>
                        <h3>Пятница, суббота:<br/>с 11:00 до 03:00<br/>Остальные дни:<br/>с 11:00 до 23:00</h3>
                    </div>
                </div>
            </div>
            <div className='footer-secondary'>
                <p>OLDSCHOOL © 2024</p>
            </div>
        </div>
    );
}

export default Footer;