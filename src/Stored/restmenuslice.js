import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice(
   {
    name:"menuslice",
    initialState: {restdata:[]},
    reducers:
    {

        setrestdata : (state,action)=>{state.restdata=action.payload}
    },
   }
);

export const {setrestdata} = menuSlice.actions;
export default menuSlice.reducer;