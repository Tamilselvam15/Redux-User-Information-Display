import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allUserData: [],
    selectedUser: null,
    searchedUser:[],
    loading: 'idle',
    error:null
    
}

export const apiCall = createAsyncThunk(
    'users/apiCall',
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data;
    }
)


const userSlice = createSlice({
    name: 'usersdata',
    initialState,
    reducers: {
        getUserData: (state, action) => {
            state.selectedUser=state.allUserData.find((user=>user.id===action.payload))
        },

        addUserData: (state,action)=> {
           state.allUserData = [...state.allUserData, action.payload];
        },
        searchedUser: (state, action) => {
            state.searchedUser = state.allUserData.filter((user) =>
                user.name.toLowerCase().includes(action.payload.toLowerCase()));
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(apiCall.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(apiCall.fulfilled, (state,action) => {
                state.status = 'succed';
                state.allUserData=action.payload;
            })
            .addCase(apiCall.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
        
}
   
})

export const { getUserData,addUserData,searchedUser } = userSlice.actions;

export default userSlice.reducer; 