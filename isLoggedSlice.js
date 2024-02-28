import { createSlice } from "@reduxjs/toolkit";

 const loggedSlice = createSlice({

    name:"logged",
    initialState:{
        loggedIn:false
    },
    reducers: {
        login: (state)=> {return {loggedIn: true}},
        logout: (state)=> {return{loggedIn:false}}
    }

 })

 export const{login,logout} = loggedSlice.actions;

 export default loggedSlice.reducer;