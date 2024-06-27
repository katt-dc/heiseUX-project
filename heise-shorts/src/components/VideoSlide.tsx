interface VideoSlideProps {
  url: string;
  text?: string;
}

export default function VideoSlide({ url, text }: VideoSlideProps) {
  return (
    <div>
      <video
        src={url}
        autoPlay
        loop
        muted
        className="w-full h-full absolute left-0 top-0 object-cover rounded-xl"
      />
      {text && (
        <div
          className="text-xl absolute top-10
         left-0 m-4 text-white text-justify-left mx-10 font-bold bg-heise-light-grey bg-opacity-60 p-4 rounded-xl "
        >
          {text}
        </div>
      )}
    </div>
  );
}
