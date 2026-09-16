import React from 'react';
import Counter from '../components/counter';

const Dashboard = () => {
    return (
        <div>
            <h1>This is a Dashboard!</h1>
            <Counter></Counter>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Others</li>
            </ul>
        </div>
    );
};

export default Dashboard;