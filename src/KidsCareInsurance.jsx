import React, { useEffect, useState } from "react";
import Doctor from './assets/doctor.png';
import Group from './assets/group.png';
import Appointment from './assets/appointment.png';
import InformationCard from "./InformationCard";
import SolutionStep from "./SolutionStep";
import { faCircleCheck, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat, faChild, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style/Insurance.css";

function KidsCareInsurance() {
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
            <p className="text-headline">👶 Kids' Health Comes First</p>
            <h2 className="text-title">Find Your Best KidsCare Insurance Plan</h2>
            <p className="text-description">
              Protect your little ones with the best pediatric care. Our KidsCare insurance plans offer extensive coverage for children's health, ensuring their well-being with expert care.
            </p>
            <button className="text-appointment-btn" type="button" onClick={handlePlans}>
              <FontAwesomeIcon icon={faCalendarCheck} /> Explore Plans
            </button>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>150k+</p>
                <p>Happy Kids Insured</p>
              </div>
              <div className="text-stats-container">
                <p>30+</p>
                <p>Child Specialists</p>
              </div>
              <div className="text-stats-container">
                <p>15+</p>
                <p>Years of Trust</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <img className="hero-image1" src={Doctor} alt="KidsCare" />
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
            We provide the best healthcare coverage for your kids. From regular check-ups to emergency care, our KidsCare plans are designed to give your children the health coverage they deserve.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard title="Pediatric Care" description="Our pediatric care service is designed to address your child's health needs from infancy to adolescence. We ensure regular check-ups, vaccinations, and treatment for common childhood illnesses." icon={faChild} />
          <InformationCard title="Emergency Medical Assistance" description="Whether it's an accident, illness, or other urgent care needs, our emergency medical assistance is available to your child 24/7, ensuring they receive prompt care when it matters most." icon={faShieldAlt} />
          <InformationCard title="Preventive Care & Vaccinations" description="Prevention is better than cure. Our KidsCare insurance offers coverage for vaccinations, wellness check-ups, and screenings to keep your child healthy and safe." icon={faHeartbeat} />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img src={Group} alt="KidsCare Group" className="about-image1" />
        </div>
        <div className="about-text-content">
          <h3 className="about-title">
            <span style={{ color: '#100039' }}>About Us</span>
          </h3>
          <p className="about-description">
            Welcome to KidsCare, your trusted partner in children's healthcare. We understand that your child's health is your top priority, and we are here to provide the best coverage for their medical needs.
          </p>
          <h4 className="about-text-title">Our Process</h4>
          <SolutionStep title="Choose a Plan" description="Select a KidsCare insurance plan that suits your child’s health needs. We offer flexible options to ensure comprehensive coverage for their care." />
          <SolutionStep title="Get Covered" description="Once you've selected a plan, your child will be fully covered for medical check-ups, emergencies, and preventive care." />
          <div className="about-text-step">
            <p className="about-text-sTitle">
              <span>
                <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} /> Caring for Your Little One
              </span>
            </p>
            <p className="about-text-description">
              Ensure your child gets the care they need, from routine visits to emergency situations, with KidsCare Insurance.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="ba-section">
        <div className="ba-image-content">
          <img src={Appointment} alt="KidsCare Appointment" className="ba-image1" />
        </div>
        <div className="ba-text-content">
          <h3 className="ba-title">
            <span style={{ color: '#100039' }}>Why Choose KidsCare</span>
          </h3>
          <p className="ba-description">
            Discover why parents trust KidsCare Insurance to keep their children healthy and safe. From pediatric expertise to 24/7 support, we're here for every step of your child's health journey.
          </p>
          <p className="ba-checks ba-check-first">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Trusted Pediatric Experts
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> 24/7 Emergency Assistance
          </p>
          <p className="ba-checks">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Comprehensive Child Wellness Coverage
          </p>
          <p className="ba-checks ba-check-last">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FFD700" }} /> Affordable & Flexible Plans
          </p>
          <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default KidsCareInsurance;
