import React, { useEffect, useState } from "react";
import Agent from './assets/agent2.png';
import Group from './assets/group2.png';
import Appointment from './assets/appointment2.png'
import InformationCard from "./InformationCard";
import SolutionStep from "./SolutionStep";
import { faCircleCheck, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPlane, faShieldAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style/Insurance.css";

function TravelInsurance() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookPlanClick = () => {
    navigate("/plans");
  };

  const handleBookAppointmentClick = () => {
    navigate("/");
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
            <p className="text-headline">✈️ Travel with Confidence</p>
            <h2 className="text-title">Find Your Best Travel Insurance Plan</h2>
            <p className="text-description">
              Protect your journey with comprehensive travel insurance. 
              Whether you're traveling for leisure or business, ensure peace of mind with plans that cover your every need.
            </p>
            <button className="text-appointment-btn" type="button" onClick={handleBookPlanClick}>
              <FontAwesomeIcon icon={faCalendarCheck} /> Explore Plans
            </button>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>200k+</p>
                <p>Happy Travelers</p>
              </div>
              <div className="text-stats-container">
                <p>100+</p>
                <p>Global Destinations</p>
              </div>
              <div className="text-stats-container">
                <p>20+</p>
                <p>Years of Trust</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <img className="hero-image1" src={Agent} alt="Travel" />
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
            We provide top-notch travel insurance solutions tailored to meet your needs. 
            Stay covered for unexpected events like trip cancellations, medical emergencies, or lost luggage.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard title="Global Coverage" description="Travel with peace of mind knowing you're covered anywhere in the world. Our plans offer extensive coverage for international and domestic trips." icon={faGlobe} />
          <InformationCard title="Medical Emergencies" description="Access comprehensive medical coverage while traveling. From minor ailments to emergency evacuations, we're here for you." icon={faShieldAlt} />
          <InformationCard title="Trip Protection" description="Stay worry-free with protection against trip cancellations, delays, and lost luggage. We ensure your plans remain stress-free." icon={faPlane} />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img src={Group} alt="Travel Group" className="about-image1" />
        </div>
        <div className="about-text-content">
          <h3 className="about-title">
            <span style={{ color: '#100039' }}>About Us</span>
          </h3>
          <p className="about-description">
            Welcome to Travel Plus, your trusted partner in travel safety. 
            Our mission is to ensure that every journey you take is protected and stress-free.
          </p>
          <h4 className="about-text-title">Our Process</h4>
          <SolutionStep title="Choose a Plan" description="Select the plan that best suits your travel needs, whether for leisure, business, or adventure." />
          <SolutionStep title="Get Covered" description="Enjoy comprehensive coverage for your trip, with 24/7 support and seamless claims processing." />
          <div className="about-text-step">
            <p className="about-text-sTitle">
              <span>
                <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} /> Travel Stress-Free
              </span>
            </p>
            <p className="about-text-description">
              Focus on making memories while we take care of your travel risks. 
              Our dedicated team ensures a hassle-free experience.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="ba-section">
        <div className="ba-image-content">
          <img src={Appointment} alt="Travel Insurance" className="ba-image1" />
        </div>
        <div className="ba-text-content">
          <h3 className="ba-title">
            <span style={{ color: '#100039' }}>Why Choose Us</span>
          </h3>
          <p className="ba-description">
            Discover why millions trust Travel Plus for their travel insurance needs. 
            Enjoy expert assistance, comprehensive coverage, and a seamless experience.
          </p>
          <p className="ba-checks ba-check-first">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Global Network of Support
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Hassle-Free Claims
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> 24/7 Emergency Assistance
          </p>
          <p className="ba-checks ba-check-last">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Affordable and Flexible Plans
          </p>
          <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelInsurance;
