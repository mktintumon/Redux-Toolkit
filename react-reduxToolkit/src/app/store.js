import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cakes/cakeSlice'
import icecreamReducer from '../features/icecreams/icecreamSlice'
import userReducer from '../features/user/userSlice'

// const reduxLogger = require('redux-logger')
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : icecreamReducer,
        user : userReducer
    },
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;