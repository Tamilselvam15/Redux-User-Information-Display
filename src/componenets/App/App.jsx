import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '../Nav/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Information from '../Pages/specificUser/Information'
import AllUsersDisplay from '../Pages/All Users/AllUsersDisplay'
import Home from '../Pages/Home/Home'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAllUsersData } from '../slice/userSlicer'


function App() {
  const [userData, setUserData] = useState([])
  const dispatch = useDispatch();

  const apiCall = async () => {
    try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUserData(response.data)
       dispatch(setAllUsersData(response.data))
    } catch (error) {
      console.error(`Error Fetching user Data :${error}`)
    }
   
   

  }


  useEffect(() => {
    apiCall()
  },[])

  return (
    <div className='container'>
   
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Users' element={<AllUsersDisplay userData={userData} />} />
          <Route path='/Users/:id' element={<Information />} />
        </Routes>
      </BrowserRouter>
     

    </div>
  )
}

export default App
