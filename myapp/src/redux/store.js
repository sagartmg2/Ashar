import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counter'
import createSagaMiddleware from 'redux-saga'

import { authSaga } from './saga/auth'

let sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: [
        sagaMiddleware
    ]
})

sagaMiddleware.run(authSaga);


