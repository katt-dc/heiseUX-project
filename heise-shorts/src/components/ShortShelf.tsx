import React from "react";
import ShortTile from "./ShortTile";

const ShortsShelf = () => {
    const column = [];
    let numberofShortsInCategory = 5;// TODO hier noch algorhytmus einfügen um bestimmte shorts zu laden.

    const refs: React.RefObject<HTMLDivElement>[] = [];
    for (let i = 0; i < numberofShortsInCategory; i++) {
        //die keys können später verwendet werden um shorts anhand einer id zu identifizieren
        refs.push(React.createRef<HTMLDivElement>());
    }

    for (let i = 0; i < numberofShortsInCategory; i++){
        column.push(
            <div key={i} ref={refs[i]} className="flex-row w-[200px] overflow-x-scroll snap-x snap-mandatory hide-scrollbar">
                <ShortTile/>
            </div>
        );
    }
    return (
        
    <>
        <div className="display: column overflow: auto">
            <h1>Shorts</h1>

            <div className="display: flex overflow: auto">
                {column}
            </div>
        </div>
    </>
    );

}
export default ShortsShelf;