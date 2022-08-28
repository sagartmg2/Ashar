import { configureStore, } from '@reduxjs/toolkit'
import authReducer from './reducer/auth'
import createReducer from './reducer/cart'


import createSagaMiddleware from 'redux-saga'

import { authSaga } from './saga/auth'

let sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        auth: authReducer,
        cart: createReducer
    },
    middleware: [
        sagaMiddleware
    ]
})

sagaMiddleware.run(authSaga);
