import { createSlice } from "@reduxjs/toolkit";

export const weekViewSlice = createSlice({
  name: "weekView",
  initialState: {
    distance: 0,
    duration: 0,
    description: "",
  },
  reducers: {
    updateDistance: (state, action) => {
      state.distance = action.payload;
    },
    updateDuration: (state, action) => {
      state.duration = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});
  
  export const { updateDistance, updateDuration, updateDescription } = weekViewSlice.actions
  
  export default weekViewSlice.reducer