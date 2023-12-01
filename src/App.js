// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeListComponent />} />
        <Route path="/create" element={<CreateEmployeeComponent />} />
        <Route path="/update/:id" element={<UpdateEmployeeComponent />} />
        <Route path="/view/:id" element={<ViewEmployeeComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
