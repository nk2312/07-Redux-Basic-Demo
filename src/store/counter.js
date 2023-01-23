import { createSlice } from "@reduxjs/toolkit";

const INITIAL_COUNTER_STATE={
    counter:0,
    showCounter:true
}

const counterSlice=createSlice({
    name:'counter',
    initialState:INITIAL_COUNTER_STATE,
    reducers:{
        increment(state){
            state.counter=state.counter+1;
        },
        decrement(state){
            state.counter=state.counter-1; 
        },
        increase(state,action){
            state.counter=state.counter+action.payload;
        },
        toogle(state){
            state.showCounter=!state.showCounter;
        }

    }
})
export const counterActions=counterSlice.actions
export default counterSlice;