import { TextBoxProps } from "../text-components/TextBox";
import TextBox from "../text-components/TextBox";
import Headline from "../text-components/Headline";

interface FullScreenImageWithTextSlideProps {
  url: string;
  headline: string;
  text: string;
  textsize: TextBoxProps["textsize"];
  boxposition: TextBoxProps["position"];
}

export default function FullScreenImageWithTextSlide({
  url,
  headline,
  text,
  textsize,
  boxposition,
}: FullScreenImageWithTextSlideProps) {
  return (
    <div
      className={`w-full h-full absolute left-0 top-0 bg-cover bg-no-repeat bg-center rounded-xl px-10
        flex flex-col items-center pt-8 pb-20`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="flex flex-col h-full z-30 pointer-events-none">
        {headline !== "" && headline ? (
          <Headline headline={headline} fade={true} />
        ) : null}
        {text !== "" && text ? (
          <TextBox text={text} textsize={textsize} position={boxposition} />
        ) : null}
      </div>
    </div>
  );
}
