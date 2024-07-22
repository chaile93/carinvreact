import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Car Inventory Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/cars">View Cars</Link></li>
                    <li><Link to="/add-car">Add Car</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboard;
