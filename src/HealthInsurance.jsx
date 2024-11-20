import React, { useEffect, useState } from "react";
import Doctor from './assets/doctor.png';
import Group from './assets/group.png';
import Appointment from './assets/appointment.png'
import InformationCard from "./InformationCard";
import SolutionStep from "./SolutionStep";
import {faCircleCheck,faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style/Insurance.css";

function HealthInsurance() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/");
  };

  const handlePlans = () => {
    navigate("/plans");
  };

  
  useEffect(() => {
    const handleScroll = () => {
      setGoUp(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    {/* Hero Section */}
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">Find your best Health Insurance Plan.</h2>
          <p className="text-description">Protect your health and finances with ease. Simplify your healthcare decisions and enjoy peace of mind with one-click security for you and your loved ones.</p>
          <button className="text-appointment-btn" type="button" onClick={handlePlans}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Explore Plans
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Patients</p>
            </div>
            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Doctors</p>
            </div>
            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>
      <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>

    {/* Info Section */}
    <div id="services" className="info-section">
    <div className="info-title-content">
      <h3 className="info-title">
        <span style={{color:'#100039'}}>What We Do</span>
      </h3>
      <p className="info-description">
        We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services tailored to your needs. Our platform allows you to connect with experienced online doctors who provide expert medical advice, issue online prescriptions, and offer quick refills whenever you require them.
      </p>
    </div>
    <div className="info-cards-content">
      <InformationCard title="Emergency Care" description="Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care." icon={faTruckMedical}/>
      <InformationCard title="Heart Disease" description="Our team of experienced cardiologists and medical experts use state-of-the-art technology to assess your cardiovascular health and design personalized treatment plans. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy heart and lead a fulfilling life." icon={faHeartPulse}/>
      <InformationCard title="Dental Care" description="Smile with confidence as our Dental Care services cater to all your oral health needs. Our skilled dentists provide a wide range of treatments, from routine check-ups and cleanings to cosmetic procedures and restorative treatments." icon={faTooth}/>
    </div>
  </div>

  {/* About Section */}
  <div className="about-section" id="about">
    <div className="about-image-content">
      <img src={Group} alt="Doctor Group" className="about-image1" />
    </div>
    <div className="about-text-content">
      <h3 className="about-title">
        <span style={{color:'#100039'}}>About Us</span>
      </h3>
      <p className="about-description">
        Welcome to Health Plus, your trusted partner for accessible and
        personalized healthcare. Our expert doctors offer online consultations
        and specialized services, prioritizing your well-being. Join us on
        this journey towards a healthier you.
      </p>
      <h4 className="about-text-title">Your Solutions</h4>
      <SolutionStep title="Make a Schedule" description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."/>
      <SolutionStep title="Get Your Solutions" description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."/>
      <div className="about-text-step">
      <p className="about-text-sTitle">
        <span>
          <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
          Choose a Specialist
        </span>
      </p>
      <p className="about-text-description">Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care.</p>
    </div>
    </div>
  </div>

  {/*Appointment Section */}
  <div className="ba-section">
      <div className="ba-image-content">
        <img src={Appointment} alt="Doctor Group" className="ba-image1" />
      </div>
      <div className="ba-text-content">
        <h3 className="ba-title">
          <span style={{color:'#100039'}}>Why Choose Health</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose Health Plus for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </p>
        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Best Professional Doctors
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Emergency Care
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> 24/7 Support Live Chat
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Enrollment Easy and Quick
        </p>
        <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>

  </div>
  );
}

export default HealthInsurance;
