import React, {useRef, useState, useEffect} from "react";
import "./ChapterOverlay.css";

interface OverlayProperties {
  text: string;
  visible: boolean;
}

const ChapterOverlay: React.FC<OverlayProperties> = ({ text, visible }) => {
  const overlayReference = useRef<HTMLDivElement>(null); //Referenz zum Overlay
  const [positionStyles, setPositionStyles] = useState({}); //positionStyles = Aktuell gespeicherter State, setPositionStyles = Funktion, um positionStyles zu updaten
  useEffect(() =>{
    if(visible && overlayReference.current){
      const rect = overlayReference.current.getBoundingClientRect(); //Speichert Positionseigenschaften des Overlays
      const styles: React.CSSProperties = {};

      if (rect.right > window.innerWidth){ //Prüfen, ob Overlay am rechten Rand den Viewport verlässt. Gegebenenfalls die Styles anpassen.
        styles.left = "auto";
        styles.right = 0;
        styles.transform = "translateX(0)";
      }

      if(rect.left < 0){ //Prüfen, ob Overlay am linken Rand den Viewport verlässt. Gegebenenfalls die Styles anpassen.
        styles.left = "0";
        styles.transform = "translateX(0)";
      }

      setPositionStyles(styles);
    }
  },[visible]);

  return(
    <div
      ref={overlayReference} //Bindet die overlayReference an das Div
      className="chapter-overlay"
      style={positionStyles}
    >
      <div className="overlay-background"></div>
      <div className="text">{text}</div>
    </div>
  )
};

export default ChapterOverlay;
