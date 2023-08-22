import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Dashboard from './components/Home/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/tickets" element={<Dashboard/>} />
          <Route path="/tickets/:id" element={<Dashboard/>} />
          <Route path="/faqs" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
