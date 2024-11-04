import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add authentication logic here
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h1>Login to Your Account</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
                <p><a href="#" onClick={() => navigate('/register')}>Don't have an account? Register here.</a></p>
            </form>
        </div>
    );
};

export default Login;
