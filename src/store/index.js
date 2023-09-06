import { configureStore,createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
name:'counter',
initialState:{counter:0},
reducers:{
    incrementFn(state,action){
         state.counter++;
         
    },
    decrementFn(state,action){
         state.counter--;
    },
    AddByFn(state,action){
         state.counter+=action.payload;
    }
}
});

export const actions=counterSlice.actions;

const store=configureStore({
    reducer:counterSlice.reducer
});

export default store;
