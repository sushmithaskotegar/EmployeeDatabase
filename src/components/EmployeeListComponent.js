// EmployeeListComponent.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../actions/employeeActions';
import styled from 'styled-components';

const EmployeeListWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const EmployeeCard = styled.div`
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmployeeInfo = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  margin: 10px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EmployeeListComponent = ({ employees, fetchEmployees, deleteEmployee }) => {
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId);
  };

  return (
    <EmployeeListWrapper>
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id}>
          <EmployeeInfo>
            <h3>{employee.firstName} {employee.lastName}</h3>
            <p>Email: {employee.email}</p>
          </EmployeeInfo>
          <div>
            <Button style={{backgroundColor:"red"}} onClick={() => handleDelete(employee.id)}>Delete</Button>
            <Link to={`/update/${employee.id}`}>
              <Button>Update</Button>
            </Link>
            <Link to={`/view/${employee.id}`}>
              <Button>View</Button>
            </Link>
          </div>
        </EmployeeCard>
      ))}
      <Link to="/create">
        <Button>Create Employee</Button>
      </Link>
    </EmployeeListWrapper>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employee.employees,
});

export default connect(mapStateToProps, { fetchEmployees, deleteEmployee })(EmployeeListComponent);
