import React from "react";
import Dashboard from "../../Assets/dashboard.svg";
import Note from "../../Assets/note_alt.svg";
import Library from "../../Assets/library.svg";
import Admin from "../../Assets/admin_stats.svg";
import Stroke from "../../Assets/SystemStroke.svg";
import "./index.css";

function SideBar() {
  return (
    <div className="sidebar-wrapper-container">
      <div className="sidebar-container">
        <div className="sidebar-content-wrapper">
          <img src={Dashboard} alt="SVG" />
          <div className="sidebar-content-text">Dashboard</div>
        </div>

        <div className="sidebar-content-wrapper">
          <img src={Note} alt="SVG" />
          <div className="sidebar-content-text">Assessment</div>
        </div>

        <div className="sidebar-content-wrapper">
          <img src={Library} alt="SVG" />
          <div className="sidebar-content-text">My Library</div>
        </div>

        <div className="divider-line">
          <img src={Stroke} alt="" />
        </div>

        <div className="sidebar-content-wrapper">
          <div className="sidebar-content-wrapper-admin">
            <button className="sidebar-content-text-admin">Admin</button>
          </div>
          <img src={Admin} alt="SVG" />
          <div className="sidebar-content-text">Round Status</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
