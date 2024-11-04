import React from 'react';

const Dashboard = () => {
    return (
        <div className="container">
            <h1>Welcome to Your Dashboard</h1>
            <p>Here you can manage your account.</p>
            <button onClick={() => window.location.href='/login'}>Logout</button>
        </div>
    );
};

export default Dashboard;
