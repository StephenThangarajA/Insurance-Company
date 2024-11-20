import React, { useEffect, useState } from "react";
import Agent from './assets/agent2.png';
import Group from './assets/group2.png';
import Appointment from './assets/appointment2.png';
import InformationCard from "./InformationCard";
import SolutionStep from "./SolutionStep";
import { faCircleCheck, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCar, faShieldAlt, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style/Insurance.css";

function CarInsurance() {
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
            <p className="text-headline">🚗 Protect Your Ride</p>
            <h2 className="text-title">Get the Best Car Insurance Plan</h2>
            <p className="text-description">
              Drive with peace of mind. Our car insurance plans provide comprehensive coverage for accidents, theft, and more.
            </p>
            <button className="text-appointment-btn" type="button" onClick={handlePlans}>
              <FontAwesomeIcon icon={faCalendarCheck} /> Explore Plans
            </button>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>500k+</p>
                <p>Cars Insured</p>
              </div>
              <div className="text-stats-container">
                <p>100+</p>
                <p>Insurance Agents</p>
              </div>
              <div className="text-stats-container">
                <p>15+</p>
                <p>Years of Service</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <img className="hero-image1" src={Agent} alt="Car Insurance" />
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
            <span style={{ color: '#100039' }}>Our Car Insurance Services</span>
          </h3>
          <p className="info-description">
            We provide a range of car insurance options, offering coverage for accidents, theft, and vehicle damage, so you can drive with confidence and security.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard title="Accident Coverage" description="Our accident coverage ensures you're protected in case of an accident, covering vehicle repairs, medical bills, and more." icon={faCar} />
          <InformationCard title="Theft Protection" description="Get peace of mind with theft protection, reimbursing you for your car if it's stolen or damaged beyond repair." icon={faShieldAlt} />
          <InformationCard title="Roadside Assistance" description="Need help on the road? Our roadside assistance service is available 24/7 to help with towing, flat tires, and other emergencies." icon={faTools} />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img src={Group} alt="Car Insurance Group" className="about-image1" />
        </div>
        <div className="about-text-content">
          <h3 className="about-title">
            <span style={{ color: '#100039' }}>About Us</span>
          </h3>
          <p className="about-description">
            At DriveSafe, we offer flexible and affordable car insurance plans designed to meet your needs. Our coverage options ensure you're protected on and off the road.
          </p>
          <h4 className="about-text-title">How It Works</h4>
          <SolutionStep title="Get a Quote" description="Enter your car details and get a customized quote with flexible coverage options." />
          <SolutionStep title="Choose Coverage" description="Select the coverage that best fits your needs, from accident protection to roadside assistance." />
          <div className="about-text-step">
            <p className="about-text-sTitle">
              <span>
                <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} /> Protect Your Car
              </span>
            </p>
            <p className="about-text-description">
              With DriveSafe, ensure your car is covered for every situation, whether it's an accident, theft, or emergency breakdown.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="ba-section">
        <div className="ba-image-content">
          <img src={Appointment} alt="Car Insurance Appointment" className="ba-image1" />
        </div>
        <div className="ba-text-content">
          <h3 className="ba-title">
            <span style={{ color: '#100039' }}>Why Choose DriveSafe</span>
          </h3>
          <p className="ba-description">
            Discover why DriveSafe is the top choice for car insurance. We offer flexible plans, fast claims, and the best protection for you and your car.
          </p>
          <p className="ba-checks ba-check-first">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Comprehensive Coverage for Your Car
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> 24/7 Roadside Assistance
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Fast Claims Process
          </p>
          <p className="ba-checks ba-check-last">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Affordable Rates
          </p>
          <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarInsurance;
