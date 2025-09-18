import React from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthNavbar />
      <div className="landing-container">
        <div className="overlay">
          <div className="landing-content">
            <h1>Welcome to Cafe Love ☕</h1>
            <p>
              Experience the rich aroma, cozy vibes, and authentic taste of
              handcrafted coffee. At Cafe Love, every sip tells a story brewed
              with passion. 🌿
            </p>
            <button className="btn-cta" onClick={() => navigate("/signup")}>
              Join Us Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
