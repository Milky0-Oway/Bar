import React from "react";
import './MenuCategories.css';
import {Link} from "react-router-dom";

const MenuCategories = () => {

    return(
        <nav>
            <ul className='nav-menu'>
                <li><Link style={{textDecoration: 'none'}} to='/rolls'>Рок-н-роллы</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/pizza'>Пицца</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/burgers'>Бургеры</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/snacks'>Горячие закуски</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/soups'>Супы</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/salads'>Салаты</Link></li>
                <li><Link style={{textDecoration: 'none'}} to='/drinks'>Напитки</Link></li>
            </ul>
        </nav>
    );
}

export default MenuCategories;