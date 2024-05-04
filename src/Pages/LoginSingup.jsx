import React, {useState} from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
    /*const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const loginButton = document.getElementById("login-btn");
    const login = document.getElementById("login");
    const password = document.getElementById("password");
    const registerButton = document.getElementById("register-btn");
    const passwordFirst = document.getElementById("password-first");
    const passwordSecond = document.getElementById("password-second");
    const userName = document.getElementById("username");
    const email = document.getElementById("email");
    const errorContainer = document.getElementById("password-error");
    const loginContainer = document.getElementById("login-error");*/

    localStorage.setItem('ip', '192.168.1.103');
    const ip = localStorage.getItem('ip');

    const [isActive, setIsActive] = useState(false);

    const registerLinkClick = () => {
        setIsActive(true);
    };

    const loginLinkClick = () => {
        setIsActive(false);
    };

    /*
    loginButton.addEventListener('click', () => {
        window.location.href='main.html';
        const loginValue = login.value;
        const passwordValue = password.value;

        const loginUrl = `http://${ip}:5285/Home/Login?login=${encodeURIComponent(loginValue)}&password=${encodeURIComponent(passwordValue)}`;

        fetch(loginUrl, {
            method: 'GET'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Ошибка при входе');
                }
            })
            .then(data => {
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('token', data.token);
                window.location.href='main.html';
            })
            .catch(error => {
                console.error('Ошибка:', error);
                loginContainer.textContent = "Произошла ошибка";
            });
    });

    registerButton.addEventListener('click', () => {
        const passwordFirstValue = passwordFirst.value;
        const passwordSecondValue = passwordSecond.value;
        const userNameValue = userName.value;
        const emailValue = email.value;

        if(passwordFirstValue === "" || userNameValue === "" || emailValue === ""){
            errorContainer.textContent = "Заполните все поля";
        }
        else if (passwordFirstValue === passwordSecondValue) {
            const formData = new FormData();
            formData.append('login', userNameValue);
            formData.append('email', emailValue);
            formData.append('password', passwordFirstValue);
            fetch('http://'+ ip +':5285/Home/Register', {
                method: 'PUT',
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        errorContainer.textContent = "Регистрация прошла успешно";
                    } else {
                        errorContainer.textContent = "Ошибка при регистрации";
                    }
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    errorContainer.textContent = "Произошла ошибка";
                });
        }
        else {
            errorContainer.textContent = "Пароли не совпадают";
        }
    });*/


    return(
        <div className={`wrapper ${isActive ? 'active' : ''}`}>
            <div className="form-box login">
                <h2>Войти</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                        <input type="text" id="login" required />
                            <label>Логин</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" id="password" required />
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
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                        <input type="text" id="username" required />
                            <label>Имя пользователя</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="call"></ion-icon></span>
                        <input type="text" id="phone-number" required />
                        <label>Номер телефона</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" id="email" required />
                            <label>Почта</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" id="password-first" required />
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
    );
}

export default LoginSignup