import React from "react";
import ShortTile from "./ShortTile";
import { Structure } from "./Structure.tsx";

const ShortsShelf = () => {
  const column = [];
  let numberofShortsInCategory = Structure.length; // TODO hier noch algorhytmus einfügen um bestimmte shorts zu laden.

  const refs: React.RefObject<HTMLDivElement>[] = [];
  for (let i = 0; i < numberofShortsInCategory; i++) {
    //die keys können später verwendet werden um shorts anhand einer id zu identifizieren
    refs.push(React.createRef<HTMLDivElement>());
  }

  for (let i = 0; i < 6; i++) {
    if (!(Structure[i].id == 4 || Structure[i].id == 7)) {
      column.push(
        <div key={i} ref={refs[i]} className="pl-[2vw] pr-[2vw] h-full">
          <ShortTile slide={Structure[i].slides[0]} shortId={Structure[i].id} />
        </div>
      );
    }
  }
  return (
    <>
      <div className="bg-heise-light-grey w-full flex flex-col">
        <h1 className=" pl-[2vw] pt-[1vw] text-base sm:text-sm md:text-base">Shorts</h1>
        <h2 className="pl-[2vw] pb-[1vw] text-xl sm:text-base md:text-xl">Aktuelle Themen im Kurzformat</h2>
        <div className="flex flex-row w-full pb-5 overflow-auto hide-scrollbar sm:overflow-visible">
          {column}
        </div>
      </div>
    </>
  );
};
export default ShortsShelf;
