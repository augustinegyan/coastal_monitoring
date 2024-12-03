import React from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const AnalyticsDashboard = () => {
  const statisticsData = [
    { name: 'BOD_mg/L', min: -1.55, max: 105.85, avg: 43.19, color: '#1e88e5' },
    { name: 'COD_mg/L', min: -8.02, max: 206.12, avg: 89.49, color: '#43a047' },
    { name: 'NO3_mg/L-N', min: 0, max: 1231, avg: 22.45, color: '#e53935' },
    { name: 'pH_units', min: 7.18, max: 34.96, avg: 13.19, color: '#fdd835' },
    { name: 'SpCond_uS/cm', min: 0, max: 2351, avg: 809.14, color: '#3949ab' },
    { name: 'Temp_deg_C', min: 23.32, max: 39.73, avg: 30.88, color: '#8e24aa' },
    { name: 'TRYP_TempCorr', min: -5.24, max: 115.08, avg: 48.83, color: '#2e7d32' },
    { name: 'Turb_NTU', min: 3.62, max: 98.9, avg: 29.05, color: '#1565c0' },
    { name: 'Total_Coli/100mL', min: -232.41, max: 5096.92, avg: 2162.93, color: '#d81b60' }
  ];

  // Your existing chart data...
  const barData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 }
  ];

  const pieData = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 }
  ];

  const lineData = [
    { name: 'Week 1', value: 100 },
    { name: 'Week 2', value: 300 },
    { name: 'Week 3', value: 200 },
    { name: 'Week 4', value: 500 },
    { name: 'Week 5', value: 400 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
      </div>

      {/* Statistics Panel */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-bold mb-4">Statistics</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4">Parameter</th>
                <th className="text-right py-2 px-4">Min</th>
                <th className="text-right py-2 px-4">Max</th>
                <th className="text-right py-2 px-4">Average</th>
              </tr>
            </thead>
            <tbody>
              {statisticsData.map((stat) => (
                <tr key={stat.name} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: stat.color }}
                    ></div>
                    {stat.name}
                  </td>
                  <td className="text-right py-2 px-4">{stat.min.toFixed(2)}</td>
                  <td className="text-right py-2 px-4">{stat.max.toFixed(2)}</td>
                  <td className="text-right py-2 px-4">{stat.avg.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Bar Charts */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">BOD_mg/L</h2>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">COD_mg/L</h2>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">NO3_mg/L-N</h2>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Charts */}
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Metrics {index + 3}</h2>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}

        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Overview</h2>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;