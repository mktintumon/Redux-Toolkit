const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;



// LOGGER will show --> prevState , action , nextState
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


// CONSTANTS
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';

const ICECREAEM_ORDERED = 'ICECREAEM_ORDERED';
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK';


// ACTIONS CREATOR
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    };
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCK,
        payload: qty
    };
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAEM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCK,
        payload: qty
    }
}


// INITIAL STATES
const initialStateCakes = {
    numOfCakes: 10,
    numOfCandles: 20,
};

const initialStateIceCreams = {
    numOfIceCreams: 50
};



// REDUCERS
const cakeReducer = (state = initialStateCakes, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
                numOfCandles: state.numOfCandles - 2,
            };
        case CAKE_RESTOCK:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
                numOfCandles: state.numOfCandles + 2 * (action.payload),
            }
        default:
            return state;
    }
};


const iceCreamReducer = (state = initialStateIceCreams, action) => {
    switch (action.type) {
        case ICECREAEM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            };
        case ICECREAM_RESTOCK:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload,
            }
        default:
            return state;
    }
};


const rootreducer = combineReducers({
    cakes: cakeReducer,
    iceCreams: iceCreamReducer,
})


// STORE  
const store = createStore(rootreducer, applyMiddleware(logger));
console.log("Initial state ", store.getState());


//  NOW WE HAVE LOGGER MIDDLEWARE TO THIS
const unsubscribe = store.subscribe(() => {
    //console.log("Updated state ", store.getState());
});



// NOT MUCH NECESSARY TO USE binding
const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.restockCake(5);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(10);


// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5))
// store.dispatch(orderIceCream());
// store.dispatch(orderIceCream());
// store.dispatch(restockIceCream(10));

unsubscribe();
