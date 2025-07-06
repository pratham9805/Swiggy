import { createSlice } from "@reduxjs/toolkit";

const restSlice = createSlice({
  name: "restaurants",
  initialState: {
    restdata: [],
  },
  reducers: {
    setRestData: (state, action) => {
      state.restdata = action.payload;
    },
  },
});

export const { setRestData } = restSlice.actions;
export default restSlice.reducer;
