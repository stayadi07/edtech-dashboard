import React from "react";
import TopContent from "./Top View/TopContent";
import BottomContent from "./Bottom View/BottomContent";
import NavBar from "./Navbar/NavBar";
import "./index.css";

function MainContent({ onMobileViewToggle }) {
  return (
    <div className={`main-content-container `}>
      <NavBar onMobileViewToggle={onMobileViewToggle} />
      <TopContent />
      <BottomContent />
    </div>
  );
}

export default MainContent;
