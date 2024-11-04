import { useRef, useEffect, useState } from "react";
import Headline from "../text-components/Headline";
import TextBox from "../text-components/TextBox";

interface PodcastSlideProps {
  headline: string;
  text: string;
  imageUrl: string;
  audioUrl: string;
  paused: boolean;
  progress: number;
  onPausedChange: (paused: boolean) => void;
}

export default function PodcastSlide({
  headline,
  text,
  imageUrl,
  audioUrl,
  paused,
  progress,
  onPausedChange,
}: PodcastSlideProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  // const progressBarRef = useRef<HTMLInputElement>(null);
  const slideRef = useRef<HTMLDivElement>(null); // Ref für den Slide Container
  const [isMuted, setIsMuted] = useState(false);
  // const [paused, setPaused] = useState(false);

  // useEffect(() => {
  //   const audioElement = audioRef.current;

  //   if (!audioElement) return;

  //   const handleTimeUpdate = () => {
  //     const currentTime = audioElement.currentTime;
  //     if (progressBarRef.current) {
  //       progressBarRef.current.value = currentTime.toString();
  //       progressBarRef.current.style.setProperty(
  //         "--range-progress",
  //         `${(parseFloat(progressBarRef.current.value) / 30) * 100}%`
  //       );
  //     }
  //     if (currentTime >= 30) {
  //       audioElement.currentTime = 0;
  //       audioElement.play();
  //     }
  //   };

  //   audioElement.addEventListener("timeupdate", handleTimeUpdate);
  //   audioElement.play();

  //   return () => {
  //     audioElement.removeEventListener("timeupdate", handleTimeUpdate);
  //   };
  // }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const playAudio = async () => {
      try {
        await audioElement.play();
      } catch (error) { /* empty */ }
    }

    if(progress === 0) {
      audioElement.currentTime = 0;
      audioElement.pause();
      onPausedChange(true);
    } else {
      playAudio();
      onPausedChange(false);
    }

  }, [onPausedChange, progress]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const playAudio = async () => {
      try {
        await audioElement.play();
      } catch (error) { /* empty */ }
    }

    if (paused) {
      audioElement.pause();
    } else {
      playAudio();
    }

  }, [paused]);

  const handleMuteToggle = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const playAudio = async () => {
      try {
        await audioElement.play();
      } catch (error) { /* empty */ }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsMuted(!entry.isIntersecting); // Audio stummschalten, wenn nicht sichtbar
        if (audioRef.current) {
          audioRef.current.muted = !entry.isIntersecting;
          if (entry.isIntersecting) {
            audioRef.current.currentTime = 0; // Setzt die Wiedergabezeit auf den Anfang
            playAudio(); // Startet die Wiedergabe
            onPausedChange(false);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={slideRef}
        className="w-full h-full absolute left-0 top-0 object-cover rounded-xl z-0 overflow-hidden"
      >
        <div
          className="w-full h-full absolute left-0 top-0 bg-cover bg-no-repeat bg-center rounded-xl"
          style={{ backgroundImage: `url(${imageUrl})`, filter: "blur(20px)" }}
        ></div>
        <div className="absolute flex flex-col left-0 top-0 h-full w-full px-10 pt-8 pb-20 items-center">
          <Headline headline={headline} fade={true} />
          <div className="aspect-square my-4">
            {imageUrl ? (
              <img src={imageUrl} className="w-full" alt="Podcast" />
            ) : null}
          </div>
          <audio autoPlay muted={isMuted} src={audioUrl} ref={audioRef} />
          <TextBox text={text} textsize="lg" position="center" />
        </div>
        <button
          onClick={handleMuteToggle}
          className="absolute bottom-4 right-4 text-xl"
        >
          <i
            className={`fa-solid ${
              isMuted ? "fa-volume-xmark" : "fa-volume-high"
            }`}
          ></i>
        </button>
      </div>
    </>
  );
}
