import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import StatCard from './SubTabs'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AttachMoney  } from "@mui/icons-material";
import BoyIcon from '@mui/icons-material/Boy';
const theme = createTheme({
    palette: {
      secondary: {
        main: "#fff", // Set the secondary color to your custom color
      },
    },
  });
  
const TabFilter: React.FC = () => {
    
  const [tabIndex, setTabIndex] = useState(3); // "Year" as default

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const iconStyle = (bg: string) => ({
    background: bg,
    color: "white",
    width: "50px",
    height: "50px",
    padding: "10px",
    borderRadius: "10%",
    fontSize: "30px",
    borderColor: bg,
  });

  return (
    <ThemeProvider theme={theme}>
     <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
      {/* Tabs */}
      <Box
        className="w-full sm:w-auto bg-white shadow-sm rounded"
        sx={{ borderRadius: 2 }}
      >
    <Tabs
style={{borderColor:"red"}}
textColor="secondary"
  value={tabIndex}
  onChange={handleTabChange}
  variant="scrollable"
  scrollButtons="auto"
  sx={{
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent", // Remove default blue underline
    },
  }}
>
  {["Today", "Week", "Month", "Year"].map((label, index) => (
    <Tab
      key={label}
      label={label}
      sx={{
        textTransform: "none",
        borderRadius: 1,
        px: 2,
        mx: 0.5,
        fontWeight: 500,
        bgcolor: tabIndex === index ? "#7258DB" : "white", // Selected tab background color
        color: tabIndex === index ? "white" : "#7258DB",
         // Selected tab text color
        "&:hover": {
        //   bgcolor: tabIndex === index ? "transparent" : "transparent", // Hover effect for unselected tabs
        },
      }}
    />
  ))}
</Tabs>



      </Box>

      {/* Date Filter */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <TextField
          type="date"
          size="small"
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
        <IconButton color="primary">
          <FilterAltIcon />
        </IconButton>
      </div>
    </div>
    <div className="mt-1">
  <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-3">
          <StatCard
            title="Customers"
            value={54208}
            icon={<BoyIcon style={iconStyle("green")} />}
            // color="#D1E7DD"
            // fontColor="#0A3622"
          />
          <StatCard
            title="Orders"
            value={11024}
            icon={<AttachMoney style={iconStyle("#DC3545")} />}
          
          />
          <StatCard
            title="Avg Sales"
            value={8546}
            icon={<AttachMoney style={iconStyle("#FFC107")} />}
           
          />
          <StatCard
            title="Avg Item Sale"
            value={8546}
            icon={<AttachMoney style={iconStyle("#FFC107")} />}
           
          />
          <StatCard
            title="Total Sale"
            value={8546}
            icon={<AttachMoney style={iconStyle("#FFC107")} />}
           
          />
          <StatCard
            title="Visitors"
            value={8546}
            icon={<AttachMoney style={iconStyle("#FFC107")} />}
           
          />
          <StatCard
            title="Total Products"
            value={8546}
            icon={<AttachMoney style={iconStyle("#FFC107")} />}
           
          />
          <StatCard
            title="Top Selling Item"
            value={8546}
            icon={<AttachMoney style={iconStyle("#FFC107")} />}
           
          />
          <StatCard
            title="Dealership"
            value={8546}
            icon={<AttachMoney style={iconStyle("#FFC107")} />}
           
          />
         
        </div>
    </div>
    </ThemeProvider>
   
  );
};

export default TabFilter;
