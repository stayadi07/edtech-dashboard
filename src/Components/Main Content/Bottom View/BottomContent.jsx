import React, { useState } from "react";
import Add_icon from "../../../Assets/Add_icon.svg";
import Sub_icon from "../../../Assets/Sub_icon.svg";
import Three_dots from "../../../Assets/Three_dots.svg";
import Vector from "../../../Assets/Vector_small.svg";
import Calendar from "../../../Assets/Calendar.svg";
import Dotted_line from "../../../Assets/Dotted_line.svg";
import Share from "../../../Assets/Share.svg";
import "./bottom-view.css";
import Create from "../../Create Assessment/Create";

function BottomContent() {
  const [showModal, setShowModal] = useState(false);
  // console.log({ showModal });
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="bottom-view-container-wrapper">
      <div className="bottom-view-header">
        <p className="bottom-view-text">My Assessment</p>
      </div>
      <div className="bottom-view-main-content-container">
        <div className="new-assessment-container">
          <div className="add-icon-container">
            <button
              style={{ border: "none", background: "none" }}
              onClick={openModal}
              className="add-icon-button"
            >
              {showModal ? (
                <Create onClose={closeModal} modal={showModal} />
              ) : null}
              <img src={Add_icon} alt="" />
            </button>
          </div>
          <p className="new-assessment-text">New Assessment</p>
          <p className="new-assessment-content">
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>

        <div className="math-assessment-container">
          <div className="icon-threeDots-container">
            <div className="icon-text-container">
              <div className="sub-icon-container">
                <img src={Sub_icon} alt="" />
              </div>

              <p className="math-assessment-text">Math Assessment</p>
              <div className="sub-icon-wrapper">
                <span className="job-text">Job</span>
                <img src={Vector} alt="" />
                <img src={Calendar} alt="" />
                <span className="date-content">20 Apr 2023</span>
              </div>
            </div>
            <div className="three-dots-container">
              <img src={Three_dots} alt="SVG" />
            </div>
          </div>
          <img src={Dotted_line} alt="" />
          <div className="time-question-container">
            <div className="duration-question-wrapper">
              <div className="duration">
                <div className="duration-value">00</div>
                <div className="duration-text">Duration</div>
              </div>
              <div className="questions">
                <div className="duration-value">00</div>
                <div className="duration-text">Questions</div>
              </div>
            </div>

            <div className="share-user-container">
              <div className="share">
                <img className="Share-value" src={Share} alt="SVG" />
                <span className="share-text">Share</span>
              </div>
              <div className="user">
                <span className="user-value">LP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="math-assessment-container">
          <div className="icon-threeDots-container">
            <div className="icon-text-container">
              <div className="sub-icon-container">
                <img src={Sub_icon} alt="" />
              </div>

              <p className="math-assessment-text">Math Assessment</p>
              <div className="sub-icon-wrapper">
                <span className="job-text">Job</span>
                <img src={Vector} alt="" />
                <img src={Calendar} alt="" />
                <span className="date-content">20 Apr 2023</span>
              </div>
            </div>
            <div className="three-dots-container">
              <img src={Three_dots} alt="SVG" />
            </div>
          </div>
          <img src={Dotted_line} alt="" />
          <div className="time-question-container">
            <div className="duration-question-wrapper">
              <div className="duration">
                <div className="duration-value">00</div>
                <div className="duration-text">Duration</div>
              </div>
              <div className="questions">
                <div className="duration-value">00</div>
                <div className="duration-text">Questions</div>
              </div>
            </div>

            <div className="share-user-container">
              <div className="share">
                <img className="Share-value" src={Share} alt="SVG" />
                <span className="share-text">Share</span>
              </div>
              <div className="user">
                <span className="user-value">LP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomContent;
