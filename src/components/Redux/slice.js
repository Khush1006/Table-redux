import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk('TableData/getData', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});
const customSlice=createSlice({
    name:"TableData",        
    initialState:{
        data:[],
        loading:false,
        alerts:{
        alertSuccess:'',
        alertFailure:'', 
        }
    },
    // reducer:{
    //   dismissAlert(state){
    //       state.alerts=false;
    //   }
    // },
    extraReducers:{
[getData.pending]:(state)=>{
  state.loading=true;
},
[getData.fulfilled]:(state,action)=>{
  state.loading=false;
  state.data=action.payload;
  state.alerts.alertSuccess="Data fetched"
},
[getData.rejected]:(state)=>{
  state.loading=false; 
  state.alerts.alertFailure="rejected"
}
    }
})

// export const {dismissAlert}=customSlice.actions;
export default customSlice.reducer;