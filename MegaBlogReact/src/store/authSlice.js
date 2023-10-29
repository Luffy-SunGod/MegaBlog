import { createSlice } from "@reduxjs/toolkit";


const intialState={
    status:false,
    useData:null
}

const authSlice=createSlice({
    name:"auth",
    intialState,
    reducers:{
         login:(state,action)=>{
            state.status=true;
            state.useData=action.payload.useData;
         },

         logout:(state,action)=>{
            state.status=false;
            state.useData=null;
         }
        }
})
export const{login,logout}=authSlice.actions;
export default authSlice.reducer;