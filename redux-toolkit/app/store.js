const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cakes/cakeSlice')
const icecreamReducer = require('../features/icecreams/icecreamSlice')
const userReducer = require('../features/user/userSlice')

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

module.exports = store