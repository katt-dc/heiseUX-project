import { useEffect } from "react";
import Headline from "../text-components/Headline";

interface TextSlideProps {
  headline: string;
  text: string;
  url: string;
  textsize: string;
  onDurationChange: (duration: number) => void;
}

export default function TextSlide({
  headline,
  text,
  url,
  textsize,
  onDurationChange,
}: TextSlideProps) {

  useEffect(() => {
    if (text) {
      onDurationChange(0); 
    }
  }, [onDurationChange]);

  return (
    <div className="flex flex-col mx-10 h-full justify-center items-center py-10">
      {headline !== "" ? (
        <Headline headline={headline} fade={false} />
      ) : null}
      {url ? <img src={url} className="w-full h-auto mb-4" alt="Slide Image" /> : null}
      <div className="flex-1 flex items-center overflow-hidden leading-tight">
        <p className={`text-${textsize}`}>{text}</p>
      </div>
    </div>
  );
}
