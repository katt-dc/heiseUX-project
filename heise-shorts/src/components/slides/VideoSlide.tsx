import {useEffect, useRef, useState} from "react";
import Headline from "../text-components/Headline";
import TextBox from "../text-components/TextBox";

interface VideoSlideProps {
    url: string;
    headline: string;
    text: string;
    textsize: string;
    boxposition: string;
}

export default function VideoSlide({
   url,
   headline,
   text,
   textsize,
   boxposition,
}: VideoSlideProps) {

    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const slideRef = useRef<HTMLDivElement>(null); // Ref für den Slide Container

    const toggleMute = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const currentState = videoElement.muted;
            videoElement.muted = !currentState;
            setIsMuted(!currentState);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsMuted(!entry.isIntersecting); // Video stummschalten, wenn nicht sichtbar
            if (videoRef.current) {
                videoRef.current.muted = !entry.isIntersecting;
                if (entry.isIntersecting) {
                    videoRef.current.currentTime = 0; // Setzt die Wiedergabezeit auf den Anfang
                    videoRef.current.play(); // Startet die Wiedergabe
                }
            }
        }, { threshold: 0.5 });

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
        <div ref={slideRef}>
            <video
                ref={videoRef}
                src={url}
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-full absolute left-0 top-0 object-cover rounded-xl z-0"
            />

            <div className="absolute flex flex-col left-0 top-0 h-full w-full px-10 pt-8 pb-20 items-center">
                {(headline !== "" && headline) ? (
                    <Headline headline={headline} fade={true} />
                ) : null}
                {(text !== "" && text) ? (
                    <TextBox text={text} textsize={textsize} position={boxposition} />
                ) : null}
            </div>
            <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4"
            >
                <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
            </button>
        </div>
    );
}