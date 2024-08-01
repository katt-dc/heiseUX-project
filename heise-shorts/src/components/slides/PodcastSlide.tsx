import { useRef, useEffect, useState } from "react";
import Headline from "../text-components/Headline";
import TextBox from "../text-components/TextBox";

interface PodcastSlideProps {
  headline: string;
  text: string;
  imageUrl: string;
  audioUrl: string;
}

export default function PodcastSlide({
  headline,
  text,
  imageUrl,
  audioUrl,
}: PodcastSlideProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const slideRef = useRef<HTMLDivElement>(null); // Ref für den Slide Container
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const handleTimeUpdate = () => {
      const currentTime = audioElement.currentTime;
      if (progressBarRef.current) {
        progressBarRef.current.value = currentTime.toString();
        progressBarRef.current.style.setProperty(
          "--range-progress",
          `${(parseFloat(progressBarRef.current.value) / 30) * 100}%`
        );
      }
      if (currentTime >= 30) {
        audioElement.currentTime = 0;
        audioElement.play();
      }
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.play();

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleMuteToggle = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsMuted(!entry.isIntersecting); // Audio stummschalten, wenn nicht sichtbar
        if (audioRef.current) {
          audioRef.current.muted = !entry.isIntersecting;
          if (entry.isIntersecting) {
            audioRef.current.currentTime = 0; // Setzt die Wiedergabezeit auf den Anfang
            audioRef.current.play(); // Startet die Wiedergabe
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
          <TextBox text={text} textsize="sm" position="center" />
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
