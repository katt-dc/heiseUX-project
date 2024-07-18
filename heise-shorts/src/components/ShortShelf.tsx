import React from "react";
import ShortTile from "./ShortTile";
import { Structure } from "./Structure.tsx";

const ShortsShelf = () => {
    const column = [];
    let numberofShortsInCategory = Structure.length;// TODO hier noch algorhytmus einfügen um bestimmte shorts zu laden.

    const refs: React.RefObject<HTMLDivElement>[] = [];
    for (let i = 0; i < numberofShortsInCategory; i++) {
        //die keys können später verwendet werden um shorts anhand einer id zu identifizieren
        refs.push(React.createRef<HTMLDivElement>());
    }

    for (let i = 0; i < numberofShortsInCategory; i++){
        if(!(Structure[i].id == 4 || Structure[i].id == 7)){
            column.push(
                <div key={i} ref={refs[i]} className="pl-5 pr-5">
                    <ShortTile
                        slide={Structure[i].slides[0]}
                        shortId = {Structure[i].id}
                    />
                </div>
            );
        }
    }
    return (
        
    <>
        <div className="display: collumn bg-heise-light-grey w-full">
            <h1
            className=" p-5"
            >Shorts</h1>
            <div className="display: flex overflow-auto hide-scrollbar w-full h-full pb-5">
                {column}
            </div>
        </div>
    </>
    );

}
export default ShortsShelf;