import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "./assets/login.svg";
import BigLogoImg from "./assets/biglogo.svg";
import "./style/Login.css";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { auth } from "./firebase";

const db = getFirestore();

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", username: "" });
  };

  const validateForm = () => {
    const { email, password, username } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("Email is required.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Enter a valid email.");
      return false;
    }
    if (!password) {
      alert("Password is required.");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }
    if (!isLogin && (!username || username.length < 3)) {
      alert("Username must be at least 3 characters.");
      return false;
    }
    return true;
  };

  const handlePasswordReset = () => {
    if (!formData.email) {
      alert("Please enter your email to reset your password.");
      return;
    }
    sendPasswordResetEmail(auth, formData.email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        console.error("Error resetting password:", error.message);
        alert(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isLogin) {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            console.log("User signed in:", userCredential.user);
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.error(errorCode, errorMessage);
          });
      } else {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then(async (userCredential) => {
            console.log("User signed up:", userCredential.user);
            const userRef = doc(db, "users", userCredential.user.uid);
            await setDoc(userRef, {
              username: formData.username,
              email: formData.email,
              createdAt: new Date().toISOString(),
            });
            console.log("User details saved in Firestore");
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.error(errorCode, errorMessage);
          });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={LoginImg} alt="login-img" />
        </div>
        <div className="login__forms">
          {isLogin ? (
            <form onSubmit={handleSubmit} className="login__registre" id="login-in">
              <div className="login__logo">
                <img src={BigLogoImg} alt="logo" />
              </div>
              <h1 className="login__title">Sign In</h1>
              <div className="login__box">
                <i className="bx bx-at login__icon"></i>
                <input type="text" name="email" id="email" placeholder="Email" className="login__input" value={formData.email} onChange={handleChange}/>
              </div>
              <div className="login__box">
                <i className="bx bx-lock-alt login__icon"></i>
                <input type="password" name="password" placeholder="Password" className="login__input" value={formData.password} onChange={handleChange}/>
              </div>
              <a href="#" className="login__forgot" onClick={handlePasswordReset}>Forgot password?</a>
              <button type="submit" className="login__button">Sign In</button>
              <div>
                <span className="login__account">Don't have an Account? </span>
                <span className="login__signin" onClick={toggleForm}> Sign Up</span>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="login__create" id="login-up">
              <div className="login__logo">
                <img src={BigLogoImg} alt="logo" />
              </div>
              <h1 className="login__title">Create Account</h1>
              <div className="login__box">
                <i className="bx bx-user login__icon"></i>
                <input type="text" name="username" placeholder="Username" className="login__input" value={formData.username} onChange={handleChange}/>
              </div>
              <div className="login__box">
                <i className="bx bx-at login__icon"></i>
                <input type="text" name="email" placeholder="Email" className="login__input" value={formData.email} onChange={handleChange}/>
              </div>
              <div className="login__box">
                <i className="bx bx-lock-alt login__icon"></i>
                <input type="password" name="password" placeholder="Password" className="login__input" value={formData.password} onChange={handleChange}/>
              </div>
              <button type="submit" className="login__button">Sign Up</button>
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
