import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import ChapterOverlay from "./ChapterOverlay";
import InfoIcon from "./InfoIcon"; // Import der InfoIcon-Komponente
import infoIcon from "./images/infoicon.png"; // Pfad zum InfoIcon-Bild
import infoboxImage from "./images/infobox.jpg"; // Pfad zur Infobox-Bilddatei

const ProgressBar: React.FC = () => {
  const [relativeScrollPosition, setScrollPosition] = useState(0);
  const [elements, setElements] = useState<(HTMLTableElement | HTMLIFrameElement | HTMLElement)[]>([]);
  const [headings, setHeadings] = useState<{ title: string; type: string }[]>([]);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  // Methode kann entfernt werden, wenn der Eventlistener anders verlinkt wurde
  const handleScroll = () => {
    const article = document.querySelector(".article-content");
    if (article) {
      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleBottom = articleTop + article.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop >= articleTop && scrollTop <= articleBottom) {
        const totalScroll = articleBottom - articleTop;
        const currentScroll = scrollTop - articleTop;
        setScrollPosition((currentScroll / totalScroll) * 100);
      } else if (scrollTop < articleTop) {
        setScrollPosition(0);
      } else {
        setScrollPosition(100);
      }
    }
  };

  const handleSegmentClick = (index: number) => {
    const element = elements[index];
    if (element) {
      const offset = 85;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const tables = Array.from(document.getElementsByTagName("table")) as HTMLTableElement[];
    const iframes = Array.from(document.getElementsByTagName("iframe")) as HTMLIFrameElement[];
    const hTags = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")) as HTMLElement[];
    const chapters = Array.from(document.querySelectorAll(".chapter")) as HTMLElement[];

    // Combine chapters, tables, and iframes for processing
    const allElements = [...chapters, ...tables, ...iframes];

    // Elemente nach ihrer vertikalen Position sortieren
    allElements.sort((a, b) => {
      const aTop = a.getBoundingClientRect().top + window.scrollY;
      const bTop = b.getBoundingClientRect().top + window.scrollY;
      return aTop - bTop;
    });

    // Get headings sorted by their vertical position
    hTags.sort((a, b) => {
      const aTop = a.getBoundingClientRect().top + window.scrollY;
      const bTop = b.getBoundingClientRect().top + window.scrollY;
      return aTop - bTop;
    });

    // Create a list of the last headings for each element, including type information
    const headingsList = allElements.map((element) => {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const lastHeading = hTags
        .filter((h) => h.getBoundingClientRect().top + window.scrollY < elementTop)
        .pop();
      
      let type = "";
      if(element.tagName === "TABLE") {
        type = "(Tabelle)";
      } else if (element.tagName === "IFRAME") {
        type = "(Bild/Video)";
      } 
      
      return {
        title: lastHeading ? lastHeading.innerText : "",
        type: type,
      };
    });

    setElements(allElements);
    setHeadings(headingsList);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalHeight = elements.reduce(
    (acc, el) => acc + el.getBoundingClientRect().height,
    0
  );

  const progressBarSegments: JSX.Element[] = [];
  for (let index = 0; index < elements.length; index++) {
    const el = elements[index];
    const article = document.querySelector(".article-content");
    if (article) {
      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleBottom = articleTop + article.scrollHeight;

      const elementRect = el.getBoundingClientRect();
      const elementHeight = elementRect.height;
      const elementTop = elementRect.top + window.scrollY;

      let fillPercentage = 0;
      let isHighlight = false;
      let segmentColorProgress = "#7EC699";
      let segmentColorBackground = "#D9D9D9";

      if (el.tagName === "TABLE") {
        isHighlight = true;
        segmentColorProgress = "#DA8A18";
        segmentColorBackground = "#FCA311";
      } else if (el.tagName === "IFRAME") {
        isHighlight = true;
        segmentColorProgress = "#6C8ED4";
        segmentColorBackground = "#98B9FF";
      }

      let samePriviosHeading = false;
      let sameNextHeading = false;
      let previousHeading = null;
      let nextHeading = null;
      const hTags = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")) as HTMLElement[];

      const currentHeading = hTags
        .filter((h) => h.getBoundingClientRect().top + window.scrollY < el.getBoundingClientRect().top + window.scrollY)
        .pop();
      if (elements[index - 1]){
        previousHeading = hTags
          .filter((h) => h.getBoundingClientRect().top + window.scrollY < elements[index - 1].getBoundingClientRect().top + window.scrollY)
          .pop();
      }
      if (elements[index + 1]){
        nextHeading = hTags
          .filter((h) => h.getBoundingClientRect().top + window.scrollY > elements[index + 1].getBoundingClientRect().top + window.scrollY)
          .pop();
      }
      if (currentHeading === previousHeading){
        samePriviosHeading = true;
      } else if (currentHeading === nextHeading) {
        sameNextHeading = true;
      }

      if (articleBottom > window.scrollY) {
        if (window.scrollY >= elementTop && window.scrollY < elementTop + elementHeight) {
          const visibleHeight = window.scrollY - elementTop;
          fillPercentage = (visibleHeight / elementHeight) * 100;
          if (fillPercentage > 100) {
            fillPercentage = 100;
          }
        } else if (window.scrollY > elementTop + elementHeight) {
          fillPercentage = 100;
        }
      } else {
        fillPercentage = 100;
      }

      progressBarSegments.push(
        <div
          key={index}
          style={{
            flex: elementHeight / totalHeight,
            height: hoveredSegment === index ? "14px" : "7px",
            backgroundColor: segmentColorBackground,
            position: "relative",
            cursor: "pointer",
            marginLeft: samePriviosHeading ? "0%" : "0.6%",
            transition: "height 0.3s ease, opacity 0.3s ease",
          }}
          onClick={() => handleSegmentClick(index)}
          onMouseEnter={() => setHoveredSegment(index)}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <div
            className="progress-bar-fill"
            style={{
              width: `${fillPercentage}%`,
              backgroundColor: segmentColorProgress,
            }}
          ></div>
          {hoveredSegment === index &&(
            <ChapterOverlay
              text={`${headings[index].title} ${headings[index].type}`}
              visible={hoveredSegment === index}
              />
          )}
          {/* Transparentes Overlay für größere Klickfläche */}
          <div
            style={{
              position: "absolute",
              top: "-3.5px",
              bottom: "-30.5px",
              left: "-1px",
              right: "-5px",
              cursor: "pointer",
            }}
            onClick={() => handleSegmentClick(index)}
          ></div>
        </div>
      );
    }
  }

  return (
    <div className="progress-bar-container">
      <div style={{ display: "flex", alignItems: "center", zIndex: 1 }}>
        <InfoIcon additionalClass="progressbar" imageSrc={infoIcon} infoboxImage={infoboxImage} /> {/* InfoIcon-Komponente hier hinzugefügt */}
        <div className="progress-bar-background"></div> {/* Hintergrundbox für die Leseleiste */}
        <div style={{ display: "flex", width: "calc(100% - 20px)", margin: "0 10px" }}>
          {progressBarSegments} {/* Segmente der Leseleiste */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;