//zeigt Sammlung an Slides an und bietet Buttons, um zwischen Slides zu navigieren

import { useState } from "react";
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
} from "./type";
import { motion } from "framer-motion";
import SlidesProgressIndicator from "./SlidesProgressIndicator";
import TextSlide from "./slides/TextSlide";
import FullScreenImageSlide from "./slides/FullScreenImageSlide";
import FullScreenImageWithTextSlide from "./slides/FullScreenImageWithTextSlide";
import VideoSlide from "./slides/VideoSlide";
import AdSlide from "./slides/AdSlide";
import PodcastSlide from "./slides/PodcastSlide";

interface ShortProps {
  slides: SlideData[];
  url: string;
  //onEnded: () => void; //Funktionsausfruf wenn slide zu Ende
}

function Short({ slides, url }: ShortProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  const currentSlide = slides[currentSlideIndex];
  const buttonText = currentSlide.isSlideType(SlideType.PODCAST)
    ? "zum Podcast ▶"
    : "zum Artikel";

  const openLinkToArticle = (path: string) => {
    const newWindow = window.open(path, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const onClickUrl =
    (url: string): (() => void) =>
    () =>
      openLinkToArticle(url);

  return (
    <div className="flex py-8 justify-center rounded-xl bg-heise-light-grey min-w-80 max-w-80 h-[75vh] relative mt-[7.5vh]">
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
            link={(currentSlide as AdSlideData).url}
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
      {!currentSlide.isSlideType(SlideType.AD) ? (
        <div className="absolute bottom-5 z-30">
          <SlidesProgressIndicator
            totalSlides={slides.length}
            currentSlide={currentSlideIndex}
          />
          <motion.button
            className="pt-5"
            onClick={onClickUrl(url)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="font-semibold bg-heise-white text-heise-dark-grey rounded-3xl w-fit h-fit py-1 px-3 flex items-center justify-center text-sm">
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

  /* Timer: Slides wechseln nach einer bestimmten Zeit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlideIndex < slides.length - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1);
      } else {
        onEnded();
      }
    }, 3000); 
    return () => clearTimeout(timer);
  }, [currentSlideIndex, slides.length, onEnded]);

  const currentSlide = slides[currentSlideIndex];
  

  return (
    <div className="short">
      <ImageSlide url={currentSlide.url} />
    </div>
  );

  */
}

export default Short;
