import React, { useState } from "react";
import Short from "./Short.tsx";
import { Structure } from "./Structure.tsx";
import { motion } from "framer-motion";
import ShareComponent from "./ShareComponent.tsx";
/* import { useLocation } from "react-router-dom";

function getRouting() {
  const location = useLocation();
  if (location.state) {
    const { from } = location.state;
    return from;
  } else {
    return -1;
  }
}

function sortStructure(index: number) {
  for (let i = 0; i < Structure.length; i++) {
    if (Structure[i].id == index) {
      const tmp = Structure[i];
      Structure[i] = Structure[0];
      Structure[0] = tmp;
    }
  }
} */
const ShortsScroller = () => {
  const shortsNumber = Structure.length;

  const [currentShortIndex, setCurrentShortIndex] = useState(0);

  const refs: React.RefObject<HTMLDivElement>[] = [];
  for (let i = 0; i < shortsNumber; i++) {
    refs.push(React.createRef<HTMLDivElement>());
  }

  const executeScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      setCurrentShortIndex(refs.indexOf(ref));
    }
  };

  const handleScroll = () => {
    // everytime the user scrolls, we check which short is currently in view
    let newCurrentShortIndex = 0;
    refs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          newCurrentShortIndex = index;
        }
      }
    });
    setCurrentShortIndex(newCurrentShortIndex);
  };

  const [isShareComponentOpen, setIsShareComponentOpen] = useState(false);
  const [currentShareData, setCurrentShareData] = useState({ link: '', title: '', image: '', id: 0 });

  const toggleShareComponent = (shortLink: string, shortTitle: string, shortImage: string, shortId: number) => {
    setCurrentShareData({ link: shortLink, title: shortTitle, image: shortImage, id: shortId });
    setIsShareComponentOpen(true);
  };

  const closeShareComponent = () => {
    setIsShareComponentOpen(false);
  };

  const [heightScaleMultiplier, setHeightScaleMultiplier] = useState(1);

  React.useEffect(() => {
    function handleResize() {
      // standard height is 1080px
      const standardHeight = 1080;
      // get the height of the window
      const height = window.innerHeight;
      // calculate the scale multiplier
      const scaleMultiplier = height / standardHeight;
      // set the scale multiplier only if window width is greater than 768px
      if (window.innerWidth > 768) {
        setHeightScaleMultiplier(scaleMultiplier);
      } else {
        setHeightScaleMultiplier(1);
      }
      // console.log("heightScaleMultiplier: ", heightScaleMultiplier);
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  const rows = [];
  for (let i = 0; i < shortsNumber; i++) {
    rows.push(
      <div
        key={i}
        ref={refs[i]}
        className="my-10 md:mx-[15rem] snap-start flex flex-col items-center justify-center"
        style={{ transform: `scale(${heightScaleMultiplier})`, marginTop: `${20 * heightScaleMultiplier}rem` }}
      >
        {/* <button
          className="bg-blue-500 px-4 text-white ml-4 rounded-full aspect-square mb-4"
          onClick={() => executeScroll(refs[i - 1])}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button> */}
        <div className="flex flex-row items-end w-full relative origin-top" >
          <div className="flex flex-col">
            <Short
              isWatching={i === currentShortIndex} // wenn der Short gerade angeschaut wird
              slides={Structure[i].slides} // Anzahl der Slides des jeweiligen Short
              url={Structure[i].artikelLink} // die url zum Artikel
            // onEnded={handleShortEnded} // wenn Slides eines Short zu Ende wird Index hochgezählt, muss zu button geändert werden
            />
          </div>
          <motion.button
            onClick={() => toggleShareComponent(Structure[i].artikelLink, Structure[i].slides[0].title, Structure[i].slides[0].url, Structure[i].id)}
            className="absolute right-0 mb-2 -mr-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-solid fa-share-nodes text-2xl"></i>
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative origin-top" >
        {/* top gradient */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-heise-dark-grey to-transparent z-40 invisible md:visible"></div>

        {/* top button */}
        <div className="absolute top-0 left-0 right-0 mx-auto flex justify-center items-center z-50 invisible md:visible">
          <button
            className="bg-white bg-opacity-25 hover:bg-opacity-50 text-white text-lg hover:scale-110 transition-all w-11 h-11 rounded-full flex items-center justify-center my-5"
            onClick={() => executeScroll(refs[currentShortIndex - 1])}
          >
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>

        {/* bottom button */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center items-center z-50 invisible md:visible">
          <button
            className="bg-white bg-opacity-25 hover:bg-opacity-50 text-white text-lg hover:scale-110 transition-all w-11 h-11 rounded-full flex items-center justify-center my-5"
            onClick={() => executeScroll(refs[currentShortIndex + 1])}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        {/* bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-heise-dark-grey to-transparent z-40 invisible md:visible"></div>

        {/* shorts */}
        <div
          className="flex-col h-[100vh] md:h-[90vh] overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
          onScroll={handleScroll}
        >
          {rows}
        </div>
      </div>
      <ShareComponent
        isOpen={isShareComponentOpen}
        onClose={closeShareComponent}
        shortLink={currentShareData.link}
        shortTitle={currentShareData.title}
        shortImage={currentShareData.image}
        shortId={currentShareData.id}
      />
    </>
  );
};

export default ShortsScroller;
