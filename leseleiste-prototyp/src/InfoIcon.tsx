import React, { useState } from "react";
import "./InfoIcon.css"; // CSS für das Icon und die Infobox

interface InfoIconProps {
  additionalClass?: string;
  imageSrc: string;
  infoboxImage: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ additionalClass, imageSrc, infoboxImage }) => {
  const [isInfoboxVisible, setInfoboxVisible] = useState(false);

  const showInfobox = () => {
    setInfoboxVisible(true);
  };

  const hideInfobox = () => {
    setInfoboxVisible(false);
  };

  return (
    <div className={`info-icon-container ${additionalClass}`} onMouseLeave={hideInfobox}>
      <div className="info-icon" onClick={showInfobox} onMouseEnter={showInfobox}>
        <img src={imageSrc} alt="Info Icon" className="info-icon-image" />
      </div>
      {isInfoboxVisible && (
        <div className={`infobox ${additionalClass}-infobox`}>
          <img src={infoboxImage} alt="Infobox" />
        </div>
      )}
    </div>
  );
};

export default InfoIcon;