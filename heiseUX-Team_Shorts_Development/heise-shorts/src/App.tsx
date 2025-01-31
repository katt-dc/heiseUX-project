import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Shorts from './components/ShortsPage'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import StudyModal from './components/StudyModal';
import { useFirebaseContext } from './context/FirebaseContext';
import { doc, setDoc } from "firebase/firestore"; 
import ImpressumPage from './components/ImpressumPage';


function App() {
  const firebaseContext = useFirebaseContext();

  const [studySubmitted, setStudySubmitted] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("sessionId")) {
      setStudySubmitted(true);
    }
  }, []);

  async function handleSubmit(age: number, gender: string, job: string, techInterest: boolean) {
    setStudySubmitted(true);
    const newSessionId = Math.random().toString(36).substring(2);
    document.cookie = `sessionId=${newSessionId}`;
    console.log("Age: " + age + "Gender: " + gender + "Job: " + job + "Tech Interest: " + techInterest);

    // Send data to Firebase
    try {
      // Reference the document in the "short-bewertungen" collection
      const docRef = doc(firebaseContext.db, "short-bewertungen", newSessionId);

      // Set the document data
      await setDoc(docRef, {
        age: age,
        gender: gender,
        job: job,
        techInterest: techInterest,
        time: new Date().toISOString()
      });

      console.log("Document successfully written with custom ID (Session ID):", newSessionId);
    } catch (e) {
      console.error("Error adding document with custom ID (Session ID):", e);
    }
  }

  return (
    <>
      <Navbar />
      {studySubmitted ? null : <StudyModal onSubmit={handleSubmit} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shorts' element={<Shorts />} />
        <Route path="/impressum" element={<ImpressumPage />} />
      </Routes>
    </>
  )
}

export default App
