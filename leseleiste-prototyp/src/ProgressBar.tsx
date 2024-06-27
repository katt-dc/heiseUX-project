import React, { useEffect, useState } from "react";

const ProgressBar: React.FC = () => {
  const [relativeScrollPosition, setScrollPosition] = useState(0);
  const [elements, setElements] = useState<
    (HTMLParagraphElement | HTMLTableElement | HTMLIFrameElement)[]
  >([]);

  const handleScroll = () => {
    const article = document.querySelector(".article-content");
    if (article) {
      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleBottom = articleTop + article.scrollHeight;
      const scrollTop = window.scrollY;

      // Berechnung der Scrolltiefe relativ zum oberen Rand des Artikels
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
      const offset = 75;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const pTags = Array.from(
      document.getElementsByTagName("p")
    ) as HTMLParagraphElement[];
    const tables = Array.from(
      document.getElementsByTagName("table")
    ) as HTMLTableElement[];
    const iframes = Array.from(
      document.getElementsByTagName("iframe")
    ) as HTMLIFrameElement[];

    const allElements = [...pTags, ...tables, ...iframes];

    // Sort elements by their vertical position
    allElements.sort((a, b) => {
      const aTop = a.getBoundingClientRect().top + window.scrollY;
      const bTop = b.getBoundingClientRect().top + window.scrollY;
      return aTop - bTop;
    });

    setElements(allElements);

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

      const nextElement = elements[index + 1];
      const previousElement = elements[index - 1];
      const isNextHighlight =
        nextElement &&
        (nextElement.tagName === "TABLE" || nextElement.tagName === "IFRAME");
      const isPreviousHighlight =
        previousElement &&
        (previousElement.tagName === "TABLE" ||
          previousElement.tagName === "IFRAME");

      if (el.tagName === "TABLE") {
        isHighlight = true;
        segmentColorProgress = "#DA8A18";
        segmentColorBackground = "#FCA311";
      } else if (el.tagName === "IFRAME") {
        isHighlight = true;
        segmentColorProgress = "#6C8ED4";
        segmentColorBackground = "#98B9FF";
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
            height: "7px",
            backgroundColor: segmentColorBackground,
            position: "relative",
            cursor: "pointer",
            marginLeft: isHighlight || isPreviousHighlight ? "0%" : "0.3%",
            marginRight: isHighlight || isNextHighlight ? "0%" : "0.3%",
          }}
          onClick={() => handleSegmentClick(index)}
        >
          <div
            style={{
              height: "100%",
              width: `${fillPercentage}%`,
              backgroundColor: segmentColorProgress,
              transition: "width 0.1s",
            }}
          ></div>
        </div>
      );
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 1000,
        zIndex: 99,
        display: "flex",
      }}
    >
      {progressBarSegments}
    </div>
  );
};

export default ProgressBar;
