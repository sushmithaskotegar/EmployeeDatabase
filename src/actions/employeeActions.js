// employeeActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import EmployeeService from '../services/EmployeeService';

// Action to fetch employees
export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  const response = await EmployeeService.getEmployees();
  return response.data;
});

// Action to create employee
export const createEmployee = createAsyncThunk('employees/create', async (employee) => {
  const response = await EmployeeService.createEmployee(employee);
  return response.data;
});

// Action to update employee
export const updateEmployee = createAsyncThunk('employees/update', async ({ employeeId, employee }) => {
  const response = await EmployeeService.updateEmployee(employee, employeeId);
  return response.data;
});

// Action to delete employee
export const deleteEmployee = createAsyncThunk('employees/delete', async (employeeId) => {
  await EmployeeService.deleteEmployee(employeeId);
  return employeeId;
});
