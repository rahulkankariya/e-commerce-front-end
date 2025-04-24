// FilteredBarChart.tsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, ButtonGroup } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components in ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FilteredBarChart: React.FC = () => {
  const [filter, setFilter] = useState('daily'); // Filter state (daily, weekly)

  // Sample data for daily and weekly sales
  const dailyData = {
    labels: ['01', '02', '03', '04', '05'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const weeklyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 450, 600, 750],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Function to handle filter change
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  // Use the filter to choose the correct data
  const data = filter === 'daily' ? dailyData : weeklyData;

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Sales (${filter.charAt(0).toUpperCase() + filter.slice(1)})`,
      },
    },
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Sales Performance
        </Typography>
        {/* Filter Buttons */}
        <ButtonGroup variant="contained" aria-label="filter options" sx={{ marginBottom: 2 }}>
          <Button onClick={() => handleFilterChange('daily')}>Daily</Button>
          <Button onClick={() => handleFilterChange('weekly')}>Weekly</Button>
        </ButtonGroup>
        {/* Bar Chart */}
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default FilteredBarChart;
