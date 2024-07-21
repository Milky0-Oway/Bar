import React from "react";
import {Link} from "react-router-dom";
import './Menu.css';
import logo from '../../assets/logo.png'

const Menu = () => {
    return(
        <div className='menu'>
            <Link style={{textDecoration: 'none'}} to='/rolls'>
                <div className='menu-category'>
                    <img src={logo} alt=''/>
                    <div className='menu-text'>
                        <h2>Рок-н-роллы</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi facilis fugit id incidunt ipsa iure molestiae nesciunt nobis obcaecati possimus, recusandae rerum sapiente sed sint sit ut. Deserunt excepturi iusto nobis quidem, vel veniam! Aliquam amet animi cum cumque dolorem explicabo molestiae obcaecati odit ratione repellat reprehenderit, sint voluptates.</p>
                    </div>
                </div>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/pizza'>
                <div className='menu-category'>
                    <div className='menu-text'>
                        <h2>Пицца</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi facilis fugit id incidunt ipsa iure molestiae nesciunt nobis obcaecati possimus, recusandae rerum sapiente sed sint sit ut. Deserunt excepturi iusto nobis quidem, vel veniam! Aliquam amet animi cum cumque dolorem explicabo molestiae obcaecati odit ratione repellat reprehenderit, sint voluptates.</p>
                    </div>
                    <img src={logo} alt=''/>
                </div>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/burgers'>
                <div className='menu-category'>
                    <img src={logo} alt=''/>
                    <div className='menu-text'>
                        <h2>Бургеры</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi facilis fugit id incidunt ipsa iure molestiae nesciunt nobis obcaecati possimus, recusandae rerum sapiente sed sint sit ut. Deserunt excepturi iusto nobis quidem, vel veniam! Aliquam amet animi cum cumque dolorem explicabo molestiae obcaecati odit ratione repellat reprehenderit, sint voluptates.</p>
                    </div>
                </div>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/snacks'>
                <div className='menu-category'>
                    <div className='menu-text'>
                        <h2>Горячие закуски</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi facilis fugit id incidunt ipsa iure molestiae nesciunt nobis obcaecati possimus, recusandae rerum sapiente sed sint sit ut. Deserunt excepturi iusto nobis quidem, vel veniam! Aliquam amet animi cum cumque dolorem explicabo molestiae obcaecati odit ratione repellat reprehenderit, sint voluptates.</p>
                    </div>
                    <img src={logo} alt=''/>
                </div>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/soups'>
                <div className='menu-category'>
                    <img src={logo} alt=''/>
                    <div className='menu-text'>
                        <h2>Супы</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi facilis fugit id incidunt ipsa iure molestiae nesciunt nobis obcaecati possimus, recusandae rerum sapiente sed sint sit ut. Deserunt excepturi iusto nobis quidem, vel veniam! Aliquam amet animi cum cumque dolorem explicabo molestiae obcaecati odit ratione repellat reprehenderit, sint voluptates.</p>
                    </div>
                </div>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/salads'>
                 <div className='menu-category'>
                     <div className='menu-text'>
                         <h2>Салаты</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi facilis fugit id incidunt ipsa iure molestiae nesciunt nobis obcaecati possimus, recusandae rerum sapiente sed sint sit ut. Deserunt excepturi iusto nobis quidem, vel veniam! Aliquam amet animi cum cumque dolorem explicabo molestiae obcaecati odit ratione repellat reprehenderit, sint voluptates.</p>
                     </div>
                     <img src={logo} alt=''/>
                 </div>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/drinks'>
                <div className='menu-category'>
                    <img src={logo} alt=''/>
                    <div className='menu-text'>
                        <h2>Напитки</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi facilis fugit id incidunt ipsa iure molestiae nesciunt nobis obcaecati possimus, recusandae rerum sapiente sed sint sit ut. Deserunt excepturi iusto nobis quidem, vel veniam! Aliquam amet animi cum cumque dolorem explicabo molestiae obcaecati odit ratione repellat reprehenderit, sint voluptates.</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Menu;