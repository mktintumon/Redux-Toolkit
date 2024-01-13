import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCakes: 10
}


// automatically generates action creators and action types that correspond to the reducers and state.
const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})


export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions