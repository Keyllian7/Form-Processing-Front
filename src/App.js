import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/areaLogin/Login';
import AdminLogin from './components/admLogin/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;