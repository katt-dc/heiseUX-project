import React, { useState } from "react";
//import { useState } from "react";
import Short from "./Short";
import { Structure } from "./Structure.tsx";
import { motion } from "framer-motion";
import ShareComponent from "./ShareComponent.tsx";
import { useLocation } from 'react-router-dom'

function getRouting(){
  const location = useLocation();
  if(location.state){
    const { from } = location.state;
    console.log(from);
    return from;
  }else{
    console.log("ahh");
    return -1;
  }
}
function sortStructure(index: number){
  for(let i = 0; i < Structure.length; i++){
    if(Structure[i].id == index){
      let tmp = Structure[i];
      Structure[i] = Structure[0];
      Structure[0] = tmp;
    }
  }
}
const ShortsScroller = () => {
  const shortsNumber = Structure.length;

  const shortToLoad = getRouting();
  if(shortToLoad != -1){
    sortStructure(shortToLoad);
  }
  
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

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
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
  }

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
        {/* <button
          className="bg-blue-500 px-4 text-white ml-4 rounded-full aspect-square mb-4"
          onClick={() => executeScroll(refs[i - 1])}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button> */}

        <div className="flex flex-row items-end w-full relative">
          <div className="flex flex-col">
            <Short
              slides={Structure[i].slides} // Anzahl der Slides des jeweiligen Short
              url={Structure[i].artikelLink} // die url zum Artikel
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

        <div className="absolute top-96 right-45 z-50">
          <ShareComponent isOpen={isShareComponentOpen} onClose={closeShareComponent}/>
        </div>

        {/* <button
          className="bg-blue-500 px-4 text-white ml-4 rounded-full aspect-square mt-4"
          onClick={() => executeScroll(refs[i + 1])}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button> */}

      </div>
    );
  }

  return (
    <>
      

      <div className="relative">

        {/* top gradient */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-heise-dark-grey to-transparent z-40"></div>

        {/* top button */}
        <div className="absolute top-0 left-1/2 right-1/2 origin-center flex justify-center z-50">
          <div className="flex justify-center">
            <button
                className="text-white text-4xl my-5 hover:scale-110 transition-all"
                onClick={() => executeScroll(refs[currentShortIndex - 1])}
              >
              <i className="fa-solid fa-angles-up"></i>
            </button>
          </div>
        </div>

        {/* bottom button */}
        <div className="absolute bottom-0 left-1/2 right-1/2 origin-center flex justify-center z-50">
          <div className="flex justify-center">
            <button
                className="text-white text-4xl my-5 hover:scale-110 transition-all"
                onClick={() => executeScroll(refs[currentShortIndex + 1])}
              >
              <i className="fa-solid fa-angles-down"></i>
            </button>
          </div>
        </div>

        {/* bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-heise-dark-grey to-transparent z-40"></div>

        {/* shorts */}
        <div className="flex-col h-[90vh] overflow-y-scroll snap-y snap-mandatory hide-scrollbar" onScroll={handleScroll}>
          {rows}
        </div>

      </div>
      
      
    </>
  );
};

export default ShortsScroller;
