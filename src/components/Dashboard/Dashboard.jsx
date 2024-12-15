import React from 'react';

import DonutChart from './DonutChart';
import Profile from '../Home/Profile';
import BarChart from './BarChart';
import LineChart from './LineCHart';
import ColumnChart from './ColumnChat';
import AreaChartWithFilter from './AreaChartWithFilter';
import DonutChartWithMenu from './DonutChartWithMenu';

function Dashboard() {
    return (
        <div className="flex flex-col">
             <Profile />
            <div className="w-full flex flex-row shadow-sm justify-evenly">
                <div className=" ">
                <DonutChart />
                </div>
                <BarChart/>
                <div className="w-1/3">
                    <LineChart/>
                </div>
                <div className="w-1/3">
                    <ColumnChart />
                </div>
            </div>
        
            <div className="w-full flex flex-row shadow-sm justify-evenly mt-7">
                <div className="w-1/2">
                    <DonutChartWithMenu />
                </div>
                <div className="w-1/3">
                    <AreaChartWithFilter />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
