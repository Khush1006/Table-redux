import { configureStore } from "@reduxjs/toolkit";
import customSlice from './slice.js'

const store=configureStore({
   reducer:{
    TableData:customSlice,
   } 
});

export default store;