import React, { useState } from "react";
import "./InfoIcon_Bookmarks.css";

interface InfoIconProperties { //Properties, die der Komponente übergeben werden können
  additionalClass?: string;
  imageSrc: string; //Icon
  infoboxImage: string; //Großes Bild
}

const InfoIcon_Bookmarks: React.FC<InfoIconProperties> = ({
  additionalClass = "",
  imageSrc,
  infoboxImage,
}) => {
  const [isHovered, setIsHovered] = useState(false); //State verwaltung - Zu Beginn immer false.

  return (
    <div
      className={`info-icon-container ${additionalClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt="Info Icon" className="info-icon-image" />
      {isHovered && ( //Wenn isHovered = True ist, wird der folgende Codeblock ausgeführt.
          <img src={infoboxImage} alt="Infobox" className="info-box-image" />
      )}
    </div>
  );
};

export default InfoIcon_Bookmarks;