import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

type FirebaseContextType = {
    db: Firestore;
}

export const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export function useFirebaseContext() {
    const context = useContext(FirebaseContext);

    if (context === undefined) {
        throw new Error("useFirebaseContext must be used within a FirebaseProvider");
    }

    return context;
}

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAwBPgPADV1uCJjt6MhVndumPGwlxVRphk",
        authDomain: "heise-shorts-deployment.firebaseapp.com",
        projectId: "heise-shorts-deployment",
        storageBucket: "heise-shorts-deployment.firebasestorage.app",
        messagingSenderId: "430790974516",
        appId: "1:430790974516:web:f1cd1a68c050547815be61",
        measurementId: "G-GJLHP01TWR"
    };
    const app = initializeApp(firebaseConfig);
    const [db] = useState<Firestore>(getFirestore(app));

    return (
        <FirebaseContext.Provider value={{ db }}>
            {children}
        </FirebaseContext.Provider>
    );
}