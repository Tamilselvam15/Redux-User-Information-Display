import { Link } from "react-router-dom"
import './Navbar.css'
import { useDispatch } from "react-redux"
import { searchedUser } from "../slice/userSlicer"


const Home = () => {
  const dispatch=useDispatch()
  const handleSearch = (e) => {
    let val=e.target.value
    dispatch(searchedUser(val))
  }

  return (
    <div className="Header">
      <div className="Header-title">
        <h1><marquee >WellCome To The UsersPage</marquee></h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Serach Users..." onChange={handleSearch}/>
      </div>

      <div className="pages">
        <Link to='/' className="url" >Home</Link>
        <Link to='/Users' className="url" >AllUsersDisplay</Link>
        <Link to='/Users/:id' className="url" >Information</Link>
      </div>

    </div>
  )
}

export default Home