import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Home/Dashboard';
import Toast from './components/common/Toast';
const App = () => {
  return (
    <>
    <Toast />
    <Router>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register/customer" element={<Login/>} />
          <Route path="/register/employee" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/tickets" element={<Dashboard/>} />
          <Route path="/tickets/:id" element={<Dashboard/>} />
          <Route path="/faqs" element={<Dashboard/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
