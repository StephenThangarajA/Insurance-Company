import React, { useEffect, useState } from "react";
import Doctor from './assets/doctor.png';
import Group from './assets/group.png';
import Appointment from './assets/appointment.png';
import InformationCard from "./InformationCard";
import SolutionStep from "./SolutionStep";
import { faCircleCheck, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faUserShield, faHeartbeat, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style/Insurance.css";

function LifeInsurance() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/");
  };

  const handleBookPlanClick = () => {
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
            <p className="text-headline">💼 Secure Your Future</p>
            <h2 className="text-title">Find Your Ideal Life Insurance Plan</h2>
            <p className="text-description">
              Protect your loved ones and secure their future with a life insurance plan that provides peace of mind. Explore our flexible and reliable options for your long-term security.
            </p>
            <button className="text-appointment-btn" type="button" onClick={handleBookPlanClick}>
              <FontAwesomeIcon icon={faCalendarCheck} /> Explore Plans
            </button>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>500k+</p>
                <p>Policies Issued</p>
              </div>
              <div className="text-stats-container">
                <p>20+</p>
                <p>Years of Expertise</p>
              </div>
              <div className="text-stats-container">
                <p>100+</p>
                <p>Countries Covered</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <img className="hero-image1" src={Doctor} alt="Life Insurance" />
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
            <span style={{ color: '#100039' }}>Our Services</span>
          </h3>
          <p className="info-description">
            Life insurance is essential to secure your family's future and provide financial protection. Explore our range of customizable plans that cater to your specific needs.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard title="Term Life Insurance" description="Our Term Life Insurance offers affordable coverage for a specified period, ensuring your family’s financial stability during critical years." icon={faUserShield} />
          <InformationCard title="Whole Life Insurance" description="Whole Life Insurance provides lifelong coverage and builds cash value over time, ensuring long-term protection and peace of mind." icon={faShieldAlt} />
          <InformationCard title="Health Coverage" description="Add health coverage to your life insurance plan, offering benefits for medical expenses along with life protection." icon={faHeartbeat} />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img src={Group} alt="Life Insurance Group" className="about-image1" />
        </div>
        <div className="about-text-content">
          <h3 className="about-title">
            <span style={{ color: '#100039' }}>About Us</span>
          </h3>
          <p className="about-description">
            Welcome to LifeSecure, your trusted partner in securing the future of your loved ones. With over 20 years of experience, we provide reliable life insurance plans that offer financial protection and peace of mind.
          </p>
          <h4 className="about-text-title">Our Process</h4>
          <SolutionStep title="Choose Your Plan" description="Select the life insurance plan that fits your needs. Whether it’s term life, whole life, or additional coverage options, we have the right solutions for you." />
          <SolutionStep title="Get Covered" description="Once you choose a plan, enjoy the benefits of financial protection. Your policy will provide security for your family in times of need." />
          <div className="about-text-step">
            <p className="about-text-sTitle">
              <span>
                <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} /> Life Protection for Your Loved Ones
              </span>
            </p>
            <p className="about-text-description">
              Ensure a bright future for your loved ones, no matter what life brings. Our life insurance plans offer comprehensive coverage for a secure tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="ba-section">
        <div className="ba-image-content">
          <img src={Appointment} alt="Life Insurance Appointment" className="ba-image1" />
        </div>
        <div className="ba-text-content">
          <h3 className="ba-title">
            <span style={{ color: '#100039' }}>Why Choose LifeSecure</span>
          </h3>
          <p className="ba-description">
            Discover why LifeSecure is the best choice for protecting your family's future. Our life insurance plans provide comprehensive coverage with unmatched flexibility.
          </p>
          <p className="ba-checks ba-check-first">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Trusted by Families Worldwide
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Flexible & Customizable Plans
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> 24/7 Customer Support
          </p>
          <p className="ba-checks ba-check-last">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Guaranteed Payouts
          </p>
          <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default LifeInsurance;