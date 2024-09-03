import { Link } from "react-router-dom"
import './Navbar.css'

const Home = () => {
  return (
    <div className="Header">
      <div className="Header-title">
        <h1><marquee >WellCome To The Userspage</marquee></h1>
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