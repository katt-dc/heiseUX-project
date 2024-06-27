import React, { useState } from "react";
//import { useState } from "react";
import Short from "./Short";
import { Structure } from "./Structure.tsx";
import { motion } from "framer-motion";
import ShareComponent from "./ShareComponent.tsx";

const ShortsScroller = () => {
  const shortsNumber = Structure.length;

  const refs: React.RefObject<HTMLDivElement>[] = [];
  for (let i = 0; i < shortsNumber; i++) {
    refs.push(React.createRef<HTMLDivElement>());
  }

  const executeScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  //const [currentShortIndex, setCurrentShortIndex] = useState(2);
  //
  //const handleShortEnded = () => {
  //  setCurrentShortIndex((prevIndex) => (prevIndex + 1) % Structure.length);
  //};

  // const [showShareComponent, setShowShareComponent] = useState<boolean[]>(Array(shortsNumber).fill(false));

  // const handleShareButtonClick = (index: number) => {
  //   const newShowShareComponent = [...showShareComponent];
  //   newShowShareComponent[index] = !newShowShareComponent[index];
  //   setShowShareComponent(newShowShareComponent);
  // };

  const [isShareComponentOpen, setIsShareComponentOpen] = useState(false);

  // Function to toggle ShareComponent visibility
  const toggleShareComponent = () => {
    // setIsShareComponentOpen(!isShareComponentOpen);
    if (!isShareComponentOpen) {
      setIsShareComponentOpen(true);
    }
  };

  const closeShareComponent = () => {
    setIsShareComponentOpen(false);
  };

  const rows = [];
  for (let i = 0; i < shortsNumber; i++) {
    rows.push(
      // center the content
      <div
        key={i}
        ref={refs[i]}
        className="m-20 snap-start flex flex-col items-center justify-center"
      >
        <button
          className="bg-blue-500 px-4 text-white ml-4 rounded-full aspect-square mb-4"
          onClick={() => executeScroll(refs[i - 1])}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>

        <div className="flex flex-row items-end w-full relative">
          <div className="flex flex-col">
            <Short
              slides={Structure[i].slides} // Anzahl der Slides des jeweiligen Short
              url="https://www.heise.de/news/Sicherheitsupdates-Angreifer-koennen-Asus-Router-kompromittieren-9765067.html" // die url zum Artikel
              // onEnded={handleShortEnded} // wenn Slides eines Short zu Ende wird Index hochgezählt, muss zu button geändert werden
            />
          </div>
          <motion.button
            onClick={toggleShareComponent}
            className="absolute right-0 mb-2 -mr-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-solid fa-share-nodes text-2xl"></i>
          </motion.button>
        </div>

        <div className="absolute top-96 right-45 z-10">
          <ShareComponent isOpen={isShareComponentOpen} onClose={closeShareComponent}/>
        </div>

        <button
          className="bg-blue-500 px-4 text-white ml-4 rounded-full aspect-square mt-4"
          onClick={() => executeScroll(refs[i + 1])}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>

      </div>
    );
  }

  return (
    <>
      <div className="flex-col h-[91vh] overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
        {rows}
      </div>
    </>
  );
};

export default ShortsScroller;
