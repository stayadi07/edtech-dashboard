import React from "react";
import "./create.css";
import Close from "../../Assets/Closse.svg";

function Create({ onClose, modal }) {
  console.log({ modal });

  return (
    <div className="create-assessment-container" onClick={onClose}>
      <div style={{ width: "591px" }}>
        <div className="create-assessment-header">
          <span className="create-assessment-text">Create new assessment</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z"
              fill="#323232"
            />
          </svg>
        </div>
        <div className="input-fields-container">
          <p className="input-header">Name of Assessment</p>
          <input className="input-fields" type="text" placeholder="Type Here" />

          <p className="input-header">Purpose of the test is</p>
          <select className="input-fields" defaultValue="Select">
            <option selected>Select</option>
          </select>

          <p className="input-header">Description</p>
          <select className="input-fields">
            <option selected>Select</option>
          </select>

          <p className="input-header">Skills</p>

          <div className="skills-box-container">
            <span className="skills-values">
              UI/UX and Design <img src={Close} alt="" />
            </span>

            <span className="skills-values">
              No. of Question
              <img src={Close} alt="" />
            </span>

            <span className="skills-values">
              Web Development
              <img src={Close} alt="" />
            </span>

            <span className="skills-values">
              UI/UX and Design
              <img src={Close} alt="" />
            </span>

            <span className="skills-values">
              Web Development
              <img src={Close} alt="" />
            </span>
          </div>
          <input className="input-fields" type="text" placeholder="Type Here" />

          <p className="input-header">Duration of assessment</p>
          <input className="input-fields" type="text" placeholder="HH:MM:SS" />
          <div className="button-container">
            <button className="save-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
