//rendert ein einzelnes Bild/Slide

interface ImageSlideProp {
  url: string;
}

export default function ImageSlide({ url }: ImageSlideProp) {
  return (
    <div>
      <img
        src={url}
        alt="Slide"
        className="ww-full h-full absolute left-0 top-0 object-cover rounded-xl"
      />
    </div>
  );
}
