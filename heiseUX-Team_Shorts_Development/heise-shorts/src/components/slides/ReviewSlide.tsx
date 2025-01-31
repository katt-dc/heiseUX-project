import { useState } from "react";
import { useFirebaseContext } from '../../context/FirebaseContext';
import { doc, updateDoc } from "firebase/firestore";

export default function ReviewSlide({ shortId }: { shortId: number }) {
    const firebaseContext = useFirebaseContext();

    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);

    async function handleRating1Submit(newRating: number) {
        setRating1(newRating);
        // TODO: Send data to server
        const sessionId = document.cookie.split('; ').find(row => row.startsWith('sessionId='))!.split('=')[1];
        if (sessionId === undefined) {
            console.log("ERROR: No sessionId found in cookies");
            return;
        } else {
            try {
                // Reference the document in the "short-bewertungen" collection
                const docRef = doc(firebaseContext.db, "short-bewertungen", sessionId);

                // add the rating to the document
                await updateDoc(docRef, {
                    [`Short${shortId}_Rating1`]: newRating
                });


                console.log("Document successfully written with custom ID (Session ID):", sessionId);
            } catch (e) {
                console.error("Error adding document with custom ID (Session ID):", e);
            }
        }

        console.log(sessionId, shortId);
    }

    async function handleRating2Submit(newRating: number) {
        setRating2(newRating);
        // TODO: Send data to server
        const sessionId = document.cookie.split('; ').find(row => row.startsWith('sessionId='))!.split('=')[1];
        if (sessionId === undefined) {
            console.log("ERROR: No sessionId found in cookies");
            return;
        } else {
            try {
                // Reference the document in the "short-bewertungen" collection
                const docRef = doc(firebaseContext.db, "short-bewertungen", sessionId);

                // add the rating to the document as {shortIdRating1: newRating}
                await updateDoc(docRef, {
                    [`Short${shortId}_Rating2`]: newRating
                });
                

                console.log("Document successfully written with custom ID (Session ID):", sessionId);
            } catch (e) {
                console.error("Error adding document with custom ID (Session ID):", e);
            }
        }

        console.log(sessionId, shortId);
    }

    return (
        <div className="flex flex-col mx-10 h-full justify-center items-center py-10">
            <div className="text-2xl font-bold mb-7">Wie interessant fandest du den Inhalt dieses Shorts?</div>
            <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                    <button
                        key={i}
                        onClick={() => handleRating1Submit(i)}
                        className={`text-2xl ${rating1 >= i ? "text-yellow-400" : "white"} mx-1`}
                    >
                        ★
                    </button>
                ))}
            </div>
            <div className="text-2xl font-bold my-7">Wie visuell ansprechend fandest du diesen Short?</div>
            <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                    <button
                        key={i}
                        onClick={() => handleRating2Submit(i)}
                        className={`text-2xl ${rating2 >= i ? "text-yellow-400" : "white"} mx-1`}
                    >
                        ★
                    </button>
                ))}
            </div>
        </div>
    );
}