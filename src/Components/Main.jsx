import React, { useState } from "react";
import SideBar from "./Sidebar/SideBar";
import "./index.css";
import MainContent from "./Main Content/MainContent";

function Main() {
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMobileView = () => {
    setIsMobileView(!isMobileView);
  };
  console.log({ isMobileView });
  return (
    <div className={`dashboard-container ${isMobileView ? "mobile-view" : ""}`}>
      <SideBar />
      <MainContent onMobileViewToggle={toggleMobileView} />
    </div>
  );
}

export default Main;
