import React from "react";
import "../styles/AnatomySection.css";
import anatomyImg from "../assets/anatomy.png";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img
        src={anatomyImg}
        alt="Anatomical Diagram"
        className="anatomy-image"
      />
      {/* Additional health indicators go here */}
    </div>
  );
};

export default AnatomySection;
