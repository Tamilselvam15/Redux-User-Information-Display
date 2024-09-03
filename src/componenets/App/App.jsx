import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '../Nav/Navbar'
import Information from '../Pages/specificUser/Information'
import AllUsersDisplay from '../Pages/All Users/AllUsersDisplay'
import Home from '../Pages/Home/Home'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <div className='container'>
   
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Users' element={<AllUsersDisplay  />} />
          <Route path='/Users/:id' element={<Information />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
