import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../componenets/slice/userSlicer.js'

const store = configureStore({
    reducer: {
        userInfo: userReducer,
    },
})

export default store;