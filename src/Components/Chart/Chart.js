import React from 'react';
import './Chart.css';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({title ,data,dataKey})=>{
    return (
            <div className="chart">
                <h3 className="chart__title">{title}</h3>
                <ResponsiveContainer width="100%" aspect={4/1}>
                    <AreaChart data={data}>
                        <XAxis dataKey="name" stroke="#141414f5" />
                        <Area type="monotone" stroke="#e50914" fill = "#e50914" dataKey={dataKey} strokeWidth={2}/>
                        <Tooltip isAnimationActive={false}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
} 
export default Chart;