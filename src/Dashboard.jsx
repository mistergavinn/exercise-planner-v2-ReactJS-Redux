import React from 'react';

import './Dashboard.scss';
import StatDashboard from './StatsView/StatDashboard';
import WeekViewDashboard from './WeekView/WeekViewDashboard';

function Dashboard() {
    return ( 
        <div className='border-outline'>
            This is dashboard view
            <div className='border-outline2'>
                <StatDashboard />
            </div>
            <div className='border-outline3'>
                <WeekViewDashboard />
            </div>
        </div>
     );
}

export default Dashboard;