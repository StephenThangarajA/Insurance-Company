import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/Plans.css";
import Bajaj from "./assets/ins-logo1.webp";
import Royal from "./assets/ins-logo2.svg";
import HDFC from "./assets/ins-logo3.png";
import ICICI from "./assets/ins-logo4.png";
import StarLife from './assets/ins-logo5.webp';
import LIC from './assets/ins-log06.png';

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="back-button" style={{color:'#FFD700'}} onClick={handleBack}>
      &lt; Back
    </div>
  );
};

const InsuranceCard = ({ company, policyName, policyPrice }) => {
  const navigate = useNavigate();
  const handleProceed = () => {
    navigate("/plandetails");
  };

  return (
    <div className="insurance-card">
      <div className="card-header">
        <div className="company-logo">
          <img src={company.logo} alt={`${company.name} Logo`} />
        </div>
        <div className="company-details">
          <h4 className="company-name">{company.name}</h4>
          <p className="policy-name">{policyName}</p>
        </div>
      </div>
      <div className="card-footer">
        <h2 className="card-price">{policyPrice}</h2>
        <div className="card-actions">
          <button className="proceed-button" onClick={handleProceed}>Proceed &gt;</button>
        </div>
      </div>
    </div>
  );
};

const medicalPlans = [
  {
    company: {
      name: "Bajaj Allianz",
      logo: Bajaj,
    },
    policyName: "Health Optima",
    policyPrice: "₹1,950",
  },
  {
    company: {
      name: "Royal Sundaram",
      logo: Royal,
    },
    policyName: "ReAssure Plan",
    policyPrice: "₹3660",
  },
  {
    company: {
      name: "HDFC Ergo",
      logo: HDFC,
    },
    policyName: "Optima Restore",
    policyPrice: "₹2470",
  },
  {
    company: {
      name: "ICICI",
      logo: ICICI,
    },
    policyName: "Care Plus",
    policyPrice: "₹1,250",
  },
  {
    company: {
      name: "Star Life Insurance",
      logo: StarLife,
    },
    policyName: "Health Shield",
    policyPrice: "₹750",
  },
  {
    company: {
      name: "LIC",
      logo: LIC,
    },
    policyName: "Health Safeguard",
    policyPrice: "₹2,150",
  },
];

const Plans = () => {
  return (
    <div className="plans-page">
        <BackButton />
        <h2 className="page-title">Insurance Plans</h2>
        <div className="insurance-list">
        {medicalPlans.map((plan, index) => (
            <InsuranceCard key={index} {...plan} />
        ))}
        </div>
    </div>
  );
};

export default Plans;