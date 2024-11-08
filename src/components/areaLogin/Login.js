import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('');
  };

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button onClick={handleUserLogin}>Acessar como usuário</button>
      <button onClick={handleAdminLogin}>Acessar como admin</button>
    </div>
  );
}

export default Login;