import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading:false,
        user:null       // Making user as null at initial
    },
    reducers: {
        //actions //
        setLoading:(state,action)=>
        {
            state.loading = action.payload;
        },
        setUser:(state,action)=>{
            state.user = action.payload;  
        }

    }
})

export const {setLoading,setUser}=authSlice.actions;
export default authSlice.reducer;