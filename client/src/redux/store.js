import { configureStore, } from '@reduxjs/toolkit'
import authReducer from './reducer/auth'
import createReducer from './reducer/cart'
export default configureStore({
    reducer: {
        auth: authReducer,
        cart: createReducer
    },
})