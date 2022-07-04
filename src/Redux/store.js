import { configureStore } from '@reduxjs/toolkit';
import weekViewReducer from './Reducers/weekViewSlice';

export const store = configureStore({
    reducer: {
        weekView: weekViewReducer,
    }

})