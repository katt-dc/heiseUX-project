import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseProvider } from './context/FirebaseContext.tsx'

// ------------------------------
// import Cookies from "js-cookie";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore"; 

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAwBPgPADV1uCJjt6MhVndumPGwlxVRphk",
//   authDomain: "heise-shorts-deployment.firebaseapp.com",
//   projectId: "heise-shorts-deployment",
//   storageBucket: "heise-shorts-deployment.firebasestorage.app",
//   messagingSenderId: "430790974516",
//   appId: "1:430790974516:web:f1cd1a68c050547815be61",
//   measurementId: "G-GJLHP01TWR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// var sessionId = Cookies.get("sessionId");

// if (!sessionId) {
//   sessionId = crypto.randomUUID(); // Generate a unique ID
//   Cookies.set("sessionId", sessionId, { expires: 7 }); // Set cookie for 7 days
//   console.log("Generated new Session ID:", sessionId);
// } else {
//   try {
//     // Use the session ID as the custom document ID
//     const customDocId = sessionId;

//     // Reference the document in the "short-bewertungen" collection
//     const docRef = doc(db, "short-bewertungen", customDocId);

//     // Set the document data
//     await setDoc(docRef, {
//       short1: [1, 2],
//       short2: [, 2],
//       short3: [1, 2],
//     });

//     console.log("Document successfully written with custom ID (Session ID):", customDocId);
//   } catch (e) {
//     console.error("Error adding document with custom ID (Session ID):", e);
//   }
// }
// ------------------------------

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </BrowserRouter>,
)
