import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cakes/cakeSlice';

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
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecream--;
        })
    }
})

export default icecreamSlice.reducer
export const {ordered , restocked} = icecreamSlice.actions