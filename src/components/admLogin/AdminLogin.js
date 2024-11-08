import React from 'react';
import './AdminLogin.css';

function AdminLogin() {
    const handleLogin = () => {
        // Lógica de autenticação aqui
    };

    return (
        <div className="container">
            <div className="admin-login-container">
                <h2>Admin Login</h2>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>

    );
}

export default AdminLogin;