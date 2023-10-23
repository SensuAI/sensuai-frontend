
'use client';
import * as React from 'react';
import BackgroundSVG from '@/components/backgroundsvg';
import SimpleBarCharts from '@/components/charts/simple-bar-charts';

const BranchStatsPage = () => {
    return (
        <div className="w-full flex flex-col items-center p-10">
            <BackgroundSVG />
            Branch Stats Page
            <SimpleBarCharts />
        </div>
    );
};

export default BranchStatsPage;