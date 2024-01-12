const { cakeActions } = require('../cakes/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecream: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--;
        },
        restocked: (state, actions) => {
            state.numOfIcecream += actions.payload
        },
    },

    /* NOT RECOMMENDED

    extraReducers : {
        ['cake/ordered'] : (state) =>{
            state.numOfIcecream--;
        }
    }
    */

    // I WANT --> ON EVERY CAKE ORDERED , I WILL OFFER ONE ICECREAM
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecream--;
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions