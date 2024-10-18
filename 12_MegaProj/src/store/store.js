import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
// 5. during debugging

// 0: store krne se pahle auth and conf file setup kr lena
// 1: configureStore memory banata hai
// 2: Store ko sare reducers chahiye
// 3: Slice banao iska basic structure likh ke


const store = configureStore({
    reducer:{

        // added after debugging
        auth: authSlice,
        // todo: add more slices here for posts
    }
})

export default store;

// Head to ./authSlice.js