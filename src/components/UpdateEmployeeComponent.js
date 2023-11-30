// UpdateEmployeeComponent.js

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateEmployee } from '../actions/employeeActions';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const UpdateEmployeeWrapper = styled.div`
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

const UpdateEmployeeComponent = ({ updateEmployee, employees }) => {
  const { id } = useParams();
  const [updatedEmployee, setUpdatedEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    departmentCode: '', // Default value for the department
  });

  useEffect(() => {
    const existingEmployee = employees.find((employee) => employee.id === id);
    if (existingEmployee) {
      setUpdatedEmployee(existingEmployee);
    }
  }, [id, employees]);

  const handleUpdate = () => {
    updateEmployee({ employeeId: id, employee: updatedEmployee });
  };

  return (
    <UpdateEmployeeWrapper>
      <h2>Update Employee</h2>
      <Form>
        <Input
          type="text"
          placeholder="First Name"
          value={updatedEmployee.firstName}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, firstName: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={updatedEmployee.lastName}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, lastName: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Email"
          value={updatedEmployee.email}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, email: e.target.value })}
        />
        <Select
          value={updatedEmployee.department}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, departmentCode: e.target.value })}
        >
          <option value="CSE">CSE</option>
          <option value="ISE">ISE</option>
          <option value="EEE">EEE</option>
        </Select>
        <Link to="/employees">
          <Button type="button" onClick={handleUpdate}>
            Update Employee
          </Button>
        </Link>
      </Form>
    </UpdateEmployeeWrapper>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employee.employees,
});

export default connect(mapStateToProps, { updateEmployee })(UpdateEmployeeComponent);
