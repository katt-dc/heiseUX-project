import TextBox from "../text-components/TextBox";

interface FullScreenImageSlideProps {
  url: string;
  headline: string;
}

export default function FullScreenImageSlide({
  url,
  headline,
}: FullScreenImageSlideProps) {
  return (
    <>
      <div
        className={`w-full h-full absolute left-0 top-0 bg-cover bg-no-repeat bg-center rounded-xl px-10
        flex flex-col items-center`}
        style={{ backgroundImage: `url(${url})` }}
      >
        <TextBox text={headline} textsize="4xl" position="center" />
      </div>
    </>
  );
}
