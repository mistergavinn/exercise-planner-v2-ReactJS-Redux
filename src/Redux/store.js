import { configureStore } from '@reduxjs/toolkit';
import weekViewReducer from './Reducers/WeekViewSlice';

export const store = configureStore({
    reducer: {
        weekView: weekViewReducer,
    }

})