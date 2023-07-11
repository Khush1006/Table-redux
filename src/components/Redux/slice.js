import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk(
  "TableData/getData",
  async () =>
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {

        console.log('res',res)
        return res.data;
      })
      .catch((err) => {
        return err;
      })
);

const customSlice = createSlice({
  name: "TableData",
  initialState: {
    data: [],
    loading: false,
    alerts:{
      type:'',
      message:null,
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
      // state.alerts.type=false;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.alerts.type='success';
      state.alerts.message = "Data fetched";
    });
    builder.addCase(getData.rejected, (state) => {
      state.loading = false;
      state.alerts.type='error';
      state.alerts.message = "rejected";
    });
  },
});

export default customSlice.reducer;
