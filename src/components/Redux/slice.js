import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk(
  "TableData/getData",
  async (args, { rejectWithValue }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("opps found an error");
    }
  }
);

const customSlice = createSlice({
  name: "TableData",
  initialState: {
    data: [],
    loading: false,
    alerts: {
      alertSuccess: "",
      alertFailure: "",
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.alerts.alertSuccess = "Data fetched";
    });
    builder.addCase(getData.rejected, (state) => {
      state.loading = false;
      state.alerts.alertFailure = "rejected";
    });
  },
});


export default customSlice.reducer;
