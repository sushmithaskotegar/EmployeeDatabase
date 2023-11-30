import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const Heading = styled.h3`
    text-align: center;
`;

const Row = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const Label = styled.label`
    font-weight: bold;
    margin-right: 10px;
`;

const ViewEmployeeComponent = (props) => {
    const [employee, setEmployee] = useState({});
    const [department, setDepartment] = useState({});
    const { id } = useParams();

    useEffect(() => {
        EmployeeService.viewEmployee(id)
            .then((res) => {
                console.log(res.data.employee.firstName);
                setEmployee(res.data.employee);
                setDepartment(res.data.department);
            });
    }, [id]);

    return (
        <div>
            <br></br>
            <Card className="card col-md-6 offset-md-3">
                <Heading>View Employee Details</Heading>
                <div className="card-body">
                    <Row>
                        <Label>Employee First Name:</Label>
                        <div> {employee.firstName}</div>
                    </Row>
                    <Row>
                        <Label>Employee Last Name:</Label>
                        <div> {employee.lastName}</div>
                    </Row>
                    <Row>
                        <Label>Employee Email ID:</Label>
                        <div> {employee.email}</div>
                    </Row>
                    <Row>
                        <Label>Employee Department Code:</Label>
                        <div> {employee.departmentCode}</div>
                    </Row>
                </div>
            </Card>
            <Card className="card col-md-6 offset-md-3">
                <Heading>View Organization Details</Heading>
                <div className="card-body">
                    <Row>
                        <Label>Department Code:</Label>
                        <div> {department.departmentCode}</div>
                    </Row>
                    <Row>
                        <Label>Department Name:</Label>
                        <div> {department.departmentName}</div>
                    </Row>
                    <Row>
                        <Label>Department Description:</Label>
                        <div> {department.departmentDescription}</div>
                    </Row>
                </div>
            </Card>
        </div>
    );
};

export default ViewEmployeeComponent;
