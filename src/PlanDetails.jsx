import React, { useEffect, useState } from "react";
import Doctor from "./assets/doctor.png";
import Agent from "./assets/ins7.png";
import Logo from "./assets/ins-logo1.webp";
import "./style/PlanDetails.css";
import emailjs from "@emailjs/browser";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function PlanDetails() {
  const [goUp, setGoUp] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const handleScroll = () => setGoUp(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["fullName", "dob", "email", "mobile", "gender", "occupation", "idType", "idNumber", "issuedAuthority", "identityDocument",];
    const missingFields = requiredFields.filter(
      (field) =>
        !formData[field] ||
        (field === "identityDocument" && !formData.identityDocument?.size)
    );
    if (missingFields.length > 0) {
      alert("Please fill in all required fields and upload an identity document.");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    try {
      const documentData = { ...formData };
      delete documentData.identityDocument;
      const docRef = await addDoc(collection(db, "registrations"), documentData);
      console.log("Document written with ID: ", docRef.id);
      await emailjs.sendForm("service_ey7cdg4", "template_miuitwb", e.target, "JYdhTNUvkruG1_Ct7");
      alert("Submission successful!");
      window.location.href = "/";
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="plan-details-container">
      {/* Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        &lt; Back
      </div>

      {/* Hero Section */}
      <div className="section-container">
        <div className="hero-section">
          <div className="text-section">
            <div className="logo-section">
              <img src={Logo} alt="Logo" className="hero-logo" />
            </div>
            <h2 className="text-title">Bajaj Allianz - Health Optima</h2>
            <p className="text-headline">Health Optima by Bajaj Allianz offers coverage for hospitalization, cashless treatments, and day-care procedures, ensuring medical financial security.</p>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>145k+</p>
                <p>Customers</p>
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
      </div>

      {/* Registration Form */}
      <div className="section-container">
        <div className="left-section">
          <img src={Agent} alt="Agent" className="hero-image" />
        </div>
        <div className="right-section">
          <div className="container">
            <header>Registration</header>
            <form onSubmit={handleSubmit}>
              <div className="details personal">
                <span className="title">Personal Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName || ""} onChange={handleInputChange} placeholder="Enter your name" required/>
                  </div>
                  <div className="input-field">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob || ""} onChange={handleInputChange} required/>
                  </div>
                  <div className="input-field">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email || ""} onChange={handleInputChange} placeholder="Enter your email" required/>
                  </div>
                  <div className="input-field">
                    <label>Mobile Number</label>
                    <input type="number" name="mobile" value={formData.mobile || ""} onChange={handleInputChange} placeholder="Enter mobile number" required/>
                  </div>
                  <div className="input-field">
                    <label>Gender</label>
                    <select name="gender" value={formData.gender || ""} onChange={handleInputChange} required>
                      <option value="" disabled>Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>Occupation</label>
                    <input type="text" name="occupation" value={formData.occupation || ""} onChange={handleInputChange} placeholder="Enter your occupation" required/>
                  </div>
                </div>
              </div>
              <div className="details ID">
                <span className="title">Identity Details</span>
                <div className="fields">
                  <div className="input-field-file" style={{marginBottom: '10px'}}>
                    <label htmlFor="identityDocument" style={{ color: '#18181b'}}>Identity Document</label><br></br>
                    <input type="file" style={{ border: '1px solid black', borderRadius: '4px', padding: '8px' }} id="identityDocument" name="identityDocument" accept=".pdf, .jpg, .jpeg, .png" onChange={handleInputChange} required/>
                  </div>
                  <div className="fields">
                  <div className="input-field">
                    <label>ID Type</label>
                    <input type="text" name="idType" value={formData.idType || ""} onChange={handleInputChange} placeholder="Enter ID type" required/>
                  </div>
                  <div className="input-field">
                    <label>ID Number</label>
                    <input type="number" name="idNumber" value={formData.idNumber || ""} onChange={handleInputChange} placeholder="Enter ID number" required/>
                  </div>
                  <div className="input-field">
                    <label>Issued Authority</label>
                    <input type="text" name="issuedAuthority" value={formData.issuedAuthority || ""} onChange={handleInputChange} placeholder="Enter issued authority" required/>
                  </div>
                  </div>
                </div>
              </div>
              <div className="input-field checkbox-container">
                <label>
                  <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms || false} onChange={handleInputChange}/>
                  I agree to all terms and conditions
                </label>
              </div>
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanDetails;