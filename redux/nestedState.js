const redux = require('redux')
const createStore = redux.createStore;

// IMMER -> npm i immer
const produce = require('immer').produce

const initialState = {
    name : "Mohit",
    address : {
        city : "Bhagalpur",
        state : "BIHAR",
        pincode : 813101
    }
}


const CITY_UPDATED = 'CITY_UPDATED';
const updateCity = (city) => {
    return {
        type : CITY_UPDATED,
        payload : city
    }
}


const reducer = (state = initialState , action) =>{
    switch(action.type){
        case CITY_UPDATED :
            /* DIFFICULT TO MAINTAIN THE NESTED TREE

            return {
                ...state,
                address : {
                    ...state.address,
                    city : action.payload,

                }
            }
            */ 

            // IMMER
            return produce(state , (draftState)=>{
                draftState.address.city = action.payload
            })

        default :
            return state
    }
}

const store = createStore(reducer);
console.log("initial State " , store.getState());

const unsubscribe = store.subscribe(() =>{
    console.log("updated state " , store.getState());
})


store.dispatch(updateCity("Banglore"));


unsubscribe();