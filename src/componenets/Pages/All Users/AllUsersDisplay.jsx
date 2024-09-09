import './AllUsersDisplay.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, apiCall } from '../../slice/userSlicer';
import { useEffect,useState } from 'react';
import AddComponent from '../../AddModel/AddComponent';

const AllUsersDisplay = () => {
  const [open, setOpen] = useState(false)
  const[refresh,setRefresh]=useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchUser = (id) => {
    dispatch(getUserData(id));
    navigate(`/Users/${id}`);
  }

  const close = (close) => {
    setOpen(close)
  }

  const Fetching = useSelector((state) => state.userInfo.allUserData)
  const status = useSelector((state) => state.userInfo.status)
  const Error = useSelector((state) => state.userInfo.error)
  const fetchSearchedUser=useSelector((state)=>state.userInfo.searchedUser)

  

  useEffect(() => {
    dispatch(apiCall())
    if (refresh) {

      dispatch(apiCall())
      setRefresh(false) 

    }
  },[dispatch,refresh])

  if (status === 'loading') {
      return <p>loading......</p>
  }

  if (status === 'failed') {
    return <p>Error:{ Error}</p>
  }

  const handleAdd = () => {
    setOpen(true);
  }
 const usersToDisplay = fetchSearchedUser.length > 0 ? fetchSearchedUser : Fetching;

  return (
    <div className='user-Container'>
      <button className='refresh-button' onClick={()=>setRefresh(true)}>Refresh</button>
      <div className='user-table'>
        <Table hover className='tables'>
            <thead className='table-header'>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>userName</th>
              <th>fullDetails</th>
            </tr>
          </thead>
          <tbody>
            {usersToDisplay.map((user, index) => (
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
             <Button color='danger' className='Add-Button' onClick={handleAdd}>Add Users</Button>
              {open && <AddComponent close={close} />}
        
    
    </div>
  )
}

export default AllUsersDisplay