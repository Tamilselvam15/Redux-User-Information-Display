import { useSelector } from 'react-redux'
import './Information.css'
import { useParams } from 'react-router-dom'
const Information =  () =>  {
  const allUserData = useSelector((state) => state.userInfo.allUserData)
  const {id}= useParams()
  const Information = allUserData.find((user) => user.id === Number(id))
  console.log(Information)
  

      return (
        <div className='info-container'>
          {Information ? (
            <div className='user'>
              <div className='user-frame'>

                <div className='basic-detail'>
                  <p className='detail'><span>User-Id :</span>{Information.id}</p>
                  <p className='detail'><span>Name :</span>{Information.name}</p>
                  <p className='detail'><span>UserName :</span>{Information.username}</p>
                  <p className='detail'><span>Email :</span>{Information.email}</p>
                </div>

                <h4 className='heading'>Address:</h4>

                <div className='address-details'>
                  <p className='detail'><span>City-Name :</span>{Information.address.city}</p>
                  <p className='detail'><span>Street :</span>{Information.address.street}</p>
                </div>

                <h4 className='heading'>Company Datails :</h4>

                <div className='company-details'>
                  <p className='detail'><span>Phone :</span>{Information.phone}</p>
                  <p className='detail'><span>WebSite :</span>{Information.website}</p>
                  <p className='detail'><span>Company-Bs :</span>{Information.company.bs}</p>
                </div>
              </div>
             

          </div>

          ): ('no data found')}   
        </div>
      )
}

export default Information