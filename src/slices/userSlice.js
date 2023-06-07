import {createSlice} from "@reduxjs/toolkit"

const initialState ={
     user:null,
};

export const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUsers:(state,action)=>{
             state.user = action.payload;
        },
        logout:(state,action)=>{
              state.user = null;
        }
    }
})

export const {setUsers,logout}=userSlice.actions;

export const getUsers=(state)=>state.userInfo.user;

export default userSlice.reducer;