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

interface ShortProps {
  slides: SlideData[];
  url: string;
  isWatching?: boolean;
  //onEnded: () => void; //Funktionsausfruf wenn slide zu Ende
}

function Short({ slides, url, isWatching }: ShortProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];
  const [progress, setProgress] = useState(0);

  const buttonText = currentSlide.isSlideType(SlideType.PODCAST)
    ? "zum Podcast ▶"
    : "zum Artikel";

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      //onEnded();
    }
  };
  const previousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  const firstSlide = () => {
    setCurrentSlideIndex(0);
  };

  const updateSlideDuration = (duration: number) => {
    if (currentSlide.isSlideType(SlideType.VIDEO)) {
      (currentSlide as VideoSlideData).setDuration(duration);
    }
  };

  useEffect(() => {
    setProgress(0);
    const increment = 100 / (currentSlide.duration * 60);

    if (isWatching) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + increment;

          // If progress is 100%, go to next slide except if it's the last slide
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

      return () => {
        clearInterval(timer);
      };
    } else {
      firstSlide();
    }
  }, [currentSlideIndex, currentSlide, isWatching]);

  const openLinkToArticle = (path: string) => {
    const newWindow = window.open(path, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const onClickUrl =
    (url: string): (() => void) =>
    () =>
      openLinkToArticle(url);

  return (
    // h-[calc(100vh-3.5rem)] -> berechnet die maximale höhe minus höhe der navbar      md:w-80  md:w-[calc(70vh/2)]   md:h-[70vh]
    <div className="flex justify-center rounded-xl bg-heise-light-grey md:w-[25rem] w-screen md:h-[50rem] h-[calc(100vh-3.5rem)] relative mt-[0vh] md:mt-[7.5vh]">
      {/* Content */}
      <div>
        {currentSlide.isSlideType(SlideType.IMAGE) ? (
          <ImageSlide url={(currentSlide as ImageSlideData).url} />
        ) : null}
        {currentSlide.isSlideType(SlideType.TEXT) ? (
          <TextSlide
            headline={(currentSlide as TextSlideData).title}
            text={(currentSlide as TextSlideData).description}
            url={(currentSlide as TextSlideData).url}
            textsize={(currentSlide as TextSlideData).textsize}
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
          />
        ) : null}

        {currentSlide.isSlideType(SlideType.PODCAST) ? (
          <PodcastSlide
            headline={(currentSlide as PodcastSlideData).title}
            text={(currentSlide as PodcastSlideData).text}
            imageUrl={(currentSlide as PodcastSlideData).imageUrl}
            audioUrl={(currentSlide as PodcastSlideData).audioUrl}
          />
        ) : null}
      </div>

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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative font-semibold bg-heise-white text-heise-dark-grey rounded-3xl w-fit h-fit py-2 px-4 flex items-center justify-center text-sm">
              {buttonText}
            </div>
          </motion.button>
        </div>
      ) : null}
      {/* Buttons Slides */}
      <div className="absolute short__slide-buttons top-1/2">
        <motion.button
          onClick={previousSlide}
          className={`mx-4 ${
            currentSlideIndex === 0 ? "invisible" : "visible"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className={`mx-4 ${
            currentSlideIndex === slides.length - 1 ? "invisible" : "visible"
          } right-0 absolute`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </motion.button>
      </div>
    </div>
  );
}

export default Short;
