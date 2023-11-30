// CreateEmployeeComponent.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions/employeeActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CreateEmployeeWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

const CreateEmployeeComponent = ({ createEmployee }) => {
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    departmentCode: '', // Default value for the department
  });
console.log(newEmployee)
  const handleCreate = () => {
    createEmployee(newEmployee);
  };

  return (
    <CreateEmployeeWrapper>
      <h2>Create Employee</h2>
      <Form>
        <Input
          type="text"
          placeholder="First Name"
          value={newEmployee.firstName}
          onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={newEmployee.lastName}
          onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Email"
          value={newEmployee.email}
          onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
        />
        <Select
          value={newEmployee.department}
          onChange={(e) => setNewEmployee({ ...newEmployee, departmentCode: e.target.value })}
        >
          <option value="CSE">CSE</option>
          <option value="ISE">ISE</option>
          <option value="EEE">EEE</option>
        </Select>
        <Link to="/employees">
          <Button type="button" onClick={handleCreate}>
            Create Employee
          </Button>
        </Link>
      </Form>
    </CreateEmployeeWrapper>
  );
};

export default connect(null, { createEmployee })(CreateEmployeeComponent);
