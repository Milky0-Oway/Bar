import React, {useContext, useState} from "react";
import './LoginSignup.css'
import {ShopContext} from "../../context/BarContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const LoginSignup = () => {

    const {url,setToken} = useContext(ShopContext);
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    });

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data, [name]:value}));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url + '/api/user/login';
        const response = await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            navigate('/');
            window.location.reload();
        }
        else{
            alert(response.data.message);
        }
    }

    const onRegister = async (event) => {
        event.preventDefault();
        let newUrl = url + '/api/user/register';
        const response = await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            navigate('/');
            window.location.reload();
        }
        else{
            alert(response.data.message);
        }
    }

    const registerLinkClick = () => {
        setIsActive(true);
    };

    const loginLinkClick = () => {
        setIsActive(false);
    };

    return(
        <div className='wrapper-body'>
        <div className={`wrapper ${isActive ? 'active' : ''}`}>
            <div className="form-box login">
                <h2>Войти</h2>
                <form onSubmit={onLogin}>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                        <input name='email' onChange={onChangeHandler} value={data.email} type="email" id="login" required />
                            <label>Логин</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input name='password' onChange={onChangeHandler} value={data.password} type="password" id="password" required />
                            <label>Пароль</label>
                    </div>
                    <p className="password-error" id="login-error"></p>
                    <button type="submit" className="btn" id="login-btn">Войти</button>
                    <div className="login-register">
                        <p>Нет аккаунта? <a href="#" className="register-link" onClick={registerLinkClick}>Регистрация</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <h2>Регистрация</h2>
                <form onSubmit={onRegister}>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                        <input name='name' onChange={onChangeHandler} value={data.name} type="text" id="username" required />
                            <label>Имя пользователя</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="call"></ion-icon></span>
                        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" id="phone-number" required />
                        <label>Номер телефона</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input name='email' onChange={onChangeHandler} value={data.email} type="email" id="email" required />
                            <label>Почта</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input name='password' onChange={onChangeHandler} value={data.password} type="password" id="password-first" required />
                        <label>Пароль</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" id="password-second" required />
                        <label>Повторите пароль</label>
                    </div>
                    <p className="password-error" id="password-error"></p>
                    <button type="submit" className="btn" id="register-btn">Зарегистрироваться</button>
                    <div className="login-register">
                        <p>Есть аккаунт? <a href="#" className="login-link" onClick={loginLinkClick}>Войти</a></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default LoginSignup