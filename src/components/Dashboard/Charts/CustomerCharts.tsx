import { Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [40, 70, 50, 90,40];
const labels = ['Jan', 'Feb', 'Mar', 'Apr','May'];

const CustomerChart = () => (
  <Box>
  <BarChart
    series={[{ data,  }]}
    xAxis={[{ data: labels, scaleType: 'band' }]}
  //   width={900}
    height={300}
   sx={{maxWidth:"none"}}
   yAxis={[
    {
      position: 'none', // Hides the Y-axis line and labels
    },
    
  ]}
  colors={['#FF5733']}
  />
  
</Box >
);

export default CustomerChart;
