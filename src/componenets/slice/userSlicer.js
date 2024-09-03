import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allUserData: [],
    selectedUser:null
}

const userSlice = createSlice({
    name: 'usersdata',
    initialState,
    reducers: {
        setAllUsersData: (state, action) => {
            state.allUserData = action.payload;
        },
        
        getUserData: (state, action) => {
            state.selectedUser=state.allUserData.find((user=>user.id===action.payload))
        }
    }
})

export const { getUserData,setAllUsersData } = userSlice.actions;

export default userSlice.reducer; 