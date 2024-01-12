const store = require('./app/store')
const cakeActions = require('./features/cakes/cakeSlice').cakeActions
const icecreamActions = require('./features/icecreams/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log("Initial state " , store.getState());

const unsubscribe = store.subscribe(()=>{
    // LOGGER will take care
    console.log("updated state " , store.getState());
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(5))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(5))

// unsubscribe()