// employeeSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import EmployeeService from '../services/EmployeeService';

export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  const response = await EmployeeService.getEmployees();
  return response.data;
});

export const createEmployee = createAsyncThunk('employees/create', async (employee) => {
  const response = await EmployeeService.createEmployee(employee);
  return response.data;
});

export const updateEmployee = createAsyncThunk('employees/update', async ({ employeeId, employee }) => {
  const response = await EmployeeService.updateEmployee(employee, employeeId);
  return response.data;
});

export const deleteEmployee = createAsyncThunk('employees/delete', async (employeeId) => {
  await EmployeeService.deleteEmployee(employeeId);
  return employeeId;
});

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createEmployee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees.push(action.payload);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateEmployee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex((employee) => employee.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
        state.status = 'succeeded';
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = state.employees.filter((employee) => employee.id !== action.payload);
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
