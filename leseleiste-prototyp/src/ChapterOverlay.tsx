import React from "react";
import "./ChapterOverlay.css";

interface OverlayProperties {
  text: string;
  visible: boolean;
}

const ChapterOverlay: React.FC<OverlayProperties> = ({ text, visible }) => {
  return (
    <div className={`chapter-overlay ${visible ? "visible" : ""}`}>
      <div className="overlay-background"></div>
      <div className="text">{text}</div>
    </div>
  );
};

export default ChapterOverlay;
