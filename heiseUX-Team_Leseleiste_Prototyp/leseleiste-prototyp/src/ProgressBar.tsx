import React, { JSX, useEffect, useState } from "react";
import "./ProgressBar.css";
import ChapterOverlay from "./ChapterOverlay";
import InfoIcon from "./InfoIcon"; // Import der InfoIcon-Komponente
import infoIcon from "../img/infoicon.png"; // Pfad zum InfoIcon-Bild
import infoboxImage from "../img/ProgressBar_Tutorial.svg"; // Pfad zur Infobox-Bilddatei

import { useBookmarkContext } from "./BookmarkContext";

const ProgressBar: React.FC = () => {
  const [elements, setElements] = useState<
    (HTMLTableElement | HTMLIFrameElement | HTMLElement)[]
  >([]);
  const [headings, setHeadings] = useState<{ title: string; type: string }[]>(
    []
  );
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const { bookmarks } = useBookmarkContext();
  const [articleTop, setArticleTop] = useState(0);
  const [articleBottom, setArticleBottom] = useState(0);
  const [, forceUpdate] = useState<number>(0); // State zum Erzwingen eines Re-Renders

  const handleScroll = () => {
    const article = document.querySelector(".article-content");
    if (article) {
      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleBottom = articleTop + article.scrollHeight;
      setArticleBottom(articleBottom);
      setArticleTop(articleTop);
      forceUpdate(Date.now()); // Re-Render erzwingen
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBookmarkClick = (start: number) => {
    const offset = 85;
    window.scrollTo({
      top: start - offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const tables = Array.from(
      document.getElementsByTagName("table")
    ) as HTMLTableElement[];
    const iframes = Array.from(
      document.getElementsByTagName("iframe")
    ) as HTMLIFrameElement[];
    const images = Array.from(
      document.querySelectorAll("article .chapterImageImportant img")
    ) as HTMLImageElement[];
    const hTags = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    ) as HTMLElement[];
    const chapters = Array.from(
      document.querySelectorAll(".chapter")
    ) as HTMLElement[];

    // Combine chapters, tables, and iframes for processing
    const allElements = [...chapters, ...tables, ...iframes, ...images];

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
        .filter(
          (h) => h.getBoundingClientRect().top + window.scrollY < elementTop
        )
        .pop();

      let type = "";
      if (element.tagName === "TABLE") {
        type = "(Tabelle)";
      } else if (element.tagName === "IFRAME" || element.tagName === "IMG") {
        type = "(Grafik/Video)";
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

  const getArticleBounds = (article: HTMLElement) => {
    const articleTop = article.getBoundingClientRect().top + window.scrollY;
    const articleBottom = articleTop + article.scrollHeight;
    return { articleTop, articleBottom };
  };

  const getElementBounds = (el: HTMLElement) => {
    const elementRect = el.getBoundingClientRect();
    const elementHeight = elementRect.height;
    const elementTop = elementRect.top + window.scrollY;
    return { elementHeight, elementTop };
  };

  const getSegmentColors = (el: HTMLElement) => {
    let segmentColorProgress = "#7EC699";
    let segmentColorBackground = "#D9D9D9";

    if (el.tagName === "TABLE") {
      segmentColorProgress = "#DA8A18";
      segmentColorBackground = "#FCA311";
    } else if (el.tagName === "IFRAME" || el.tagName === "IMG") {
      segmentColorProgress = "#6C8ED4";
      segmentColorBackground = "#98B9FF";
    }

    return { segmentColorProgress, segmentColorBackground };
  };

  const getFillPercentage = (
    windowScrollY: number,
    elementTop: number,
    elementHeight: number,
    articleBottom: number
  ) => {
    let fillPercentage = 0;

    if (articleBottom > windowScrollY) {
      if (
        windowScrollY >= elementTop &&
        windowScrollY < elementTop + elementHeight
      ) {
        const visibleHeight = windowScrollY - elementTop;
        fillPercentage = (visibleHeight / elementHeight) * 100;
        if (fillPercentage > 100) {
          fillPercentage = 100;
        }
      } else if (windowScrollY > elementTop + elementHeight) {
        fillPercentage = 100;
      }
    } else {
      fillPercentage = 100;
    }

    return fillPercentage;
  };

  const getHeadings = (
    elements: HTMLElement[],
    hTags: HTMLElement[],
    index: number
  ) => {
    const currentHeading = hTags
      .filter(
        (h) =>
          h.getBoundingClientRect().top + window.scrollY <
          elements[index].getBoundingClientRect().top + window.scrollY
      )
      .pop();

    let previousHeading = null;
    if (elements[index - 1]) {
      previousHeading = hTags
        .filter(
          (h) =>
            h.getBoundingClientRect().top + window.scrollY <
            elements[index - 1].getBoundingClientRect().top + window.scrollY
        )
        .pop();
    }

    const samePreviousHeading = currentHeading === previousHeading;

    return { currentHeading, previousHeading, samePreviousHeading };
  };

  const generateProgressBarSegments = (
    elements: HTMLElement[],
    hoveredSegment: number | null,
    setHoveredSegment: (index: number | null) => void,
    handleSegmentClick: (index: number) => void,
    headings: { title: string; type: string }[]
  ): JSX.Element[] => {
    const progressBarSegments: JSX.Element[] = [];
    const article = document.querySelector(".article-content") as HTMLElement;

    if (!article) return progressBarSegments;

    const { articleBottom } = getArticleBounds(article);
    const totalHeight = elements.reduce(
      (acc, el) => acc + el.getBoundingClientRect().height,
      0
    );

    const hTags = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    ) as HTMLElement[];

    for (let index = 0; index < elements.length; index++) {
      const el = elements[index];
      const { elementHeight, elementTop } = getElementBounds(el);
      const { segmentColorProgress, segmentColorBackground } =
        getSegmentColors(el);
      const { samePreviousHeading } = getHeadings(elements, hTags, index);
      const fillPercentage = getFillPercentage(
        window.scrollY,
        elementTop,
        elementHeight,
        articleBottom
      );

      progressBarSegments.push(
        <div
          key={index}
          style={{
            flex: elementHeight / totalHeight,
            height: hoveredSegment === index ? "14px" : "7px",
            backgroundColor: segmentColorBackground,
            position: "relative",
            cursor: "pointer",
            marginLeft: samePreviousHeading ? "0%" : "0.6%",
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
          {hoveredSegment === index && (
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

    return progressBarSegments;
  };

  const progressBarSegments = generateProgressBarSegments(
    elements,
    hoveredSegment,
    setHoveredSegment,
    handleSegmentClick,
    headings
  );

  return (
    <div className="progress-bar-container">
      <div style={{ display: "flex", alignItems: "center", zIndex: 1 }}>
        <InfoIcon
          additionalClass="progressbar"
          imageSrc={infoIcon}
          infoboxImage={infoboxImage}
        />{" "}
        {/* InfoIcon-Komponente hier hinzugefügt */}
        <div className="progress-bar-background"></div>{" "}
        {/* Hintergrundbox für die Leseleiste */}
        <div
          style={{
            display: "flex",
            width: "calc(100% - 20px)",
            margin: "0 10px",
            position: "relative",
          }}
        >
          {progressBarSegments} {/* Segmente der Leseleiste */}
          {bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="bookmark"
              style={{
                position: "absolute",
                top: "10px",
                left: `${
                  ((bookmark.start - articleTop) /
                    (articleBottom - articleTop)) *
                  100
                }%`,
                backgroundColor: "red",
                width: "5px",
                height: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleBookmarkClick(bookmark.start)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
