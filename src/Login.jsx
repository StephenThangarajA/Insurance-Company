import React, { useState } from 'react';
import LoginImg from './assets/login.svg'
import BigLogoImg from './assets/biglogo.svg'
import './style/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={LoginImg} alt="login-img" />
        </div>
        <div className="login__forms">
          {isLogin ? (
            <form action="" className="login__registre" id="login-in">
              <div className="login__logo">
                <img src={BigLogoImg}></img>
              </div>
              <h1 className="login__title">Sign In</h1>
              <div className="login__box">
                <i className="bx bx-user login__icon"></i>
                <input type="text" placeholder="Username" className="login__input" />
              </div>
              <div className="login__box">
                <i className="bx bx-lock-alt login__icon"></i>
                <input type="password" placeholder="Password" className="login__input" />
              </div>
              <a href="#" className="login__forgot">Forgot password?</a>
              <a href="#" className="login__button">Sign In</a>
              <div>
                <span className="login__account">Don't have an Account? </span>
                <span className="login__signin" onClick={toggleForm}> Sign Up</span>
              </div>
            </form>
          ) : (
            <form action="" className="login__create" id="login-up">
              <h1 className="login__title">Create Account</h1>
              <div className="login__box">
                <i className="bx bx-user login__icon"></i>
                <input type="text" placeholder="Username" className="login__input" />
              </div>
              <div className="login__box">
                <i className="bx bx-at login__icon"></i>
                <input type="text" placeholder="Email" className="login__input" />
              </div>
              <div className="login__box">
                <i className="bx bx-lock-alt login__icon"></i>
                <input type="password" placeholder="Password" className="login__input" />
              </div>
              <a href="#" className="login__button">Sign Up</a>
              <div>
                <span className="login__account">Already have an Account? </span>
                <span className="login__signup" onClick={toggleForm}> Sign In</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;