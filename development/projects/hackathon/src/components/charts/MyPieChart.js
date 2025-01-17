import React from 'react';
import {
    PieChart, Pie, Legend, Tooltip,
  } from 'recharts';

  const data01 = [
    { name: 'Group A', value: 400, fill: '#1184d8' }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];
  
  const data02 = [
    { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
  ];

const MyPieChart = ( props ) => {
    console.log('chart data is');
    console.log(props.chartData);
    return (
        <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={true} data={props.chartData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
            {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#8884d8"/> */}
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>

        </PieChart>
		);
}

export default MyPieChart;