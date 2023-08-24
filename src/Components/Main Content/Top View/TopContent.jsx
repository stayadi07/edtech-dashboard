import React from "react";
import Total_Icon from "../../../Assets/Total-Assessments.svg";
import Candidates from "../../../Assets/Candidates.svg";
import Vector from "../../../Assets/Vector251.svg";
import Divider from "../../../Assets/divider-line.svg";
import Email from "../../../Assets/Email.svg";
import Purpose from "../../../Assets/Purpose.svg";

import "./top-content.css";

function TopContent() {
  return (
    <div className="top-content-wrapper">
      <div className="top-content-header">Assessments Overview</div>

      <div className="top-content-items">
        <div className="top-content-total-assessments-wrapper">
          <p className="top-content-header-values">Total Assessments</p>

          <div className="icon-and-values">
            <img className="total-icon" src={Total_Icon} alt="SVG" />
            <span className="numerical-value">34</span>
          </div>
        </div>

        <img className="vector-image" src={Vector} alt="" />

        <div className="top-content-candidates-wrapper">
          <p className="top-content-header-values">Candidates</p>
          <div className="icon-and-values">
            <img src={Candidates} alt="SVG" />
            <div className="numerical-text">
              <span className="numerical-value">
                11,145 <span className="candidates-small-values">+89</span>
              </span>
              <div className="total-candidates-text">Total Candidate</div>
            </div>
            <img src={Divider} alt="" />
            <div className="numerical-text">
              <span className="numerical-value">
                1,14 <span className="candidates-small-values">+89</span>
              </span>

              <div className="total-candidates-text">Who Attempted</div>
            </div>
          </div>
        </div>
        <img className="vector-image" src={Vector} alt="" />

        <div className="top-content-candidates-source">
          <p className="top-content-header-values">Candidates Source</p>
          <div className="icon-and-values">
            <img src={Email} alt="SVG" />
            <div className="numerical-text">
              <span className="numerical-value">
                11,000 <span className="candidates-small-values">+89</span>
              </span>
              <div className="total-candidates-text">E-mail</div>
            </div>
            <img src={Divider} alt="" />
            <div className="numerical-text">
              <span className="numerical-value">
                145 <span className="candidates-small-values">+89</span>
              </span>

              <div className="total-candidates-text">Social Share</div>
            </div>
            <img src={Divider} alt="" />

            <div className="numerical-text">
              <span className="numerical-value">
                145 <span className="candidates-small-values">+89</span>
              </span>

              <div className="total-candidates-text">Unique Links</div>
            </div>
          </div>
        </div>
        <img className="vector-image" src={Vector} alt="" />

        <div className="top-content-total-assessments-wrapper">
          <p className="top-content-header-values">Total Assessments</p>

          <div className="icon-and-values">
            <img src={Purpose} alt="SVG" />
            <span className="numerical-value">11</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
