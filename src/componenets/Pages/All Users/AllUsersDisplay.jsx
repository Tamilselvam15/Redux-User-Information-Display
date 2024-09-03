/* eslint-disable react/prop-types */
import './AllUsersDisplay.css'
import { Table,Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../slice/userSlicer';

const AllUsersDisplay = ({ userData }) => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const searchUser = async(id) => {
    dispatch(getUserData(id));
    navigate(`/Users/${id}`)
  }


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
            {userData.map((user, index) => (
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