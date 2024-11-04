import React from 'react';

const Dashboard = ({ user, onLogout }) => {
    return (
        <div className="container">
            <h1>Welcome, {user.username}!</h1>
            <p>This is your dashboard where you can manage your account.</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
