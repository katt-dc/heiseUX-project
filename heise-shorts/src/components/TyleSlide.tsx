import { useState } from "react";

interface TyleSlideProps {
  url: string;
  headline: string;
}

export default function TyleSlide({ url, headline }: TyleSlideProps) {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <>
      <video
        src={url}
        loop
        muted={isMuted}
        className="w-full h-full absolute bg-cover bg-no-repeat left-0 top-0 object-cover rounded-xl z-0"
      />
      <div
        className={`w-full h-full absolute left-0 top-0 bg-cover bg-no-repeat bg-center rounded-xl flex items-end`}
        style={{ backgroundImage: `url(${url})` }}
      >
        <div className="bg-gradient-to-t from-black bg-opacity-80 h-4/6 w-full rounded-xl flex items-end">
          <div className=" text-l font-bold m-2">{headline}</div>
        </div>
      </div>
    </>
  );
}
