import { createSlice } from "@reduxjs/toolkit";

export const weekViewSlice = createSlice({
  name: "weekView",
  initialState: {
    days: [
    {day: "Monday", distance: 0, duration: 0, description:""},
    {day: "Tuesday", distance: 0, duration: 0, description:""},
    {day: "Wednesday", distance: 0, duration: 0, description:""},
    {day: "Thursday", distance: 0, duration: 0, description:""},
    {day: "Friday", distance: 0, duration: 0, description:""},
    {day: "Saturday", distance: 0, duration: 0, description:""},
    {day: "Sun", distance: 0, duration: 0, description:""},
    ]
  },
  reducers: {
    updateDistance: (state, action) => {
      const [id, distance]=action.payload;
      const day = state.days.find(d => d.day === id);
      day.distance = distance;
    },
    updateDuration: (state, action) => {
      const [id, duration]=action.payload;
      const day = state.days.find(d => d.day === id);
      day.duration = duration;
    },
    updateDescription: (state, action) => {
      const [id, description]=action.payload;
      const day = state.days.find(d => d.day === id);
      day.description = description;
    },
  },
});
  
  export const { updateDistance, updateDuration, updateDescription } = weekViewSlice.actions
  
  export const selectDay = (state) => state.weekView.days;

  export default weekViewSlice.reducer