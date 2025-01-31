import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyCxf0792PcElFCu_MIMY-YEqwUUiEhWCr8",
    authDomain: "leseleiste-heiseux.firebaseapp.com",
    projectId: "leseleiste-heiseux",
    storageBucket: "leseleiste-heiseux.firebasestorage.app",
    messagingSenderId: "46981491430",
    appId: "1:46981491430:web:3c2abdd5c186447c496927",
    measurementId: "G-F826YZVN4V"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
try {
const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
});
console.log("Document written with ID: ", docRef.id);
} catch (e) {
console.error("Error adding document: ", e);
}