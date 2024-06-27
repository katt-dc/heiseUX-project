//Kleinformat eines shorts

import ImageSlide from "./ImageSlide";
import { useParams } from "react-router-dom";



function ShortTile() {

    //TODO Möglichkeit einfügen zu bestimmten shorts zu kommen
    const redirectToShort = (path: string) => {
        const newWindow = window.open(path, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    const onClickRedirect = (url: string): (() => void) => () => redirectToShort(url)

    const {id}= useParams();
    //const parentShortData = shortsData.find(short => short.id === id);//platzhalter zum laden von short daten aus der json

    //TODO Für die ImageSlide di erste seite des shorts laden
    return (
      <div 
      className="flex items-center justify center rounded-xl bg-heise-light-grey min-w-40 max-w-40 min-h-[36vh]"
      onClick={onClickRedirect("/shorts")}
      >
          <ImageSlide url={"https://placehold.co/750x1334/323232/FFFFFF/png"} />
      </div>
    );
}
  
  export default ShortTile;