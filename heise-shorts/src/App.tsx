import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Shorts from './components/ShortsPage'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shorts' element={<Shorts/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
