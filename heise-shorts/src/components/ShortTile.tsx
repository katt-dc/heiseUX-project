//Kleinformat eines shorts
import { SlideData } from "./type.tsx";
import TyleSlide from "./TyleSlide.tsx";
import { useParams } from "react-router-dom";
import { TyleSlideData } from "./type.tsx";
import { Link } from "react-router-dom";
interface ShortTyleProps {
  slide: SlideData;
  shortId: string;
  //onEnded: () => void; //Funktionsausfruf wenn slide zu Ende
}

function ShortTile({ slide, shortId }: ShortTyleProps) {

    //TODO Möglichkeit einfügen zu bestimmten shorts zu kommen
    const redirectToShort = (path: string) => {
        const newWindow = window.open(path, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    const onClickRedirect = (url: string): (() => void) => () => redirectToShort(url)

    const {id}= useParams();

    const currentSlide = slide;
    const image = (currentSlide as TyleSlideData).imageUrl || (currentSlide as TyleSlideData).url;
    console.log((currentSlide as TyleSlideData).url);
    console.log((currentSlide as TyleSlideData).title);
    return (
      <Link 
      className="flex items-center justify-center rounded-xl bg-heise-light-grey w-[25vh] h-[45vh] relative"
      to={"/shorts"}
      state={{from: shortId}}
      >
        <TyleSlide
          url={image}
          headline={(currentSlide as TyleSlideData).title}
        />
      </Link>
    );
}
  
  export default ShortTile;