//zeigt Sammlung an Slides an und bietet Buttons, um zwischen Slides zu navigieren

import { useEffect, useState } from "react";
import ImageSlide from "./slides/ImageSlide";
import {
  AdSlideData,
  FullScreenImageSlideData,
  FullScreenImageWithTextSlideData,
  ImageSlideData,
  PodcastSlideData,
  SlideData,
  TextSlideData,
  VideoSlideData,
  SlideType,
  ComplexAdSlideData,
} from "./type";
import { motion } from "framer-motion";
import SlidesProgressIndicator from "./SlidesProgressIndicator";
import TextSlide from "./slides/TextSlide";
import FullScreenImageSlide from "./slides/FullScreenImageSlide";
import FullScreenImageWithTextSlide from "./slides/FullScreenImageWithTextSlide";
import VideoSlide from "./slides/VideoSlide";
import AdSlide from "./slides/AdSlide";
import PodcastSlide from "./slides/PodcastSlide";
import ComplexAdSlide from "./slides/ComplexAdSlide";
import ReviewSlide from "./slides/ReviewSlide";
import { useFirebaseContext } from '../context/FirebaseContext';
import { doc, updateDoc } from "firebase/firestore"; 


interface ShortProps {
  slides: SlideData[];
  url: string;
  isWatching?: boolean;
  shortId?: number;
  //onEnded: () => void; //Funktionsausfruf wenn slide zu Ende
}

function Short({ slides, url, isWatching, shortId }: ShortProps) {
  const firebaseContext = useFirebaseContext();

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const buttonText = currentSlide.isSlideType(SlideType.PODCAST)
    ? "zum Podcast ▶"
    : "mehr erfahren";

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setProgress(0);
      if (paused) {
        setPaused(false);
      }
    } else {
      //onEnded();
    }
  };
  const previousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setProgress(0);
      if (paused) {
        setPaused(false);
      }
    }
  };
  const firstSlide = () => {
    setCurrentSlideIndex(0);
    setProgress(0);
    if (paused) {
      setPaused(false);
    }
  };

  const updateSlideDuration = (duration: number) => {
    if (currentSlide.isSlideType(SlideType.VIDEO)) {
      (currentSlide as VideoSlideData).setDuration(duration);
    } else if (
      currentSlide.isSlideType(SlideType.TEXT) ||
      currentSlide.isSlideType(SlideType.TEXT_IMAGE)
    ) {
      const description = (currentSlide as TextSlideData | FullScreenImageWithTextSlideData | AdSlideData | ComplexAdSlideData).description;
      if (description) {
        const words = description.split(" ");
        const calculatedDuration = Math.ceil((words.length / 175) * 60);
        (currentSlide as SlideData).setDuration(calculatedDuration);
      } else {
        (currentSlide as SlideData).setDuration(duration || 10);
      }
    } else if (
      currentSlide.isSlideType(SlideType.IMAGE) ||
      currentSlide.isSlideType(SlideType.IMAGE_FULLSCREEN)
    ) {
      (currentSlide as ImageSlideData | FullScreenImageSlideData).setDuration(duration || 5);
    } else {
      currentSlide.setDuration(duration || 5);
    }
  };


  useEffect(() => {
    if (isWatching) {
      setPaused(false);
      setProgress(0);
      // setCurrentSlideIndex(0);
    }
  }, [isWatching]);

  useEffect(() => {
    if (isWatching && !paused) {
      const increment = 100 / (currentSlide.duration * 60);

      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + increment;

          if (newProgress >= 100) {
            if (currentSlideIndex === slides.length - 1) {
              setTimeout(() => {
                firstSlide();
              }, 0);
              return 0;
            }
            nextSlide();
            return 0;
          }

          return newProgress;
        });
      }, 1000 / 60); // 60fps

      return () => clearInterval(timer); // Clear the timer when effect cleans up
    }
  }, [isWatching, paused, currentSlideIndex, currentSlide, nextSlide, firstSlide, slides.length]);

  useEffect(() => {
    if (!isWatching) {
      setCurrentSlideIndex(0);
      firstSlide();
    }
  }, [isWatching]);

  useEffect(() => {
    if (paused) {
      setProgress(progress); // Maintain progress when paused
    }
  }, [paused]);



  const openLinkToArticle = (path: string) => {
    const newWindow = window.open(path, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl =
    (url: string): (() => void) =>
      () => {
        openLinkToArticle(url);
        setPaused(true);
        countClicks();
      };

  function countClicks() {
    const sessionId = document.cookie.split('; ').find(row => row.startsWith('sessionId='))!.split('=')[1];
    if (sessionId === undefined) {
      console.log("ERROR: No sessionId found in cookies");
      return;
    } else {
      try {
        // Reference the document in the "short-bewertungen" collection
        const docRef = doc(firebaseContext.db, "short-bewertungen", sessionId);

        // add the rating to the document
        updateDoc(docRef, {
          [`Short${shortId}_ToArticleClicked`]: true
        });

        console.log("Document successfully written with custom ID (Session ID):", sessionId);
      } catch (e) {
        console.error("Error adding document with custom ID (Session ID):", e);
      }
    }
  }

  const handleTogglePause = () => {
    if (
      !currentSlide.isSlideType(SlideType.AD_COMPLEX) &&
      !currentSlide.isSlideType(SlideType.AD)
    ) {
      setPaused(!paused);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === " " && !currentSlide.isSlideType(SlideType.REVIEW) && isWatching) {
      e.preventDefault();
      handleTogglePause();
    }
    if (e.key === "ArrowRight" && isWatching) {
      e.preventDefault();
      nextSlide();
    }
    if (e.key === "ArrowLeft" && isWatching) {
      e.preventDefault();
      previousSlide();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    // h-[calc(100vh-3.5rem)] -> berechnet die maximale höhe minus höhe der navbar      sm:w-80  sm:w-[calc(70vh/2)]   sm:h-[70vh]
    <div className="flex justify-center rounded-xl bg-heise-light-grey sm:w-[400px] w-screen sm:h-[800px] h-[calc(100vh-3.5rem)] relative mt-[0vh] sm:mt-[100px]">
      {/* Content */}
      <div onClick={() => {
        if (!currentSlide.isSlideType(SlideType.REVIEW)) {
          handleTogglePause();
        }
      }}>
        {currentSlide.isSlideType(SlideType.IMAGE) ? (
          <ImageSlide url={(currentSlide as ImageSlideData).url} />
        ) : null}
        {currentSlide.isSlideType(SlideType.TEXT) ? (
          <TextSlide
            headline={(currentSlide as TextSlideData).title}
            text={(currentSlide as TextSlideData).description}
            url={(currentSlide as TextSlideData).url}
            textsize={(currentSlide as TextSlideData).textsize}
            onDurationChange={(duration) => updateSlideDuration(duration)}
          />
        ) : null}
        {currentSlide.isSlideType(SlideType.IMAGE_FULLSCREEN) ? (
          <FullScreenImageSlide
            url={(currentSlide as FullScreenImageSlideData).url}
            headline={(currentSlide as FullScreenImageSlideData).title}
          />
        ) : null}
        {currentSlide.isSlideType(SlideType.VIDEO) ? (
          <VideoSlide
            url={(currentSlide as VideoSlideData).url}
            headline={(currentSlide as VideoSlideData).title}
            text={(currentSlide as VideoSlideData).description}
            textsize={(currentSlide as VideoSlideData).textsize}
            boxposition={(currentSlide as VideoSlideData).boxposition}
            onDurationChange={(duration) => updateSlideDuration(duration)}
            paused={paused}
            progress={progress}
            onPausedChange={setPaused}
          />
        ) : null}
        {currentSlide.isSlideType(SlideType.TEXT_IMAGE) ? (
          <FullScreenImageWithTextSlide
            url={(currentSlide as FullScreenImageWithTextSlideData).url}
            headline={(currentSlide as FullScreenImageWithTextSlideData).title}
            text={
              (currentSlide as FullScreenImageWithTextSlideData).description
            }
            textsize={
              (currentSlide as FullScreenImageWithTextSlideData).textsize
            }
            boxposition={
              (currentSlide as FullScreenImageWithTextSlideData).boxposition
            }
          />
        ) : null}
        {currentSlide.isSlideType(SlideType.AD) ? (
          <AdSlide
            url={(currentSlide as AdSlideData).imageUrl}
            title={(currentSlide as AdSlideData).title}
            description={(currentSlide as AdSlideData).description}
            link={(currentSlide as AdSlideData).url}
            images={(currentSlide as AdSlideData).images}
          />
        ) : null}
        {currentSlide.isSlideType(SlideType.AD_COMPLEX) ? (
          <ComplexAdSlide
            url={(currentSlide as ComplexAdSlideData).url}
            title={(currentSlide as ComplexAdSlideData).title}
            description={(currentSlide as ComplexAdSlideData).description}
            images={(currentSlide as ComplexAdSlideData).images}
            text={(currentSlide as ComplexAdSlideData).text}
            shortId={shortId ?? 0}
          />
        ) : null}

        {currentSlide.isSlideType(SlideType.PODCAST) ? (
          <PodcastSlide
            headline={(currentSlide as PodcastSlideData).title}
            text={(currentSlide as PodcastSlideData).text}
            imageUrl={(currentSlide as PodcastSlideData).imageUrl}
            audioUrl={(currentSlide as PodcastSlideData).audioUrl}
            paused={paused}
            progress={progress}
            onPausedChange={setPaused}
          />
        ) : null}

        {currentSlide.isSlideType(SlideType.REVIEW) ? (
          <ReviewSlide shortId={shortId ?? 0} />
        ) : null}
      </div>

      {/* Pause Overlay */}
      {paused && (
        <div className="absolute rounded-xl inset-0 flex items-center justify-center bg-black bg-opacity-20 z-40 pointer-events-none">
          <i className="fa-solid fa-play fa-3x text-heise-white opacity-60"></i>
        </div>
      )}

      {/* Progress Indicator + Button zum Artikel*/}
      {!(
        currentSlide.isSlideType(SlideType.AD) ||
        currentSlide.isSlideType(SlideType.AD_COMPLEX)
      ) ? (
        <div className="absolute bottom-5 z-30 flex flex-col gap-4 items-center w-[80%]">
          <SlidesProgressIndicator
            totalSlides={slides.length}
            currentSlide={currentSlideIndex}
            progress={progress}
            setCurrentSlideIndex={setCurrentSlideIndex}
          />
          <motion.button
            className="relative"
            onClick={onClickUrl(url)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={
              progress > 50 && progress < 53
                ? { scale: 0.9, opacity: 0.95 }
                : { scale: 1.0, opacity: 1.0 }
            }
          >
            <div className="shadow-md relative font-bold bg-heise-white text-heise-dark-grey rounded-3xl w-fit h-fit py-2.5 px-5 flex items-center justify-center text-sm">
              {buttonText}
            </div>
          </motion.button>
        </div>
      ) : null}
      {/* Buttons Slides */}
      <div className="absolute short__slide-buttons top-1/2 -translate-y-1/2 pointer-events-none">
        <motion.button
          onClick={previousSlide}
          className={`sm:mx-4 ${
            currentSlideIndex === 0 ? "invisible" : "visible"
            } z-40`}
          whileHover={{ 
            scale: 1.1
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-opacity-0 bg-white sm:bg-opacity-0 sm:hover:bg-neutral-400 sm:hover:bg-opacity-100 text-lg transition-all w-24 h-[calc(100vh-13.5rem)] sm:w-16 sm:h-16 sm:rounded-full flex items-center justify-center pointer-events-auto">
            <i className="fa-solid fa-chevron-left text-neutral-300 opacity-50 sm:text-white sm:opacity-100 pr-14 sm:pr-0"></i>
          </div>
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className={`sm:mx-4 ${
            currentSlideIndex === slides.length - 1 ? "invisible" : "visible"
            } right-0 absolute z-40`}
          whileHover={{ 
            scale: 1.1 
          }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="bg-opacity-0 bg-white sm:bg-opacity-0 sm:hover:bg-neutral-400 sm:hover:bg-opacity-100 text-lg transition-all w-24 h-[calc(100vh-13.5rem)] sm:w-16 sm:h-16 sm:rounded-full flex items-center justify-center pointer-events-auto">
            <i className="fa-solid fa-chevron-right text-neutral-300 opacity-50 sm:text-white sm:opacity-100 pl-14 sm:pl-0"></i>
          </div>
        </motion.button>
      </div>
    </div>
  );
}

export default Short;
