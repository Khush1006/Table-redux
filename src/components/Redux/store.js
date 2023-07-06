import { configureStore } from "@reduxjs/toolkit";
import customSlice from './store.js'

const store=configureStore({
   reducer:{
    TableData:customSlice,
   } 
});

export default store;