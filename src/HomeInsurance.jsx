import React, { useEffect, useState } from "react";
import Agent from './assets/agent2.png';
import Group from './assets/group2.png';
import Appointment from './assets/appointment2.png';
import InformationCard from "./InformationCard";
import SolutionStep from "./SolutionStep";
import { faCircleCheck, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHome, faShieldAlt, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style/Insurance.css";

function HomeInsurance() {
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
            <p className="text-headline">🏠 Protect Your Home</p>
            <h2 className="text-title">Get Your Home Insurance Plan Today</h2>
            <p className="text-description">
              Ensure your home and belongings are protected with our comprehensive home insurance plans. From property damage to liability, we cover it all.
            </p>
            <button className="text-appointment-btn" type="button" onClick={handlePlans}>
              <FontAwesomeIcon icon={faCalendarCheck} /> Explore Plans
            </button>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>1M+</p>
                <p>Homes Insured</p>
              </div>
              <div className="text-stats-container">
                <p>50+</p>
                <p>Insurance Agents</p>
              </div>
              <div className="text-stats-container">
                <p>20+</p>
                <p>Years of Service</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <img className="hero-image1" src={Agent} alt="Home Insurance" />
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
            We offer a variety of home insurance options to ensure that your property and valuables are protected from unexpected events like fire, theft, or natural disasters.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard title="Property Damage" description="Our home insurance plans cover the cost of repairs or replacement for damage caused by fire, flooding, storms, or vandalism." icon={faHome} />
          <InformationCard title="Liability Coverage" description="Liability coverage protects you in case someone gets injured on your property, covering medical expenses and legal fees." icon={faShieldAlt} />
          <InformationCard title="Theft Protection" description="In case of theft, our home insurance plans ensure you’re reimbursed for stolen property, from electronics to valuable belongings." icon={faTools} />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img src={Group} alt="Home Insurance Group" className="about-image1" />
        </div>
        <div className="about-text-content">
          <h3 className="about-title">
            <span style={{ color: '#100039' }}>About Us</span>
          </h3>
          <p className="about-description">
            Welcome to SafeHome, your trusted partner for comprehensive home insurance. With years of experience, we provide homeowners with peace of mind knowing their property is fully covered.
          </p>
          <h4 className="about-text-title">Our Process</h4>
          <SolutionStep title="Get a Quote" description="Receive a customized quote based on your needs, including coverage options like property damage, liability, and more." />
          <SolutionStep title="Choose Coverage" description="Select the best coverage for your home, ensuring you’re protected against any unforeseen circumstances." />
          <div className="about-text-step">
            <p className="about-text-sTitle">
              <span>
                <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} /> Protect Your Home
              </span>
            </p>
            <p className="about-text-description">
              Safeguard your home and belongings today with a comprehensive home insurance plan from SafeHome. We ensure that you're covered no matter what happens.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="ba-section">
        <div className="ba-image-content">
          <img src={Appointment} alt="Home Insurance Appointment" className="ba-image1" />
        </div>
        <div className="ba-text-content">
          <h3 className="ba-title">
            <span style={{ color: '#100039' }}>Why Choose SafeHome</span>
          </h3>
          <p className="ba-description">
            Discover why SafeHome is the ideal choice for your home insurance needs. Our plans offer comprehensive coverage for both your home and your peace of mind.
          </p>
          <p className="ba-checks ba-check-first">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Reliable Coverage for Your Home
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Affordable Premiums
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Fast Claims Process
          </p>
          <p className="ba-checks ba-check-last">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> 24/7 Customer Support
          </p>
          <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeInsurance;
