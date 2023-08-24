import React from "react";
import Mobile from "../../../Assets/Mobile.svg";
import Divider from "../../../Assets/divider-line.svg";
import "./index.css";

function NavBar({ onMobileViewToggle }) {
  return (
    <div className="navbar-container-wrapper">
      <div className="navbar-content-block-1">
        <div className="navbar-content-1">Assessments</div>

        <div className="divider-line">
          <img src={Divider} alt="SVG" />
        </div>

        <div className="navbar-content-2">
          <p>My Assessments</p>
        </div>
      </div>
      <div className="navbar-content">
        <button className="mobile-view-btn" onClick={onMobileViewToggle}>
          <img src={Mobile} alt="SVG" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
