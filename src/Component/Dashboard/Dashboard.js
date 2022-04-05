import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 60401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 94500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 470100
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 304050
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 409000
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 510000
        }
    ]

    return (
        <div>
            <div style={{ width: '550px' }} >
                <h3 className='text-center font-bold text-blue-700 text-xl'>Month wish Sell</h3>
                <LineChart width={530} height={270} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />

                </LineChart>
            </div>

            <div style={{ width: '550px' }}>
                <h3 className='text-center font-bold text-blue-700 text-xl'>Investment vs revenue</h3>
                <AreaChart width={530} height={270} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>

            <div style={{ width: '550px' }} >
                <h3 className='text-center font-bold text-blue-700 text-xl'>Investment vs revenue</h3>

                <BarChart width={510} height={270} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>

            <div style={{ width: '550px' }}>
                <h3 className='text-center font-bold text-blue-700 text-xl'>Investment vs revenue</h3>
                <br />
                <PieChart width={530} height={270}>
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>

        </div >
    );
};

export default Dashboard;