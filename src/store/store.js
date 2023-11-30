import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../slices/employeeSlices';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    // Add other reducers if needed
  },
});

export default store;
