/* eslint-disable react/prop-types */
import { useState } from 'react'
import './AddComponent.css'
import {Button} from 'reactstrap'
import { useDispatch } from 'react-redux'
import { addUserData } from '../slice/userSlicer'
const AddComponent = ({close}) => {
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState({ id: '', name: '', username: '', email: '',address:{ city: '', street: ''}, companyName: '', phone: '', website: '',company:{ bs: '' }})
   
    const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
        const field = name.split('.')[1];
        setNewUser((prevState) => ({
            ...prevState,
            address: {

            ...prevState.address,
            [field]: value
            }
        }));

    } else if (name.startsWith('company.')) {
        const field = name.split('.')[1];
           setNewUser((prevState) => ({
            ...prevState,
            company: {
            ...prevState.company,
            [field]: value
            }
           }));
        
    } else {
        setNewUser((prevState) => ({
            ...prevState,
            [name]: name === 'id' ? Number(value) : value
        }));
    }
}


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUserData(newUser))
        console.log(newUser)
        close(false)
    }

  return (
      <div className="add-container">
          <form  className='form-details' onSubmit={handleSubmit}>
              <h4 className='tilte'>Basic Details</h4>
              <div className="basic-details">
                <input type="number"className='input1'onChange={handleChange} name='id' value={newUser.id} placeholder='select Your Id' />
                <input type="text"  className='input1'onChange={handleChange} name='name' value={newUser.name} placeholder='Enter Your name..' />
                <input type="text"  className='input1'onChange={handleChange} name='username' value={newUser.username} placeholder='Enter Your Username ' />
                <input type="email" className='input1'onChange={handleChange} name='email' value={newUser.email} placeholder='Enter Your Email ' />

              </div>
                <h4 className='tilte'>Adress</h4>
              <div className="Address-details">
                  <input type="text" className='input1' onChange={handleChange} name='address.city' value={newUser.city} placeholder='Enter Your City-Name ' />
                  <input type="text" className='input1' onChange={handleChange} name='address.street' value={newUser.street} placeholder='Enter Your StreetName ' />
              </div>
                <h4 className='tilte'>Company-Deatails</h4>

              <div className="Company-details">
                  <input type="text" className='input1' onChange={handleChange} name='companyName' value={newUser.companyName}  placeholder='Enter Your Company-name ' />
                  <input type="text" className='input1'  onChange={handleChange} name='phone' value={newUser.phone}  placeholder='Enter Your phoneNumber ' />
                  <input type="text" className='input1' onChange={handleChange} name='website' value={newUser.website}  placeholder='Enter Your company Website ' />
                  <input type="text" className='input1' onChange={handleChange} name='company.bs' value={newUser.bs}  placeholder='Enter Your company bs ' />

              </div>
              <Button color='warning' className='add-button' type='submit'>Add</Button>
          </form>
    </div>
  )
}

export default AddComponent