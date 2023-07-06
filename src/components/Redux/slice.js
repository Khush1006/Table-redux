import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getData=createAsyncThunk('TableData/getData',async()=>{
  await axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    return res.data;
  }).catch((err)=>{
     return err;
  })
})
const customSlice=createSlice({
    name:"TableData",
    initialState:{
        data:[],
        loading:false,
        alertSuccess:null,
        alertFailure:null, 
    },
    extraReducers:{
[getData.pending]:(state,action)=>{
  state.loading=true;
},
[getData.fulfilled]:(state,action)=>{
  state.loading=false;
  state.TableData=action.payload;
},
[getData.rejected]:(state,action)=>{
  state.loading=false;
  
}
    }
})

// export const {}=customSlice.actions;
export default customSlice.reducer;