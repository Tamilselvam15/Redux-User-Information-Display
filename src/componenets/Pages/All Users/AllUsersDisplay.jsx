import './AllUsersDisplay.css'
import { Table,Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { getUserData, setAllUsersData } from '../../slice/userSlicer';
import { useEffect } from 'react';

const AllUsersDisplay = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const searchUser = async(id) => {
    dispatch(getUserData(id));
    navigate(`/Users/${id}`)
  }


  const apiCall = async () => {
    try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/users")
       dispatch(setAllUsersData(response.data))
    } catch (error) {
      console.error(`Error Fetching user Data :${error}`)
    }
  }
  const Fetching = useSelector((state) => state.userInfo.allUserData);

  useEffect(() => {
    apiCall()
  },[])


  return (
    <div className='user-Container'>
      <div className='user-table'>
        <Table   hover>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>userName</th>
              <th>fullDetails</th>
            </tr>
          </thead>
          <tbody>
            {Fetching.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td className='view-button'><Button color='success' onClick={()=>searchUser(user.id)} > viewDetails</Button></td>
              </tr>
            ))}
          </tbody>

        </Table>
      </div>
     

    </div>
  )
}

export default AllUsersDisplay