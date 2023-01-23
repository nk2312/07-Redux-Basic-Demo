import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH_STATE={isLoggedIn:false}

const AuthSlice=createSlice({
    name:'authentication',
    initialState:INITIAL_AUTH_STATE,
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        }
    }
})

export const authActions=AuthSlice.actions;
export default AuthSlice;