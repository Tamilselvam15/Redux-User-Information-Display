import { useDispatch, useSelector } from 'react-redux'
import './Information.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { apiCall } from '../../slice/userSlicer';
import { Spinner } from 'reactstrap';

const Information = () => {
  const dispatch=useDispatch()
  const { id } = useParams()
   const allUserData = useSelector((state) => state.userInfo.allUserData)

  const userInformation = allUserData.find((user) => user.id === Number(id))
  const userArrayLength = allUserData.length;//to be change
  useEffect(() => {
    if (userArrayLength === 0) {
       dispatch(apiCall())
     }
    },[userArrayLength,dispatch])

      return (
        <div className='info-container'>
          {userInformation ? (
            <div className='user'>
              <div className='user-frame'>

                <div className='basic-detail'>
                  <p className='detail'><span>User-Id :</span>{userInformation.id}</p>
                  <p className='detail'><span>Name :</span>{userInformation.name}</p>
                  <p className='detail'><span>UserName :</span>{userInformation.username}</p>
                  <p className='detail'><span>Email :</span>{userInformation.email}</p>
                </div>

                <h4 className='heading'>Address:</h4>

                <div className='address-details'>
                  <p className='detail'><span>City-Name :</span>{userInformation.address.city}</p>
                  <p className='detail'><span>Street :</span>{userInformation.address.street}</p>
                </div>

                <h4 className='heading'>Company Datails :</h4>

                <div className='company-details'>
                  <p className='detail'><span>Phone :</span>{userInformation.phone}</p>
                  <p className='detail'><span>WebSite :</span>{userInformation.website}</p>
                  <p className='detail'><span>Company-Bs :</span>{userInformation.company.bs}</p>
                </div>
              </div>
             

          </div>

          ) : (
            <>
              <Spinner type='grow' color='primary'> Loading... </Spinner>
              <Spinner type='grow' color='secondary'> Loading... </Spinner>
              <Spinner type='grow' color='success'> Loading... </Spinner>
              <Spinner type='grow' color='danger'> Loading... </Spinner>
              <Spinner type='grow' color='warning'> Loading... </Spinner>
              <Spinner type='grow' color='dark'> Loading... </Spinner>
              
          </>
          )}   
        </div>
      )
}

export default Information