import { useState, useRef, useEffect, useCallback } from "react";

interface PodcastSlideProps {
    headline: string;
    text: string;
    imageUrl: string;
    audioUrl: string;
}

export default function PodcastSlide({ headline, text, imageUrl, audioUrl }: PodcastSlideProps) {
    const [isPlaying, setIsPlaying] = useState(true);

    const audioRef = useRef(new Audio());
    const progressBarRef = useRef<HTMLInputElement>(null);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const playAnimationRef = useRef(0);

    const repeat = useCallback(() => {
        if (!audioRef.current) return;
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        if (!progressBarRef.current) return;
        progressBarRef.current.value = currentTime.toString();
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(parseFloat(progressBarRef.current.value) / duration) * 100}%`
        );

        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
            audioRef.current.pause();
            cancelAnimationFrame(playAnimationRef.current);
        }
    }, [isPlaying, audioRef, repeat]);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const handleProgressChange = () => {
        if (progressBarRef.current) {
            audioRef.current.currentTime = parseFloat(progressBarRef.current.value);
        }
    };

    const onLoadedMetadata = () => {
        if (progressBarRef.current) {
            const seconds = audioRef.current.duration;
            setDuration(seconds);
            progressBarRef.current.max = seconds.toString();
        }
    };

    const formatTime = (time: number) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    return (
        <>
            <div className="line-clamp-[25] text-justify mx-10">
                <h1 className="text-xl font-bold mb-5 mx-5">{headline}</h1>
                <div className="aspect-square mb-2">
                    {imageUrl ? <img src={imageUrl} className="w-full" /> : null}
                </div>
                <audio autoPlay src={audioUrl} ref={audioRef} onLoadedMetadata={onLoadedMetadata} />

                <div className="relative text-center mb-3">
                    <input type="range" ref={progressBarRef} onChange={handleProgressChange} defaultValue="0" className="w-full h-[0.15rem] bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2  [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full" />
                    <div className="relative w-full">
                        <span className="time current absolute left-0 text-xs">{formatTime(timeProgress)}</span>
                        <span className="time absolute right-0 text-xs">{formatTime(duration)}</span>
                    </div>
                    <button onClick={togglePlayPause} className="bg-heise-white hover:bg-gray-400 text-heise-light-grey font-bold rounded-full aspect-square h-14 text-2xl mt-1">
                        {!isPlaying ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
                    </button>
                </div>

                <p className="text-xs mb-16">{text}</p>
            </div>
        </>
    );
}