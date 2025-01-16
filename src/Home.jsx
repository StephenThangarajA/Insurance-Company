import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import emailjs from '@emailjs/browser';
import { briefcaseOutline, trophyOutline, planetOutline, analyticsOutline } from 'ionicons/icons';
import { homeOutline, carSportOutline, airplaneOutline, fitnessOutline, happyOutline, medkitOutline } from 'ionicons/icons';
import './style/Home.css';
import Logo from './assets/logo.svg'
import HomeImage from './assets/home.jpg'
import ContactImage from './assets/contactus.jpg'
import Policy from './assets/policy.jpg'

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({fullName: '', email: '', service: '', lang: '', message: '',});
  const [errors, setErrors] = useState({});

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleGetStarted = () => {
    navigate("/login");
  };

  const handleHealthInsurance = () => {
    navigate("/health");
  };

  const handleTravelInsurance = () => {
    navigate("/travel");
  };

  const handleKidsCareInsurance = () => {
    navigate("/kidscare");
  };

  const handleLifeInsurance = () => {
    navigate("/life");
  };

  const handleHomeInsurance = () => {
    navigate("/home");
  };

  const handleCarInsurance = () => {
    navigate("/car");
  };

  const handleAccount = () => {
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.lang) newErrors.lang = 'Please select a language';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Appointment booked successfully!');
      setFormData({
        fullName: '',
        email: '',
        service: '',
        lang: '',
        message: '',
      });
      setErrors({});
    }
    emailjs.sendForm('service_ey7cdg4', 'template_tcgiffv', e.target, 'JYdhTNUvkruG1_Ct7')
  };

  return (
    <div>
      {/* NavBar */}
      <nav>
        <div className="nav__header">
          <div className="logo nav__logo">
            <img src={Logo} alt="InsureBazaar Logo" className="logo__image" />
            <a href="#">InsureBazaar</a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={handleNavToggle}>
            <span><i className={navOpen ? "ri-close-line" : "ri-menu-line"}></i></span>
          </div>
        </div>
        <div>
          <ul className={`nav__links ${navOpen ? "open" : ""}`} id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li onClick={handleAccount}><a href="#contact">Account</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="section__container header__container" id="home">
        <div className="header__image">
          <img src={HomeImage} alt="header" />
        </div>
        <div className="header__content">
          <h1>The Smart Way to <span>Insure Your World</span></h1>
          <p className="section__description">
            Join InsureBazaar to compare and secure the best insurance plans for your future. Protect what matters most today.
          </p>
          <div className="header__btn">
            <button className="btn" onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      </header>

      {/* About Us */}
      <section className="overline" id="about">
      <div className="container">
        <h2 className="about__title">About Us</h2>
        <img src={Policy} alt="Insurance Policies" title="Insurance policies" className="insurance-policies"/>
        <div className="overlines">
          <div className="row">
            <div className="col">
              <IonIcon icon={analyticsOutline} />
              <h2 className="overline-heading">Insurance Made Simple</h2>
              <p className="para-line white">We simplify insurance by offering clear, transparent policies that cater to your needs, from health to life and vehicle coverage.</p>
            </div>
            <div className="col">
              <IonIcon icon={briefcaseOutline} />
              <h2 className="overline-heading">Experienced Agents</h2>
              <p className="para-line white">Our experienced agents provide expert advice and personalized service to help you find the best insurance solutions.</p>
            </div>
            <div className="col">
              <IonIcon icon={trophyOutline} />
              <h2 className="overline-heading">Winning Agency</h2>
              <p className="para-line white">As a leading agency, we have a proven track record of delivering exceptional insurance solutions and customer satisfaction.</p>
            </div>
            <div className="col">
              <IonIcon icon={planetOutline} />
              <h2 className="overline-heading">Global Presence</h2>
              <p className="para-line white">With a strong global network, we provide insurance coverage across various countries and regions, ensuring worldwide protection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Services */}
      <h2 class="section__title" id="services">Services</h2>
      <section className="section__container banner__container">
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-bowl-fill"></i><IonIcon icon={medkitOutline} /></span>
          <h4>Health Insurance</h4>
          <p>Protect your health and finances with ease. Simplify your healthcare decisions and enjoy peace of mind with one-click security for you and your loved ones.</p>
          <button class="btn-hover" onClick={handleHealthInsurance}>Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-truck-fill"></i><IonIcon icon={fitnessOutline} /></span>
          <h4>Life Insurance</h4>
          <p>Ensure lasting security for you and your loved ones with straightforward life insurance providing peace of mind and protection from financial problems.</p>
          <button class="btn-hover" onClick={handleLifeInsurance}>Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-star-smile-fill"></i><IonIcon icon={airplaneOutline} /></span>
          <h4>Travel Insurance</h4>
          <p>Embark on every journey with confidence protect yourself and your adventures with easy, offering peace of mind wherever you go.</p>
          <button class="btn-hover" onClick={handleTravelInsurance}>Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-bowl-fill"></i><IonIcon icon={happyOutline} /></span>
          <h4>KidsCare Insurance</h4>
          <p>Safeguard your child's future with our KidCare insurance provides reliable protection and peace of mind, so you can focus on every precious moment.</p>
          <button class="btn-hover" onClick={handleKidsCareInsurance}>Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-truck-fill"></i><IonIcon icon={homeOutline} /></span>
          <h4>Home Insurance</h4>
          <p>Protect your home and everything in it with comprehensive coverage secure peace of mind for your family's safe haven, all in one simple step.</p>
          <button class="btn-hover" onClick={handleHomeInsurance}>Learn More</button>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-star-smile-fill"></i><IonIcon icon={carSportOutline} /></span>
          <h4>Car Insurance</h4>
          <p>Drive with confidence, knowing that your car is fully protected with trustworthy coverage designed to keep you safe on every mile of your journey.</p>
          <button class="btn-hover" onClick={handleCarInsurance}>Learn More</button>
        </div>
      </section>

      {/* Contact Us */}
      <div className="contact-form" id="contact">
        <div className="background">
          <img src={ContactImage} alt="Background" className="background-img" />
          <div className="filter"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="form-container">
                <h1 className="form-title">Contact Us</h1>
                <h2>Make an Appointment</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group-1">
                    <div className="form-group">
                      <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}/>
                      {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
                      {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="form-group-1">
                    <div className="form-group">
                      <select name="service" value={formData.service} onChange={handleChange} className={`form-select ${errors.service ? 'is-invalid' : ''}`}>
                        <option value="">Service *</option>
                        <option value="Service 1">Customer Support</option>
                        <option value="Service 2">Consultation</option>
                        <option value="Service 3">Raise a Complaint</option>
                      </select>
                      {errors.service && <div className="error-message">{errors.service}</div>}
                    </div>
                    <div className="form-group">
                      <select name="lang" value={formData.lang} onChange={handleChange} className={`form-select ${errors.lang ? 'is-invalid' : ''}`}>
                        <option value="">Language *</option>
                        <option value="Lang 1">English</option>
                        <option value="Lang 2">Hindi</option>
                        <option value="Lang 3">Tamil</option>
                      </select>
                      {errors.lang && <div className="error-message">{errors.lang}</div>}
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} className={`form-control ${errors.message ? 'is-invalid' : ''}`}></textarea>
                    {errors.message && <div className="error-message">{errors.message}</div>}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Book Appointment</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="logo footer__logo">
              <a href="#" style={{color:'#FFD700'}}>InsureBazaar</a>
            </div>
            <p className="section__description">
                Enhance your insurance journey with InsureBazaar, where every plan is tailored to your needs, backed by comprehensive data and expert insights.
            </p>
            <div className="social">
              <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
              <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
              <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul className="footer__links">
              <li><a href="#">Health Insurance</a></li>
              <li><a href="#">Travel Insurance</a></li>
              <li><a href="#">KidCare Insurance</a></li>
              <li><a href="#">Home Insurance</a></li>
              <li><a href="#">Life Insurance</a></li>
              <li><a href="#">Car Insurance</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Information</h4>
            <ul className="footer__links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul className="footer__links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2024 InsureBazaar. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;